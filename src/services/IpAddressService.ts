import axios from "axios";
import { UserIpAddressInfo } from "../models/UserIpAddressInfo";

const baseUrl: string = process.env.REACT_APP_API_URL || "";

export const getIpAddressInfo = (): Promise<UserIpAddressInfo> => {
  return axios
    .get(`${baseUrl}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
