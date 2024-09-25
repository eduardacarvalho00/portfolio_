import { axiosInstance } from "./axiosInstance";

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export function setAuthToken(token: string) {
  if (axiosInstance.defaults.headers) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export async function login(token: string) {
  const { data } = await axiosInstance.post<LoginResponse>(
    `api/login/azure-ad?token=${token}`
  );

  return data;
}
