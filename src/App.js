import { useState, useEffect, useRef } from "react";
import Example from "./example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import lottie from "lottie-web";
import React from "react";
import 'antd/dist/antd.min.css';
function App() {
	const[loader,setLoader] = useState(true);

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop:true,
      autoplay: true,
      animationData: require("./loading.json"),
    });
  }, []);

  useEffect(()=>{
  setTimeout(()=>{setLoader(false)},3500)
  },[])
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {loader?<div className="container" ref={container}></div>:<Example />}
        
      </DndProvider>
    </div>
  );
}

export default App;
