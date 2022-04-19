import React from "react";
import { Divider, Layout } from "antd";
/* STYLES */
import "./index.css";

export function Footer({ NavigateTo }: any) {
  return (
    <Layout.Footer className="footer-main">
      {process.env.REACT_APP_NAME} {process.env.REACT_APP_DESCRIPTION}
      <Divider />
      <span>
        <span>envFile:{process.env.REACT_APP_ENV_FILE} </span>
        <span>v_fe{process.env.REACT_APP_VERSION} </span>
        <span id="VERSIONING_BE"> v_be</span>
      </span>
    </Layout.Footer>
  );
}
