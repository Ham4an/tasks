import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [attempsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptRequest, setAttemptRequest] = useState<string>("");

    function updaterequest(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptRequest(event.target.value);
    }

    return (
        <div>
            <Form.Label>Request</Form.Label>
            <Form.Control
                type="number"
                value={attemptRequest}
                onChange={updaterequest}
            />
            <Button
                onClick={() => {
                    setAttemptsLeft(attempsLeft - 1);
                }}
                disabled={attempsLeft == 0}
            >
                use
            </Button>
            ;
            <Button
                onClick={() => {
                    setAttemptsLeft(
                        attempsLeft + (parseInt(attemptRequest) || 0),
                    );
                }}
            >
                gain
            </Button>
            <div>number of attempts left{attempsLeft}</div>
        </div>
    );
}
