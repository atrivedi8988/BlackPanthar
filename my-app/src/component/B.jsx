import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function B() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    dispatch({ type: "GET_TEXT_SUCCESS", payload: text });
  }, [text]);
  return (
    <div style={{marginTop:"200px"}}>
      <input type="text" onChange={handleChange} style={{width:"30%",textAlign:"center",height:"30px",fontSize:"25px",borderRadius:"20px"}}/>
    </div>
  );
}

export default B;
