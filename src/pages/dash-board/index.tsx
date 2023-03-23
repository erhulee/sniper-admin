import {
  UserOutlined,
  RadarChartOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
  AlertOutlined,
  RocketOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme, Select, Avatar, Button } from 'antd'
import React from 'react'
import { Navigate, Outlet } from 'react-router'
import styles from './index.module.scss'
import logo from '../../assets/logo.png'
import ProjectFormModal from './project-form-modal'
import useModal from './useModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useBreadcrumb from '../../hooks/useBreadcrumb'
import logOutImg from '../../assets/logout.png'
import { useSnapshot } from 'valtio'
import { userStore } from '../../store'
import { addProject, queryProject } from '../../api/project'
import CopyContent from '../../components/copy-content'
import { useMutation, useQuery } from 'react-query'
import { globalFilterStore } from '../../store/globalFilter'
import { Project } from '../types'
const { Header, Content, Sider } = Layout

function PageHeader() {
  useSnapshot(globalFilterStore)
  const [visible, open, close] = useModal()
  const navigate = useNavigate()
  const handleLogOut = () => {
    userStore.userid = 'null'
    navigate('/')
  }

  const { data, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: 'project',
    queryFn: queryProject
  })

  const mutation = useMutation((newProject: any) => {
    return addProject(newProject)
  })

  const handleSelectChange = (projectId: string) => {
    const projectList = (data as any)?.r.data as Array<Project>
    const selectProject = projectList.find(
      (project) => project._id === projectId
    )
    selectProject && (globalFilterStore.selectedProject = selectProject)
  }

  let options: Array<{
    label: string
    value: string | number
  }> = []
  if (isSuccess) {
    const projectList = (data as any)?.r.data as Array<Project>
    options = projectList.map((project) => ({
      label: project.projectName,
      value: project._id
    }))

    if (globalFilterStore.selectedProject == null) {
      globalFilterStore.selectedProject = projectList[0]
    }
  }

  return (
    <>
      <ProjectFormModal
        visible={visible}
        open={open}
        close={close}
        updateProjectList={(newProject: any) => {
          mutation.mutate(newProject)
          refetch()
        }}
      ></ProjectFormModal>
      <Header className={styles.header}>
        <div className={styles.left}>
          <img src={logo} className={styles.logo}></img>
          <span className={styles.name}>哨兵监控看板</span>
        </div>
        <div className={styles.right}>
          <CopyContent
            content={globalFilterStore.selectedProject?._id}
          ></CopyContent>
          <Select
            options={options}
            style={{
              width: '100px'
            }}
            loading={isFetching}
            value={globalFilterStore.selectedProject?.projectName}
            onChange={handleSelectChange}
          ></Select>
          <Button
            onClick={() => open()}
            type="primary"
            icon={<PlusOutlined />}
            className={styles.btn}
          ></Button>

          <Avatar
            onClick={() => handleLogOut()}
            className="ml-2 bg-red-600 hover:bg-red-500 cursor-pointer "
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
    label: '错误收集',
    children: [
      {
        key: 'sourcemap',
        icon: React.createElement(ExclamationCircleOutlined),
        label: 'sourcemap管理'
      }
    ]
  },
  {
    key: 'behavior',
    icon: React.createElement(UserOutlined),
    label: '用户行为'
  },
  {
    key: 'alarm',
    label: '告警设置',
    icon: React.createElement(AlertOutlined)
  },
  {
    key: 'trace',
    icon: React.createElement(RocketOutlined),
    label: '埋点管理'
  }
]

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const breadcrumb = useBreadcrumb()
  const userInfo = useSnapshot(userStore)
  if (userInfo.userid == 'null') {
    return <Navigate to="/"></Navigate>
  }
  if (breadcrumb.length == 1) {
    return <Navigate to={'/dashboard/error'}></Navigate>
  }
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
              onClick={({ key, keyPath }) => {
                navigate(keyPath.reverse().join('/'))
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
