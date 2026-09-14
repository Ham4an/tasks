import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changetype(): void {
        setType(
            type === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }
    return (
        <div>
            <Button onClick={changetype}>Change Type</Button>
            <span>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </span>
        </div>
    );
}
