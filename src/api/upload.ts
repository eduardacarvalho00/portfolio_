import { GetFilesResponse } from "@interfaces/upload";
import { axiosInstance } from "./axiosInstance";

export const uploadFile = async (formData: FormData) => {
  const { data } = await axiosInstance.post("api/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getFiles = async () => {
  const { data } = await axiosInstance.get<GetFilesResponse[]>("api/files/");

  return data;
};
