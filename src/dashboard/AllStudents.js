import React,{useState} from "react";
import { allStudentData } from "../studentData";
import {  
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function AllStudents (){

//States for the conditional render of the bars--------------------------------------------------------
  const [showFunBar, setShowFunBar] = useState(true);
  const [showDifficultyBar, setShowDifficultyBar] = useState(true);

//The Checboxes for choosing which bars are displayed -------------------------------------------------
  const checkboxInputs = (
    <div className="place-chart">
      <div><input className="funBarCheckbox" type="checkbox" checked={showFunBar} onChange={() => setShowFunBar(!showFunBar)} />
      Show Fun Bar</div>
      <div><input className="dBarCheckbox" type="checkbox" checked={showDifficultyBar} onChange={() => setShowDifficultyBar(!showDifficultyBar)} />
      Show Difficulty Bar</div>
    </div>
  );  
//Return Statement -------------------------------------------------------------------------------
  return(
    <div className="charter">
      <div className="charter-1">{checkboxInputs}</div>
      <div className="charter-2">{/* BarChart Code */}
      <BarChart
      width={20000}
      height={300}
      data={allStudentData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="projectName" tick={{fontSize: 10, fill:'gray'}}/>
      {/* <XAxis dataKey="projectName" minTickGap={0.1} tick={{fontSize: 10, fill:'red'}}/> */} 
      {/* Laat meer projectNamen onder de X axis zien maar dichter bij elkaar. */}
      <YAxis type="number" domain={[0, 10]} />
      <Tooltip />
      <Legend />
      {/* Code for the conditional rendering of the 2 bars */}
      {showFunBar && <Bar id='funBar' dataKey="funGrade" fill="yellow" />}
      {showDifficultyBar && <Bar dataKey="difficultyGrade" fill="#0ae427" />}
    </BarChart></div>{/*end of charter2*/}
    </div>/*end of charter*/
  )
}

export default AllStudents;

