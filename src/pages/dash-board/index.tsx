import {
  UserOutlined,
  RadarChartOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  AlertOutlined
} from '@ant-design/icons'
import { Avatar, Button, Popover } from 'antd'
import { Breadcrumb, Layout, Menu, theme, Select } from 'antd'
import React from 'react'
import { Outlet } from 'react-router'
import styles from './index.module.scss'
import logo from '../../assets/logo.png'
import ProjectFormModal from './project-form-modal'
import useModal from './useModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBreadcrumb from '../../hooks/useBreadcrumb'
import logOutImg from '../../assets/logout.png'
const { Header, Content, Sider } = Layout

function PageHeader() {
  const [visible, open, close] = useModal()
  const popContent = (
    <Menu>
      <Menu.Item>退出登陆</Menu.Item>
    </Menu>
  )
  return (
    <>
      <ProjectFormModal
        visible={visible}
        open={open}
        close={close}
      ></ProjectFormModal>
      <Header className={styles.header}>
        <div className={styles.left}>
          <img src={logo} className={styles.logo}></img>
          <span className={styles.name}>哨兵监控看板</span>
        </div>
        <div className={styles.right}>
          <Select
            style={{
              width: '100px'
            }}
          ></Select>
          <Button
            onClick={() => open()}
            type="primary"
            icon={<PlusOutlined />}
            className={styles.btn}
          ></Button>

          <Avatar
            className="ml-2 bg-red-600 hover:bg-red-500"
            src={logOutImg}
          ></Avatar>
        </div>
      </Header>
    </>
  )
}

const menuItems = [
  {
    key: 'performance',
    icon: React.createElement(RadarChartOutlined),
    label: '性能分析'
  },
  {
    key: 'error',
    icon: React.createElement(ExclamationCircleOutlined),
    label: '错误收集'
  },
  {
    key: 'behavior',
    icon: React.createElement(UserOutlined),
    label: '埋点数据'
  },
  {
    key: 'alarm',
    label: '告警设置',
    icon: React.createElement(AlertOutlined)
  }
]

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const breadcrumb = useBreadcrumb()
  const multiCardPage = ['运行时错误']
  // const computedBgColor = multiCardPage.includes(breadcrumb[breadcrumb.length - 1]) ?  undefined:colorBgContainer;
  return (
    <div className={styles.page}>
      <Layout style={{ height: '100vh' }}>
        <PageHeader></PageHeader>
        <Layout>
          <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            collapsible
            width={200}
            style={{ background: colorBgContainer }}
          >
            <Menu
              // mode="inline"
              onClick={(e) => {
                const key = e.key
                //TODO 可能有的需要从 kaypath 得到一个path
                const path = key
                navigate(path)
              }}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={menuItems}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumb.map((i) => (
                <Breadcrumb.Item key={i}>{i}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                overflow: 'scroll'
              }}
            >
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default DashBoard
