export type Period = "overall" | "7day" | "1month" | "3month" | "6month" | "12month";

export interface GetInfoParams {
  API_LINK: string;
  KEY: string;
  username: string;
}

export interface GetTopAlbumsParams {
  API_LINK: string;
  KEY: string;
  username: string;
  period?: Period;
  limit?: number;
  page?: number;
}

export interface GetRecentTracksParams {
  API_LINK: string;
  KEY: string;
  username: string;
  limit?: number;
  from?: string;
  to?: string;
  extended?: boolean;
  page?: number;
}

export interface GetTopArtistsParams {
  API_LINK: string;
  KEY: string;
  username: string;
  period?: Period;
  limit?: number;
  page?: number;
}

export interface GetTopTracksParams {
  API_LINK: string;
  KEY: string;
  username: string;
  period?: Period;
  limit?: number;
  page?: number;
}

export interface LastfmImage {
  size: "small" | "medium" | "large" | "extralarge" | "mega" | "";
  "#text": string;
}

export interface PaginationAttr {
  user: string;
  totalPages: string;
  page: string;
  perPage: string;
  total: string;
}

export interface UserInfo {
  name: string;
  realname: string;
  image: LastfmImage[];
  url: string;
  country: string;
  age: string;
  gender: string;
  subscriber: string;
  playcount: string;
  playlists: string;
  bootstrap: string;
  registered: { "#text": string; unixtime: string };
}

export interface TopArtist {
  name: string;
  playcount: string;
  mbid: string;
  url: string;
  streamable: string;
  image: LastfmImage[];
  "@attr": { rank: string };
}

export interface TopArtistsResponse {
  artist: TopArtist[];
  "@attr": PaginationAttr;
}

export interface TopAlbum {
  name: string;
  playcount: string;
  mbid: string;
  url: string;
  artist: { name: string; mbid: string; url: string };
  image: LastfmImage[];
  "@attr": { rank: string };
}

export interface TopAlbumsResponse {
  album: TopAlbum[];
  "@attr": PaginationAttr;
}

export interface TopTrack {
  name: string;
  playcount: string;
  mbid: string;
  url: string;
  duration: string;
  streamable: { "#text": string; fulltrack: string };
  artist: { name: string; mbid: string; url: string };
  image: LastfmImage[];
  "@attr": { rank: string };
}

export interface TopTracksResponse {
  track: TopTrack[];
  "@attr": PaginationAttr;
}

export interface RecentTrackArtistBasic {
  "#text": string;
  mbid: string;
}

export interface RecentTrackArtistExtended {
  name: string;
  mbid: string;
  url: string;
  image: LastfmImage[];
}

export interface RecentTrack {
  name: string;
  mbid: string;
  url: string;
  artist: RecentTrackArtistBasic | RecentTrackArtistExtended;
  album: { "#text": string; mbid: string };
  image: LastfmImage[];
  streamable: string;
  date?: { "#text": string; uts: string };
  "@attr"?: { nowplaying: string };
}

export interface RecentTracksResponse {
  track: RecentTrack[];
  "@attr": PaginationAttr;
}
