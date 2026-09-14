import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type myholiday =
        | "Thanksgiving"
        | "Labor"
        | "independence"
        | "Boxing"
        | "Kenzi";
    const [holiday, setHoliday] = useState<myholiday>("Labor");
    const Alphabet_order: Record<myholiday, myholiday> = {
        Boxing: "independence",
        independence: "Kenzi",
        Kenzi: "Labor",
        Labor: "Thanksgiving",
        Thanksgiving: "Boxing",
    };
    const year_order: Record<myholiday, myholiday> = {
        Labor: "Thanksgiving",
        Thanksgiving: "Boxing",
        Boxing: "Kenzi",
        Kenzi: "independence",
        independence: "Labor",
    };
    const emojies: Record<myholiday, string> = {
        Labor: "🎆",
        Thanksgiving: "🎄",
        Boxing: "🎁",
        Kenzi: "❄️",
        independence: "🏖️",
    };

    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        setHoliday(Alphabet_order[holiday]);
                    }}
                >
                    {" "}
                    Advance by Alphabet
                </Button>
            </div>

            <div>
                <Button
                    onClick={() => {
                        setHoliday(year_order[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>

            <div>
                <span>Holiday: {emojies[holiday]}</span>
            </div>
        </div>
    );
}
