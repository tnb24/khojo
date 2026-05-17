import axios from "axios";
import { GetTopAlbumsParams, TopAlbumsResponse } from "../../types/types";

export async function getTopAlbums(params: GetTopAlbumsParams): Promise<TopAlbumsResponse> {
  const response = await axios.get(params.API_LINK, {
    params: {
      method: "user.gettopalbums",
      username: params.username,
      api_key: params.KEY,
      format: "json",
      period: params.period,
      limit: params.limit,
      page: params.page,
    },
  });
  return response.data.topalbums;
}
