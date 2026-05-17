# Khojo

[![Publish Package To NPM](https://github.com/tnb24/khojo/actions/workflows/publish.yml/badge.svg)](https://github.com/tnb24/khojo/actions/workflows/publish.yml)

:mag_right: Type-safe last.fm API wrapper

## Getting Started

```bash
# Yarn
yarn add khojo

# NPM
npm install khojo
```

## Example

```ts
import { Client } from "khojo";

const token = process.env.LASTFM_TOKEN;
if (!token) throw new Error("LASTFM_TOKEN is required");

const client = new Client(token);

/* username is mandatory; period and limit are optional */
// get the top artists of a user
console.log(await client.getTopArtists({ username: "KidnappingNemo", period: "7day", limit: 5 }));
// get the top albums of a user
console.log(await client.getTopAlbums({ username: "KidnappingNemo", period: "7day", limit: 5 }));
// get the top songs of a user
console.log(await client.getTopTracks({ username: "KidnappingNemo", period: "7day", limit: 5 }));

/* username is mandatory; limit is optional but recommended */
// get the recent tracks a user has listened to
console.dir(await client.getRecentTracks({ username: "KidnappingNemo", limit: 1 }));
// get the info available for a user
console.log(await client.getInfo({ username: "KidnappingNemo" }));
```

## Why?

There were no good wrappers for the Last.fm API so I made my own.

:stop_sign: This library is still under active development. Expect bugs and feel free to open pull requests to fix them 🤝
