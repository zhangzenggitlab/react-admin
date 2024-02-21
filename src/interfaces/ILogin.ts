interface ILogin {
    account: number;            // 账号
    password: string;           // 密码
    phone: number               // 手机号
    code: number                // 验证码
    mail: string                // 邮箱
}

export default ILogin;