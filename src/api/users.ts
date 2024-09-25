import { USERS } from "@constants/entitiesKey";
import type { User } from "@interfaces/users";
import { axiosInstance } from "./axiosInstance";

export interface CreateUserRequest {
  name: string;
  email: string;
  role: string;
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  email?: string;
  role?: string;
}

interface GetUsersResponse {
  user: User[];
  count: number;
}

export const getUsers = async (params = {}) => {
  const { data } = await axiosInstance.get<GetUsersResponse>(USERS, { params });

  return data;
};

export const createUser = async (body: CreateUserRequest) => {
  const { data } = await axiosInstance.post(USERS, body);

  return data;
};

export const updateUser = async (body: UpdateUserRequest) => {
  const { data } = await axiosInstance.put(USERS, body);

  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await axiosInstance.delete(`${USERS}/${id}`);

  return data;
};
