import React from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  // console.log("App Render");
  return (
    <div className="w-screen overflow-hidden h-full">
      <RecoilRoot>
        <Navbar />
        <Todo />
      </RecoilRoot>
    </div>
  );
}

export default App;
