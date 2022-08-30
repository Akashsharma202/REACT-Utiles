import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        const up = text.toUpperCase();
        setText(up);
        props.showAlert("Your text is now in uppercase", "success");
    };
    const handleLowClick = () => {
        const up = text.toLowerCase();
        setText(up);
        props.showAlert("Your text is now in lowercase", "success");
    };
    const handleClearClick = () => {
        const up = "";
        setText(up);
        props.showAlert("Your text is now blank", "success");
    };
    const handleAlterClick = () => {
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        props.showAlert("Your text is now in Altercase", "success");

        setText(chars.join(""));
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container">
                <div className={`container text-${props.mode == `dark` ? `light` : `dark`}`}>
                    <h1>{props.heading}</h1>
                </div>
    
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{ backgroungColor: props.mode == `light` ? `grey` : `light` }}></textarea>
                <button className="btn btn-primary " onClick={handleUpClick} style={{backgroungColor:props.mode, boderColor:`#e7e7e7`}}>Convert to upper case</button>
                <button className="btn mx-2 my-1 btn-primary" onClick={handleLowClick} style={{backgroungColor:props.mode}}>Convert to lower case</button>
                <button className="btn mx-2 my-1 btn-primary" onClick={handleAlterClick} style={{backgroungColor:props.mode}}>Alternative Case</button>
                <button className="btn mx-2 my-1 btn-primary" onClick={handleClearClick} style={{backgroungColor:props.mode}}>Clear Text</button>

            </div>
            <div className={`container my-4 text-${props.mode == `dark` ? `light` : `dark`}`}>
                <h3>Your text Summary</h3>
                <p>Your paragraph contains {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>Can be read in {0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes</p>
                <h3>
                    <p>{text.length > 0 ? text : `Enter The Text To Preview`}</p>
                </h3>
            </div>
        </>

    );
}
