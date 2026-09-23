import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [current, setcurrent] = useState<string>(options[0]);

    function updatecurrent(event: React.ChangeEvent<HTMLSelectElement>) {
        setcurrent(event.target.value);
    }
    return (
        <div>
            <Form.Label>Select an answer</Form.Label>
            <Form.Select value={current} onChange={updatecurrent}>
                {options.map((option: string) => {
                    return (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    );
                })}
            </Form.Select>

            <div>({current === expectedAnswer ? "✔️" : "❌"})</div>
        </div>
    );
}
