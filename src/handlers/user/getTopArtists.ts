import axios from "axios";
import { GetTopArtistsParams, TopArtistsResponse } from "../../types/types";

export async function getTopArtists(params: GetTopArtistsParams): Promise<TopArtistsResponse> {
  const response = await axios.get(params.API_LINK, {
    params: {
      method: "user.gettopartists",
      username: params.username,
      api_key: params.KEY,
      format: "json",
      period: params.period,
      limit: params.limit,
      page: params.page,
    },
  });
  return response.data.topartists;
}
