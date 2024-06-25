import fetchAPI from "./fetchAPI";

export const fetchListCollection = () => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-listing-collection", // Specify the endpoint



  });
};
export const fetchMyNFT = (wallet: any) => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-list-bought-by-user?wallet_address=" + wallet
  });
};
export const fetchBought = (id: any) => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-list-bought-collection?nft_address=" + '0xf45fa942b255700e29c599ab5d49ced33ff43b1d' + "&token_id=" + id


  });
};
export const fetchListRef = (wallet: any) => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-list-affiliate-by-user?wallet_address=" + wallet
  });
};


export const getListRef = (address: any) => {
  return fetchAPI.request({
    method: "get", // Specify the HTTP method
    url: "/get-list-refed?wallet_address=" + address, // Specify the endpoint
  });
};