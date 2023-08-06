import { FetchDataProps } from "@/types";

export const fetchData = async ({ url, setUrl }: FetchDataProps) => {
  try {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();
    setUrl(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
