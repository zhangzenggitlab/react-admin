import { clsx } from 'clsx'
import { css } from '@emotion/css'
import { Checkbox, Form, Input, Tabs, TabsProps, theme } from 'antd'
import { LockOutlined, MobileOutlined } from '@ant-design/icons'

import { Button } from '@/components'

interface FormItem {
  username: string
  account: string
  checked: boolean
}

const Login = () => {
  const { colorTextDescription } = theme.getDesignToken()
  const navigate = $.utils.router.useNavigate()

  const [form] = Form.useForm<FormItem>()
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '账号密码登录',
    },
  ]

  return (
    <div className={clsx(login, 'relative width height')}>
      <div className={'login-form'}>
        <div className={'mb-30'}>
          <div className={'ta-c fw-5 fs-28'}>管理系统</div>
          <div className={'ta-c  fs-16 mt-5'} style={{ color: colorTextDescription }}>React + Typescript + Vite</div>
        </div>

        <Tabs defaultActiveKey="1" items={items} centered />

        <Form form={form} layout={'vertical'} initialValues={{ checked: true }}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]} style={{ marginBottom: 24 }}>
            <Input placeholder="用户名: admin " prefix={<MobileOutlined />} size={'large'} allowClear
                   autoComplete="false" />
          </Form.Item>
          <Form.Item name="account" rules={[{ required: true, message: '请输入密码' }]} style={{ marginBottom: 24 }}>
            <Input.Password placeholder="密码: admin" prefix={<LockOutlined />} size={'large'} allowClear />
          </Form.Item>
          <Form.Item name="checked" className={'flex between'} style={{ marginBottom: 24, width: '100%' }}>
            <Checkbox>自动登录</Checkbox>
          </Form.Item>

          <Form.Item className={'width'}>
            <Button type={'primary'} className={'width'} size={'large'} onClick={() => {
              form.validateFields().then((res) => {
                navigate('/system/user')
              })
            }}>登录</Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}

export default Login

const login = css`
    .login-form {
        width: 328px;
        position: absolute;
        left: 50%;
        top: 320px;
        transform: translate(-50%, -50%);
    }
`