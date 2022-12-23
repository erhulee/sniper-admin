import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  PlusSquareOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Select } from "antd";
import React from "react";
import { Outlet } from "react-router";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import ProjectFormModal from "./project-form-modal";
import useModal from "./useModal";
const { Header, Content, Sider } = Layout;

function PageHeader() {
  const [visible, open, close] = useModal();
  
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
              width: "100px",
            }}
          ></Select>
          <Button
            onClick={()=>open()}
            type="primary"
            icon={<PlusOutlined />}
            className={styles.btn}
          ></Button>
        </div>
      </Header>
    </>
  );
}

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className={styles.page}>
      <Layout style={{ height: "100vh" }}>
        <PageHeader></PageHeader>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                overflow:"scroll"
              }}
            >
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashBoard;
