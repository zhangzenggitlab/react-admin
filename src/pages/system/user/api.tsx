export const getUser = async (param: any) => {
  console.log(param);
  return {
    code: 200,
    data: {
      list: [
        {
          id: 1,
          username: "admin",
          account: "1001",
          mail: "101@qq.com",
          phone: "1808***0959",
          name: "用户1",
          roles: [1],
          status: 1,
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 3,
        },
        {
          id: 2,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户2",
          roles: ["2"],
          status: 2,
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 4,
        },
        {
          id: 3,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户3",
          roles: ["2"],
          status: 3,
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 6,
        },
        {
          id: 4,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户4",
          roles: ["2"],
          status: 3,
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 7,
        },
        {
          id: 5,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户5",
          roles: ["2"],
          status: "1",
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 7,
        },
        {
          id: 6,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户6",
          roles: ["2"],
          status: "1",
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 7,
        },
        {
          id: 7,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户7",
          roles: ["2"],
          status: "1",
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 4,
        },
        {
          id: 8,
          username: "reader",
          account: "1002",
          mail: "102@qq.com",
          phone: "1808***0959",
          name: "用户8",
          roles: ["2"],
          status: "1",
          createTime: 1534837621348,
          lastLoginTime: 1534837621348,
          lastLoginIp: "127.0.0.1",
          departmentId: 2,
        }
      ],
      total: 10,
    },
  };
};

export const editUser = async (user: any) => {
  return user;
};

export const addUser = async (user: any) => {
  return user;
};

export const delUser = async (user: any) => {
  return user;
};
