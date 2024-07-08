import { useState } from "react";

export default function Quiz(){
    const [ activeQuestionIndex, seActiveQuestionIndex ] = useState(0);
    const [ userAnswer, setUserAnswer ] = useState([]);


    return(
        <p>Currenty active question</p>
    )
}