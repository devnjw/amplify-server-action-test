'use server'

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export default async function getCompetitions() {
  const headers: HeadersInit = {
    Authorization: `Bearer ${API_KEY}`,
  };
  const api_url = `${API_URL}/competitions/`;
  const res = await fetch(api_url, { headers });
  
  return res.json();
}
