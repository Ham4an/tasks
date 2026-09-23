import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "black",
        "orange",
        "white",
        "grey",
        "green",
        "blue",
        "cyan",
    ];

    const [choosencolor, setchoosencolor] = useState<string>("red");

    function updatecolor(event: React.ChangeEvent<HTMLInputElement>) {
        setchoosencolor(event.target.value);
    }

    return (
        <div>
            {colors.map((color: string) => {
                return (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color"
                        value={color}
                        onChange={updatecolor}
                        id="color"
                    />
                );
            })}

            <div
                data-testid="colored-box"
                style={{ backgroundColor: choosencolor }}
            >
                {choosencolor}
            </div>
        </div>
    );
}
