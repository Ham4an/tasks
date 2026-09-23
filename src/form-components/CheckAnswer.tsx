import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setanswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setanswer(event.target.value);
    }

    return (
        <div>
            <Form.Label>Answer: </Form.Label>
            <Form.Control value={answer} onChange={updateAnswer} />
            The answer is{" "}
            {(
                answer.trim().toUpperCase() ===
                expectedAnswer.trim().toUpperCase()
            ) ?
                "✔️"
            :   "❌"}
        </div>
    );
}
