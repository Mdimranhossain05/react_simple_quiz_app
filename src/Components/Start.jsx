import "../index.css"
import { QuizContext } from "../Context/QuizHolder"
import { useContext } from "react"

export default function Start(){
    const {setStart} = useContext(QuizContext);
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <button onClick={ ()=>{setStart(true)} } className="border border-orange-500 rounded px-4 py-2 text-2xl hover:bg-orange-500">Start</button>
        </div>
    )
}