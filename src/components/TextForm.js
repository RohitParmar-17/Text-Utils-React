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
        document.getSelection().removeAllRanges();
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
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#13466e' , color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
  )
}
