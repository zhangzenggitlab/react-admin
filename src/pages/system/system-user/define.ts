export enum StatusEnum {
  '启用' = '1',
  '禁用' = '2'
}

export const departmentList = [{
  value: '1',
  title: '开发部',
  children: [{
    value: '2',
    title: '前端部',
  }, {
    value: '3',
    title: '后端部',
  }],
}, {
  value: '4',
  title: '后勤部',
  children: [{
    value: 5,
    title: '厨师一部',
  }],
}]