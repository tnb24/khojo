import { getTopArtists, getTopAlbums, getTopTracks, getRecentTracks, getInfo } from "./handlers/index";
import { Period } from "./types/types";

export type {
  Period,
  UserInfo,
  TopArtist,
  TopArtistsResponse,
  TopAlbum,
  TopAlbumsResponse,
  TopTrack,
  TopTracksResponse,
  RecentTrack,
  RecentTracksResponse,
  LastfmImage,
  PaginationAttr,
} from "./types/types";

export interface TopOptions {
  username: string;
  period?: Period;
  limit?: number;
  page?: number;
}

export interface RecentTracksOptions {
  username: string;
  limit?: number;
  from?: string;
  to?: string;
  extended?: boolean;
  page?: number;
}

export interface InfoOptions {
  username: string;
}

export class Client {
  private readonly KEY: string;
  private readonly API_LINK: string;

  public readonly getTopArtists = async (opts: TopOptions) => {
    return await getTopArtists({ API_LINK: this.API_LINK, KEY: this.KEY, ...opts });
  };

  public readonly getTopAlbums = async (opts: TopOptions) => {
    return await getTopAlbums({ API_LINK: this.API_LINK, KEY: this.KEY, ...opts });
  };

  public readonly getTopTracks = async (opts: TopOptions) => {
    return await getTopTracks({ API_LINK: this.API_LINK, KEY: this.KEY, ...opts });
  };

  public readonly getRecentTracks = async (opts: RecentTracksOptions) => {
    return await getRecentTracks({ API_LINK: this.API_LINK, KEY: this.KEY, ...opts });
  };

  public readonly getInfo = async (opts: InfoOptions) => {
    return await getInfo({ API_LINK: this.API_LINK, KEY: this.KEY, ...opts });
  };

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("Khojo: API key is required");
    }
    this.KEY = API_KEY;
    this.API_LINK = "https://ws.audioscrobbler.com/2.0";
  }
}
