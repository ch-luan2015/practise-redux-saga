export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

//! Thong nhat voi nhau la tat ca cac request tra ve mot cai list thi no deu co format la mot obj ListResponse
//! co hai cai key 1 la data ,va 2 la pagination
export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page: number;
  _limit: number;
  _sort: string;
  _order: "asc" | "desc";

  //! Khai bao cac kieu du lieu khac
  [key: string]: any;
}
