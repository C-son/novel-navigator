import consts from "@/consts";
import { iSearchResult } from "@/types";
import ky from "ky";

export const searchBooks = async (query: string) => {
  try {
    const response = await ky(`${consts.API_BASE_URL}search.json?q=${query}&fields=title,cover_i,author_name,first_publish_year,key`);
    return await response.json() as iSearchResult;
  } catch (e) {
    return {
      error: "Error fetching books",
    };
  }
};

export const getBook = async (id: string) => {
  try {
    const response = await ky(`${consts.API_BASE_URL}works/${id}.json`);
    return await response.json();
  } catch (e) {
    return {
      error: "Error fetching book",
    };
  
  }
};
