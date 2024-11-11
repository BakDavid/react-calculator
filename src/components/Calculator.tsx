import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState("0");
    const [currentValue, setCurrentValue] = useState("");

    const handleClear = () => {
        setDisplay("0");
        setCurrentValue("");
    };

    const handleNumberClick = (num: string) => {
        if (currentValue === "0" && num === "0") return;
        if (currentValue.includes(".") && num === ".") return;
        setCurrentValue((prev) => (prev === "0" ? num : prev + num));
        setDisplay((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperatorClick = (op: string) => {
        if (currentValue) {
            setCurrentValue("");
        }
        setDisplay((prev) => prev + " " + op + " ");
    };

    const handleEqualClick = () => {
        const result = eval(display.replace("x", "*").replace("/", "/")); // eval is dangerous, but works for this simple use case
        setDisplay(result.toString());
        setCurrentValue(result.toString());
    };

    return (
        <div className="calculator">
            <Display value={display} />
            <div className="buttons">
                <Button
                    id="clear"
                    onClick={handleClear}
                    text="AC"
                    className="clear double"
                />
                <Button
                    id="divide"
                    onClick={() => handleOperatorClick("/")}
                    text="/"
                    className="operator"
                />
                <Button
                    id="multiply"
                    onClick={() => handleOperatorClick("*")}
                    text="x"
                    className="operator"
                />

                <Button
                    id="seven"
                    onClick={() => handleNumberClick("7")}
                    text="7"
                    className="number"
                />
                <Button
                    id="eight"
                    onClick={() => handleNumberClick("8")}
                    text="8"
                    className="number"
                />
                <Button
                    id="nine"
                    onClick={() => handleNumberClick("9")}
                    text="9"
                    className="number"
                />
                <Button
                    id="subtract"
                    onClick={() => handleOperatorClick("-")}
                    text="-"
                    className="operator"
                />

                <Button
                    id="four"
                    onClick={() => handleNumberClick("4")}
                    text="4"
                    className="number"
                />
                <Button
                    id="five"
                    onClick={() => handleNumberClick("5")}
                    text="5"
                    className="number"
                />
                <Button
                    id="six"
                    onClick={() => handleNumberClick("6")}
                    text="6"
                    className="number"
                />
                <Button
                    id="add"
                    onClick={() => handleOperatorClick("+")}
                    text="+"
                    className="operator"
                />

                <Button
                    id="one"
                    onClick={() => handleNumberClick("1")}
                    text="1"
                    className="number"
                />
                <Button
                    id="two"
                    onClick={() => handleNumberClick("2")}
                    text="2"
                    className="number"
                />
                <Button
                    id="three"
                    onClick={() => handleNumberClick("3")}
                    text="3"
                    className="number"
                />

                <Button
                    id="equals"
                    onClick={handleEqualClick}
                    text="="
                    className="equal double-row"
                />

                <Button
                    id="zero"
                    onClick={() => handleNumberClick("0")}
                    text="0"
                    className="number double"
                />
                <Button
                    id="decimal"
                    onClick={() => handleNumberClick(".")}
                    text="."
                    className="decimal"
                />
            </div>
        </div>
    );
};

export default Calculator;
