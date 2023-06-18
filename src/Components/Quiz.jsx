/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Box current = {current} next = {setCurrent}/>
    </div>
  );
}

const Box = ({current,next}) => {
  const { quizzes, correct, setCorrect, exit, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if(quizzes[current].correct == ans){
        setCorrect(correct+1);
    }
    setAns("");
    if ((current+1) === quizzes.length){
        setExit(true);
    }else{
        next(current+1);
    }
  };

  return (
    <div className="w-[50%] border p-2 rounded-md overflow-hidden">
      <div className="w-full text-2xl p-2">{current+1 } ) {quizzes[current].question}</div>
      <div className="grid grid-cols-2">
        <div onClick={()=>{setAns("a")}} className={`${ans === "a" ? "bg-blue-400 text-white": ""} p-3 border m-1 hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}>
          {quizzes[current].a}
        </div>
        <div onClick={()=>{setAns("b")}} className={`${ans === "b" ? "bg-blue-400 text-white": ""} p-3 border m-1 hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}>
          {quizzes[current].b}
        </div>
        <div onClick={()=>{setAns("c")}} className={`${ans === "c" ? "bg-blue-400 text-white": ""} p-3 border m-1 hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}>
          {quizzes[current].c}
        </div>
        <div onClick={()=>{setAns("d")}} className={`${ans === "d" ? "bg-blue-400 text-white": ""} p-3 border m-1 hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}>
          {quizzes[current].d}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={()=>{setAns("")}} className="cursor-pointer py-2 px-3 bg-orange-500 rounded">Reset</button>
        <button className="cursor-pointer py-2 px-3 bg-green-500 rounded" onClick={saveHandler}>
          Save & Next
        </button>
        <button onClick={() => setExit(true)} className="cursor-pointer py-2 px-5 bg-red-600 rounded">Exit</button>
      </div>
    </div>
  );
};
