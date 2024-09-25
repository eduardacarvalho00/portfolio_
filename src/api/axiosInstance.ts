import { localStorageKey } from "@constants/localStorageKey";
import type { AccountInfoProps } from "@interfaces/users";
import { sendTokenToStorage } from "@utils/sendTokenToStorage";
import axios, { type AxiosError } from "axios";
import { setAuthToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export interface CreateExampleBody {
  name: string;
}

export async function getExample(params = {}) {
  const { data } = await axiosInstance.get("example", { params });

  return data;
}

export async function createExample(body: CreateExampleBody) {
  const { data } = await axiosInstance.post("example", body);

  return data;
}

let isRefreshing = false;
let failedRequestsQueue: any = [];

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const storage = localStorage.getItem(localStorageKey);
    const isError400 = error.response?.status === 401;
    const isJwtExpired =
      error.response?.data.message.detail ===
      "401: Error decoding token claims.";

    if (storage) {
      const { refresh_token } = JSON.parse(storage) as AccountInfoProps;

      if (isError400 && isJwtExpired) {
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          axiosInstance
            .post(`api/login/refresh_token?refresh_token=${refresh_token}`)
            .then((response) => {
              const { access_token } = response.data;

              sendTokenToStorage({ access_token, refresh_token });

              setAuthToken(access_token);

              failedRequestsQueue.forEach((request: any) =>
                request.onSuccess(access_token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request: any) =>
                request.onFailed(err)
              );
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers["Authorization"] = `Bearer ${token}`;
              resolve(axiosInstance(originalConfig));
            },
            onFailed: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
