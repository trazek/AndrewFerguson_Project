export const getApiUrl = () => {
  const API_URL_FALLBACK = "https://the-one-api.dev/";
  const API_VERSION_FALLBACK = "v2";

  const url = process.env.API_URL ?? API_URL_FALLBACK;
  const version = process.env.API_VERSION ?? API_VERSION_FALLBACK;

  return `${url}${version}`;
};

export const getAPiHeaders = (): RequestInit => {
  const getAuthToken = () => process.env.API_AUTH_TOKEN ?? "";

  return {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
  };
};
