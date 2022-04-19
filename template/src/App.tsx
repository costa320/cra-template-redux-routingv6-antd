import React, { useState } from "react";
/* REDUX */
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "./redux/reducers/Session.reducer";
/* ROUTING */
import { RouteObject, useNavigate } from "react-router-dom";
import { useRoutes } from "react-router-dom";
/* VIEWS */
import { Home } from "./views/Home.view";
import { Course } from "./views/Course.view";
import { CoursesIndex } from "./views/CoursesIndex.view";
import { Contacts } from "./views/Contacts.view";
import { About } from "./views/About.view";
/* COMPONENTS */
import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Footer } from "./components/Footer/Footer";
import { UserMenu } from "./components/UserMenu/UserMenu";
/* LIBRARYS */
import { Layout } from "antd";
/* STATIC ASSETS */
/* STYLES */
import "./assets/styles/App.css";
import { NoMatch } from "./views/NoMatch.view";
import {
  BorderOuterOutlined,
  CodeSandboxOutlined,
  HeartOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

export default function App() {
  const { username, role, idNumber }: any = useSelector(
    (state: any) => state.Session.user
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const NavigateTo = (e: any): void => {
    let destination = e.item.props.path;
    if (destination) {
      let customObj: any = {
        key: e.key,
        keyPath: e.keyPath,
        path: e.item.props.path,
      };
      dispatch(addToHistory(customObj));
      navigate(destination, { replace: true });
    }
  };

  const [headerBarItems, setHeaderBarItems] = useState([
    { label: "Home", key: "home", path: "/", icon: <HomeOutlined /> },
    {
      label: "Courses Index",
      key: "courses-index",
      path: "/courses",
      icon: <HomeOutlined />,
    },
    ...UserMenu({ username, role, idNumber }, NavigateTo),
  ]);

  const [sideBarItems, setSideBarItems] = useState([
    {
      label: "Courses",
      key: "course",
      icon: <BorderOuterOutlined className={"tableIcons"} />,
      children: [
        {
          label: "Course 1",
          key: "course.1",
          path: "/courses/1",
          icon: <CodeSandboxOutlined className={"tableIcons"} />,
        },
        {
          label: "Course 2",
          key: "course.2",
          path: "/courses/2",
          icon: <CodeSandboxOutlined className={"tableIcons"} />,
        },
        {
          label: "Course 3",
          key: "course.3",
          path: "/courses/3",
          icon: <CodeSandboxOutlined className={"tableIcons"} />,
        },
      ],
    },
    {
      label: "About",
      key: "about",
      path: "/about",
      icon: <QuestionCircleOutlined className={"tableIcons"} />,
    },
    {
      label: "Contacts",
      key: "contacts",
      path: "/contacts",
      icon: <HeartOutlined className={"tableIcons"} />,
    },
  ]);

  /* index property indicates what component should be picked if the father did not receive any suppaths, eg <<<" /courses/ ">>> */
  let routes: RouteObject[] = [
    {
      path: "/",
      children: [
        { index: true, element: <Home /> },
        {
          path: "/courses",
          children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/courses/:id", element: <Course /> },
          ],
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  /* element that will render your entire route hierarchy */
  let element = useRoutes(routes);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar items={sideBarItems} NavigateTo={NavigateTo} />
      <Layout className="site-layout">
        <Header items={headerBarItems} NavigateTo={NavigateTo} />
        <Layout.Content style={{ margin: "0 16px" }}>{element}</Layout.Content>
        <Footer NavigateTo={NavigateTo} />
      </Layout>
    </Layout>
  );
}
