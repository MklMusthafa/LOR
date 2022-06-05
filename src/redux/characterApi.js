import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

function filter_key(data) {
  let query_filtered = "";
  for (const [key, value] of Object.entries(data)) {
    if (key !== "name" && key !== "sort" && key !== "pages" && key !== "race") {
      query_filtered = query_filtered.concat(
        `${value !== "" ? `&${key}=${value}` : ""}`
      );
    }
    if (key === "name") {
      query_filtered = query_filtered.concat(
        `${value !== "" ? `&${key}=/${value}/i` : ""}`
      );
    }
    if (key === "sort") {
      query_filtered = query_filtered.concat(
        `${value !== "" ? `&${key}=name:${value}` : ""}`
      );
    }
    if (key === "race") {
      function isInArray(value, array) {
        return array.indexOf(value) > -1;
      }
      if (!isInArray("any", value)) {
        let altv = value.join();
        query_filtered = query_filtered.concat(
          `${value.length !== 0 ? `&${key}=${altv}` : ""}`
        );
      }
    }
  }
  query_filtered = "?".concat(query_filtered);
  console.log(query_filtered);
  return query_filtered;
}

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-one-api.dev/v2/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Authorization", "Bearer H565-pYEA1nkICfYhKef");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query({
      query: (character) => {
        return "character".concat(filter_key(character));
      },
    }),
    getCharacterById: builder.query({
      query: (id) => {
        return `character/${id}`;
      },
    }),
  }),
});

export const { useGetCharacterQuery, useGetCharacterByIdQuery } = characterApi;
