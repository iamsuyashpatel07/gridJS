import React,{useState} from 'react'
function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const items = [];
  for (let i = 1; i <= 100; i++) {
    let style = {};
     if(selectedIndex !== null && i % selectedIndex === 0){
        style = {
            backgroundColor: "yellow"
        };
    }
   setInterval(items.push(<div onClick={() => changeColor(i)} className="border border-gray-600 text-center" style={style}>
      {i}
    </div>),200)
  }
  function changeColor(index) {
    // only need to set the state here
    setSelectedIndex(index);
  }
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