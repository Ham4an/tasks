import React from "react";
import "./App.css";
<<<<<<< HEAD
import hamdanpic from "./hamdan.png";
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript and
                            hamdan, Hello World
                        </header>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <h1>
                            <span style={{ backgroundColor: "red" }}>
                                This is me hamdan, I am a sophomore and CS major
                                and I like chicken fila
                            </span>
                        </h1>

                        <ul>
                            <li>WE ALL</li>
                            <li>LOVE</li>
                            <li>PERKINS STUDENT CENTER</li>
                        </ul>
                    </Col>
                    <Col>
                        <img
                            src={hamdanpic}
                            alt="hamdan image over here"
                            width="400"
                            height="300"
                        />
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
=======
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
