import React, { useState } from "react"
const Calculator = () => {
    const [count, setCount] = useState();
    // const [rest, setRest] = useState(0);


    return (
        <main className={"d-flex justify-content-center align-items-center"} id={"mainone"}>
            <div id={"maindiv"}>
                <div className={"w-100 d-flex justify-content-between py-0 my-0"} style={{ height: "1%" }}>
                    <p className={"py-0"}>Calculator</p>
                    <div className={"py-0 justify-content-end pe-2"}>
                        <i className={"fa fa-minus"} style={{ color: "white" }}></i>
                        <i className={"fa fa-square-o"} style={{ color: "white" }}></i>
                        <i className={"fa fa-times"} style={{ color: "white" }}></i>

                    </div>
                </div>

                <div id={"displayDiv"}>
                    <div style={{ display: "flex; align-items: center" }} className={"mt-4 w-100"}>
                        <h4 className={"fa fa-bars mx-4"} style={{ color: "white" }}></h4>
                        <h4>Standard</h4>
                    </div>
                    <div className={"w-100 border border-light d-flex"} style={{ height: "20%" }} style={{ flexDirection: "row-reverse" }} id={"display"}>

                    </div>
                    <div className={"w-100 border border-light d-flex"} style={{ height: "40%" }} style={{ flexDirection: "row-reverse" }} id={"display"}>
                        {count} 
                    </div>

                </div>

                <div id={"Mdiv"}>
                    <p id={"MdivP"}>MC</p>
                    <p id={"MdivP"}>MR</p>
                    <p id={"MdivP"}>M+</p>
                    <p id={"MdivP"}>M-</p>
                    <p id={"MdivP"}>MS</p>
                    <p id={"MdivP"}>M</p>
                </div>

                <div id={"mainKeyDiv"}>
                    <div id={"functionDiv"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                        <button id={"key"}>
                            <p>%</p>
                        </button>
                        <button id={"key"}>
                            <p>√</p>
                        </button>
                        <button id={"key"}>
                            <p>x<sup>2</sup> </p>
                        </button>
                        <button id={"fxn"}>
                            <p>1/x</p>
                        </button>
                    </div>

                    <div id={"functionDiv"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                        <button id={"key"}>
                            <p>CE</p>
                        </button>
                        <button id={"key"}>
                            <p>C</p>
                        </button>
                        <button id={"key"}>
                            <p>^</p>
                        </button>
                        <button id={"fxn"}>
                            <p>/</p>
                        </button>
                    </div>

                    <div id="functionDiv" style={{ backgroundColor: "black" }}>
                        <button id={"key"} onClick={() => setCount(9)}>
                            <p>9</p>
                        </button>
                        <button id={"key"} onClick={() => setCount(8)}>
                            <p>8</p>
                        </button>
                        <button id={"key"} onClick={() => setCount(7)}>
                            <p>7</p>
                        </button>
                        <button id={"fxn"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p>x</p>
                        </button>
                    </div>

                    <div id={"functionDiv"} style={{ backgroundColor: "black" }}>
                        <button id={"key"} onClick={() => setCount(6)}>
                            <p>6</p>
                        </button>
                        <button id={"key"} onClick={() => setCount(5)}>
                            <p>5</p>
                        </button>
                        <button id={"key"} onClick={() => setCount(4)}>
                            <p>4</p>
                        </button>
                        <button id={"fxn"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p>-</p>
                        </button>
                    </div>

                    <div id={"functionDiv"} style={{ backgroundColor: "black" }}>
                        <button id={"key"} onClick={() => setCount(3)}>
                            <p>3</p>
                        </button>
                        <button id={"key"} onClick={() => setCount(2)}>
                            <p>2</p>
                        </button>
                        <button id={"key1"} onClick={() => setCount(1)}>
                            <p>1</p>
                        </button>
                        <button id={"fxn"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p>+</p>
                        </button>
                    </div>

                    <div id={"functionDiv"} style={{ backgroundColor: "black" }}>
                        <button id={"key"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p></p>
                        </button>
                        <button id={"key"}>
                            <p>0</p>
                        </button>
                        <button id={"key"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p>.</p>
                        </button>
                        <button id={"key"} style={{ backgroundColor: "rgb(34, 33, 33)" }}>
                            <p style={{ color: "white" }}>=</p>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Calculator