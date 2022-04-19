import React from "react";
import { Layout, Menu } from "antd";
/* STYLES */
import "./index.css";

export function Header({ items, NavigateTo }: any) {
  const onClick = (e: any) => {
    console.log(e);
    NavigateTo(e, { replace: true });
  };

  return (
    <Layout.Header className="header">
      <Menu
        items={items}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["Home-KEY"]}
        /* selectedKeys={[Router.location.state?.activeTabKey]} */
        onClick={onClick}
      />
    </Layout.Header>
  );
}
