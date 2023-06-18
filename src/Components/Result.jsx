import { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Result(){
    const {quizzes, correct, setExit, setStart, setCorrect} = useContext(QuizContext);
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-[50%] border p-2 rounded-md overflow-hidden shadow">
                <p className="text-center">{correct} are correct out of {quizzes.length}</p>
            </div>
            <button onClick={() => {setExit(false); setStart(true),setCorrect(0)}} className="cursor-pointer py-2 px-5 bg-red-600 rounded mt-3">Ply Again</button>
            
        </div>
    )
}