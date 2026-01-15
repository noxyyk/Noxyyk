import { lastfmtoken } from "$env/static/private";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    async function fetchData() {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=noxyyk&api_key=${lastfmtoken}&format=json`)
        const json = await response.json()
        return json?.recenttracks ?? null
      }
      const data = await fetchData()
    return {
      meta: {
        current: data?.track?.[0]?.["@attr"]?.["nowplaying"] === "true" ? data.track[0] : null,
        recent: data?.track ?? null,
        attr: data?.["@attr"] ?? null,
      },
    }
  }