import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();
  const [result, setResult] = useState([]);


  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=SjpFdrFgIj49Okg-uhbncWeYiT-R7O9C4RvM15jTIoc&query=${value}&orientation=squarish`)
    .then(res => res.json())
    .then(data=>{
      setResult(data.results)
      // console.log(data)
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input
        style={{width:"60%"}}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
   <div className="gallery">
     {
       result.map((item)=>{
         return<img className="item" key={item.id} src={item.urls.regular}/>
       })
     }
   </div>
    </div>
  );
}

export default App;


// SjpFdrFgIj49Okg-uhbncWeYiT-R7O9C4RvM15jTIoc