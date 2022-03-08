import { City, ListResponse } from "model";
import axiosClient from "./axiosClient";

//? Lam sao der getAll tra ve mot mang chu o phai mot AxiosReponse, lam nhu the nao va gan kieu du lieu nhu the nao?
//! Tao mot Model city va tra ve mot Promise co dinh dang City

//! getAll sẽ nhận về một Promise có định dạng là một Object có 2 key là data có dạng là Mảng City và pagination
const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = "/cities";
    //? Định dạng thêm để truyền vào các params
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
