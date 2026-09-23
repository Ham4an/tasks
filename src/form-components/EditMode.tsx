import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [userName, setuserName] = useState<string>("Your Name");
    const [alternate, setalternate] = useState<boolean>(false);
    const [userIs, setUseris] = useState<boolean>(true);
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setuserName(event.target.value);
    }

    function updateUserIs(event: React.ChangeEvent<HTMLInputElement>) {
        setUseris(event.target.checked);
    }

    function updatealternate(event: React.ChangeEvent<HTMLInputElement>) {
        setalternate(event.target.checked);
    }

    function checker() {
        return userIs ? " is a student" : " is not a student";
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="mode"
                label="edit mode"
                checked={alternate}
                onChange={updatealternate}
            />
            {alternate ?
                <div>
                    {" "}
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        value={userName}
                        onChange={updateUsername}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student"
                        label="isStudent"
                        checked={userIs}
                        onChange={updateUserIs}
                    />
                </div>
            :   <div>
                    {userName}
                    {checker()}
                </div>
            }
        </div>
    );
}
