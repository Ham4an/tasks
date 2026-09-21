import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ChangeColor({
    setColorIndex,
    COLORS,
    colorIndex,
}: {
    setColorIndex: (value: number) => void;
    COLORS: string[];
    colorIndex: number;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    colorIndex,
    COLORS,
}: {
    colorIndex: number;
    COLORS: string[];
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    const [COLORS] = useState<string[]>(["red", "blue", "green"]);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                    COLORS={COLORS}
                ></ChangeColor>
                <ColorPreview
                    COLORS={COLORS}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
