import React, { useState } from "react";
import { Menu, Layout } from "antd";
/* STATIC */
import Logo from "../../assets/img/logo.svg";
/* STYLES */
import "./index.css";

export function SideBar({ items, NavigateTo }: any) {
  const [collapsed, setCollapsed] = useState(false);

  /* if sideBar is Collapsed show compressed or not compressed logo */
  let logo = true ? Logo : Logo;
  let logoUrl = process.env.REACT_APP_img_urlPrefix + logo;

  const onClick = (e: any) => {
    console.log(e);
    NavigateTo(e, { replace: true });
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div
        style={{
          background: `url(${logoUrl}) center / contain no-repeat `,
        }}
        className="logo"
      />
      <Menu
        items={items}
        mode="inline"
        defaultOpenKeys={["subnav1"]}
        /* selectedKeys={[Router.location.state?.activeTabKey]} */
        theme="dark"
        onClick={onClick}
      />
    </Layout.Sider>
  );
}
