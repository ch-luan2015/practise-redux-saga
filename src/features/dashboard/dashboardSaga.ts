import studentApi from "api/studentsApi";
import { ListResponse, Student } from "model";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dashboardActions } from "./dashboardSlice";




function* fetchStatistics(){

}
function* fetchHighestStudentList(){
  const {data}:ListResponse<Student> = yield call(studentApi.getAll,{
    _page:1,
    _limit: 5,
    _sort: "mark",
    _order:  "desc"
  });

  yield put(dashboardActions.setHighestStudentList(data));
}
function* fetchLowestStudentList(){
  const {data}:ListResponse<Student> = yield call(studentApi.getAll,{
    _page:1,
    _limit: 5,
    _sort: "mark",
    _order:  "asc"
  });

  yield put(dashboardActions.setLowestStudentList(data));
}
function* fetchRankingByCityList(){}




function* fetchDashboardData(){
  try {
    yield all([
      //Cho 4 ham fetch chay song song
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList)
    ]);
  } catch (error) {
    console.log("error",error);
    
  }
 
}


export default function* dashboardSaga(){
  yield takeLatest(dashboardActions.fetchData.type,fetchDashboardData);
}
