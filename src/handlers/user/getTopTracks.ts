import axios from "axios";
import { GetTopTracksParams, TopTracksResponse } from "../../types/types";

export async function getTopTracks(params: GetTopTracksParams): Promise<TopTracksResponse> {
  const response = await axios.get(params.API_LINK, {
    params: {
      method: "user.gettoptracks",
      username: params.username,
      api_key: params.KEY,
      format: "json",
      period: params.period,
      limit: params.limit,
      page: params.page,
    },
  });
  return response.data.toptracks;
}
