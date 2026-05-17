import axios from "axios";
import { GetInfoParams, UserInfo } from "../../types/types";

export async function getInfo(params: GetInfoParams): Promise<UserInfo> {
  const response = await axios.get(params.API_LINK, {
    params: {
      method: "user.getinfo",
      username: params.username,
      api_key: params.KEY,
      format: "json",
    },
  });
  return response.data.user;
}
