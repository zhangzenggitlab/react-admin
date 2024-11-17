import { css } from '@emotion/css'
import { clsx } from 'clsx'
import { Avatar, Badge, Dropdown, MenuProps, Modal } from 'antd'
import { BellOutlined, LeftOutlined } from '@ant-design/icons'

interface HeaderProps {
  collapsed?: boolean
  setCollapsed?: (bol: boolean) => void
}

export const Header = (props: HeaderProps) => {
  const { collapsed, setCollapsed } = props
  const navigate = $.utils.router.useNavigate()

  const items: MenuProps['items'] = [
    {
      label: '修改密码',
      key: '1',
    },
    {
      label: <a onClick={() => {
        Modal.confirm({
          title: '提示!',
          content: '确认退出?',
          okText: '确认',
          cancelText: '取消',
          onOk: async () => {
            navigate('/login')
          },
        })
      }}>退出登录</a>,
      key: '2',

    },
  ]

  return (
    <header className={clsx(header, 'flex between center-y')}>
      <span className="flex center-y gap-10">
        {/*<img src={Logo} alt="logo" className="logo" />*/}
        <h1 className="title fs-18 fw-6">{_TITLE_} </h1>

        <span
          className={clsx(collapsed ? '' : 'collapsed-menu-icon', 'cup collapsed')}
          onClick={() => {
            setCollapsed?.(!collapsed)
          }}
        >
          <LeftOutlined />
        </span>
      </span>

      <span className="flex gap-20 center-y around">
         <Badge count={0}>
             <BellOutlined />
         </Badge>
        <Dropdown menu={{ items }}>
          <Avatar
            src=""
            shape="circle"
            className="avatar"
            size="small"
          />
        </Dropdown>
      </span>
    </header>
  )
}

const header = css`
    display: flex;
    height: 56px;
    line-height: 56px;
    z-index: 19;
    width: 100%;
    padding-block: 0;
    padding-inline: 0;
    border-block-end: 1px solid rgba(5, 5, 5, 0.06);
    background-color: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    padding: 0 20px;
    position: sticky;
    top: 0;

    .logo {
        height: 28px;
    }

    .title {
        color: rgba(0, 0, 0, 0.88);
    }

    .avatar {
        flex-shrink: 0;
    }

    .collapsed {
        inset-block-start: 18px;
        z-index: 101;
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 40px;
        inset-inline-end: -13px;
        transition: transform 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(25, 15, 15, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
    }

    .collapsed-menu-icon {
        transition: 0.2s;
        transform: rotate(180deg);
    }
`
