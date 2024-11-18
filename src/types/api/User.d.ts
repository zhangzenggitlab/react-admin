declare namespace UserApi {

  interface UserListParams {
    page: number
    pageSize: number
  }

  type UserListRes = PageListType<UserEntity.User>
}