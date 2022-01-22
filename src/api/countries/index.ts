import axiosOriginal from "axios";

const getCountries = async (): Promise<any> => {
  const { data } = await axiosOriginal({
    method: "get",
    url: "https://restcountries.com/v3.1/all"
  });
  return data;
};

export { getCountries };
