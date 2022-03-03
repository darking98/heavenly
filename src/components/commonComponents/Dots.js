import React from "react";
import { BiRadioCircle } from "react-icons/bi";
import {BsCircleFill} from 'react-icons/bs'
const Dots = ({ current, gotoSection,color }) => {

  return (
    <div className={color ? "dots-container green-dots" :  "dots-container"}>
      {current === 1 ?<BsCircleFill/> :  <BiRadioCircle  onClick={() => gotoSection(1, 1)}/>}
      {current === 2 ?<BsCircleFill /> :  <BiRadioCircle  onClick={() => gotoSection(2, 1)}/>}
      {current === 3 ?<BsCircleFill /> :  <BiRadioCircle  onClick={() => gotoSection(3, 1)}/>}
      {current === 4 ?<BsCircleFill /> :  <BiRadioCircle  onClick={() => gotoSection(4, 1)}/>}
    </div>
  );
};

export default Dots;
