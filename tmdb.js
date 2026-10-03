export const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_500 = "https://image.tmdb.org/t/p/w500";
export const IMG_ORIG = "https://image.tmdb.org/t/p/original";

export const SERVERS = [
  { name: "VidSrc", movie: id => "https://vidsrc.xyz/embed/movie/" + id, tv: (id,s,e) => "https://vidsrc.xyz/embed/tv/" + id + "/" + s + "/" + e },
  { name: "VidAPI", movie: id => "https://vidapi.xyz/embed/movie/" + id, tv: (id,s,e) => "https://vidapi.xyz/embed/tv/" + id + "&s=" + s + "&e=" + e }
];

export const OTT_PLATFORMS = [
  { id: "", name: "All" }, { id: "8", name: "Netflix" }, { id: "119", name: "Prime Video" },
  { id: "337", name: "Disney+" }, { id: "350", name: "Apple TV+" }, { id: "232", name: "ZEE5" }
];

export async function fetchTMDB(endpoint) {
  try {
    const res = await fetch(BASE_URL + endpoint + (endpoint.includes("?") ? "&" : "?") + "api_key=" + TMDB_API_KEY);
    return await res.json();
  } catch(e) { return null; }
}