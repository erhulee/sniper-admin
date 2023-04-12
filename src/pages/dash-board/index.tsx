import { Layout, Menu, theme } from "antd";
import React from "react";
import { Outlet } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import GlobalFilter from "@/components/global-filter";
import { menuItems } from "./contants";
import PageHeader from "./components/pageHeader";
const { Content, Sider } = Layout;

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  useSnapshot(userStore);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Layout style={{ height: "100vh" }}>
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
                navigate(keyPath.reverse().join("/"));
              }}
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              items={menuItems}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <GlobalFilter></GlobalFilter>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                // background: colorBgContainer,
                overflow: "scroll",
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
