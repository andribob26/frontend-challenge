import { ArrowLeftOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header } = Layout;

const LayoutComponent: React.FC<{ children?: React.ReactNode }> = (props) => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#4096ff",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {pathName && (
          <Link to={`/`}>
            <ArrowLeftOutlined
              width={20}
              style={{ color: "#ffff", fontSize: "24px", cursor: "pointer" }}
            />
          </Link>
        )}
        <Typography.Title style={{ color: "#ffff" }} level={3}>
          Frontend Challenge
        </Typography.Title>
      </Header>
      <Outlet />
    </Layout>
  );
};

export default LayoutComponent;
