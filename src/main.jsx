import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Student from "./Lesson2/student";
import FunctionCall from "./Lesson3/functionCall";
import Crud from "./Lesson4/crud";
import LearnComponent from "./Lesson5/learnComponents";
import YouTube from "./Lesson6_You_tube_clone";
import Lifecycyle from "./Lesson7/lifecycyle";
import Hook from "./Lesson8/Hook";
import Content from "./Lesson9/Content";
import Hooks from "./Lesson10/hooks";
import Fetch from "./Lesson11/Fetch";
import Routers from "./Lesson12/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Fruit /> */}
    {/* <Student/>   */}
    {/* <FunctionCall/> */}
    {/* <Crud/> */}
    {/* <LearnComponent/> */}
    {/* <LearnComponent/> */}
    {/* <YouTube links={["Header","About","Portfolio","Settings"]}/> */}

    {/* <Lifecycyle></Lifecycyle> */}
    {/* <Hook/> */}
    {/* <Hooks/> */}
    {/* <Content /> */}

    <Routers />
    {/* <Fetch/> */}
  </React.StrictMode>
);
