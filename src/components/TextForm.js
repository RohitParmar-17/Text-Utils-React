import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=() => {
        let newText = text.toUpperCase();
        // console.log("Upper case was clicked")
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick=() => {
        let newText = text.toLowerCase();
        // console.log("Lower case was clicked")
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }

    const handleClear=() => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }

    const handleExtraSpace=() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }

    const handleCopy=() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleOnChange=(event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const [text,setText] = useState("")
    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey' , color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008*text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
  )
}
