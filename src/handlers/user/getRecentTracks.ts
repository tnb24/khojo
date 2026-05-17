import axios from "axios";
import { GetRecentTracksParams, RecentTracksResponse } from "../../types/types";

export async function getRecentTracks(params: GetRecentTracksParams): Promise<RecentTracksResponse> {
  const response = await axios.get(params.API_LINK, {
    params: {
      method: "user.getrecenttracks",
      username: params.username,
      limit: params.limit,
      api_key: params.KEY,
      format: "json",
      from: params.from,
      to: params.to,
      extended: params.extended === undefined ? undefined : params.extended ? 1 : 0,
      page: params.page,
    },
  });
  return response.data.recenttracks;
}
