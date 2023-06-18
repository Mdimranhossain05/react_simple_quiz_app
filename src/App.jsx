/* eslint-disable no-unused-vars */
import "./App.css";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { useContext } from "react";
import { QuizContext } from "./Context/QuizHolder";

function App() {
  const { exit, start } = useContext(QuizContext);
  return (
    <>
      {exit == false ? (
        <>{start ? <Quiz></Quiz> : <Start></Start>}</>
      ) : (
        <Result></Result>
      )}
    </>
  );
}

export default App;
