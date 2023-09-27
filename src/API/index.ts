import axios from "axios";
import { DataType } from "../types";

const baseURL = "https://64f732e69d775408495348ae.mockapi.io/api/v1";

const client = axios.create({
  baseURL: baseURL,
});

export const getData = () => {
  const response = client.get<DataType[]>("/authmock");
  return response;
};
