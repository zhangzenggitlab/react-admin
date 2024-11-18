export async function userList(params: UserApi.UserListParams): Promise<UserApi.UserListRes> {
  console.log(params)

  return new Promise((resolve => {
    resolve({
      code: 200,
      msg: '',
      data: {
        total: 2,
        pageSize: 1,
        page: 1,
        data: [{
          id: 1,
          name: '超级管理员',
          account: 'admin',
          phone: '1808*****59',
          status: '1',
          mail: '',
          createTime: '2019-08-02',
          departmentName: '',
        }, {
          id: 2,
          name: '用户管理员',
          account: 'user',
          phone: '1808*****59',
          status: '2',
          mail: '',
          createTime: '2019-08-02',
          departmentName: '',
        }],
      },
    })
  }))
}
