import { Layout, Menu, theme } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import GlobalFilter from "@/components/global-filter";
import { menuItems } from "./contants";
import useAuth from "@/hooks/useAuth";
import PageHeader from "./components/page-header";
import Loading from "@/components/loading";
const { Content, Sider } = Layout;

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useAuth();
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
                overflow: "scroll",
              }}
            >
              <Suspense fallback={<Loading></Loading>}>
                <Outlet></Outlet>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashBoard;
