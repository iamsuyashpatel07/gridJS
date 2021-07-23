import React,{useState} from 'react';
function App() {
const [fillcolor,setFillcolor]=useState("");
var items=[];
for(let i=1;i<=100;i++){
items.push(<div onClick={() =>changeColor(i)} className="border border-gray-600 text-center">
{i}
</div>)
}
// const changeditems=[];
function changeColor(index){
alert(index);
setFillcolor("yellow");
for(var i=0;i<items.length;i++){
if((i+1)%index===0){
console.warn("change",(i+1));
items[i]=<div style={{backgroundColor: fillcolor}} className="border border-gray-600 text-center">
{(i+1)}
</div>
}
}
console.log(items[0]);
}

// console.log(changeditems);

  return (
    <div className="App">
     <div className="container">
     <div className="grid grid-cols-10 grid-rows-10">
       {items}
      </div>
      </div>
    </div>
  );
}
export default App;
