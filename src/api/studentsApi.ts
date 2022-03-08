import axiosClient from "./axiosClient";

const studentsApi = {
  getAllStudents() {
    var url = "/students";

    console.log(url);
    return axiosClient.get(url);
  },
};

export default studentsApi;
