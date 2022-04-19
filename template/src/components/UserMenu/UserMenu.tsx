import React from "react";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
/* STYLES */
import "./index.css";

export function UserMenu(
  {
    username,
    role,
    idNumber,
  }: {
    username: string;
    role: string;
    idNumber: string | number;
  },
  NavigateTo: Function
) {
  let userMenu = {
    label: (
      <>
        {username || "-"}
        <CaretDownOutlined />
      </>
    ),
    key: "userMenu",
    path: null,
    icon: <UserOutlined className={"tableIcons"} />,
    style: { marginLeft: "auto" },
    children: [
      {
        key: "userMenu.1",
        label: role || "-",
        path: ``,
      },
      {
        key: "userMenu.2",
        label: idNumber || "-",
        path: ``,
      },
    ],
  };

  return [userMenu];
}
