import { LoadingOutlined } from "@ant-design/icons";
import { Space, Spin } from "antd";
import React from "react";
const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

const Loading: React.FC = () => {
  return (
    <Space
      style={{
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Spin style={{ margin: "auto" }} indicator={antIcon} />;
    </Space>
  );
};

export default Loading;
