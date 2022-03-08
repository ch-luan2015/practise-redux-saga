import { Student, ListResponse, ListParams } from "model";
import axiosClient from "./axiosClient";

//? Lam sao der getAll tra ve mot mang chu o phai mot AxiosReponse, lam nhu the nao va gan kieu du lieu nhu the nao?
//! Tao mot Model city va tra ve mot Promise co dinh dang City

//! getAll sẽ nhận về một Promise có định dạng là một Object có 2 key là data có dạng là Mảng City và pagination
const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  //! Minh can truyen vao 1 cai student thoi va tra ve chi la mot obj Student
  add(data: Student): Promise<Student> {
    const url = "/students";
    //? Định dạng thêm để truyền vào các params
    return axiosClient.post(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },

  update(data: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.patch(url, data);
  },
};

export default studentApi;
