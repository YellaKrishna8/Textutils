import React,{useState} from 'react'

export default function TextForm(props) {
  const [Text,setText] = useState()
  const extraSpaces = () =>
  {
    var newtext = Text.split(/[ ] +/);
    setText(newtext.join(" "));
  }
   const copy = () =>
   {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied","success");
   }
   
   const handleChange =(e)=>
   {
    console.log("on change");
    setText(e.target.value)
   }
  const uppercase = () =>
  {
     let newtext = Text.toUpperCase();
     setText(newtext);
     props.showAlert("Converted to Upper case","success");
  }
  const lowercase = () =>
  {
    let newtext = Text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case","success");
  }
  return (
    <>
    <div className={`container my-3 text-${props.mode ==='light'?'dark':'light'}`}>
     <h2>Enter text to analyze</h2>
    <div className="mb-3">
 
  <textarea className="form-control" value={Text}  id="exampleFormControlTextarea1" onChange={handleChange} rows="8">{props.heading}</textarea>
</div>
<button className='btn btn-primary mx-3' onClick={uppercase} >Upper Case</button>
<button className='btn btn-primary mx-3' onClick={lowercase} >Lower Case</button>
<button className='btn btn-primary mx-3' onClick={copy} >Copy Text</button>
<button className='btn btn-primary mx-2' onClick={extraSpaces} >Remove Extra Spaces</button>
    </div>
</>
  )
}
