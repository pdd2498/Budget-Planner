import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [re , setRe] = useState(2000);
  const [sp , setSp] = useState(0)
  const [tool , setTool] = useState([]);


  const additms =()=>{
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;
    
    let sum = parseFloat(sp) + parseFloat(cost);
    console.log(sum);

  setRe(re-cost);
  setSp(sum);

    const to = [...tool , {
      name : name,
      cost : cost,
    }];

    setTool(to);
    console.log(tool);

  }

  const remove = (i)=>{
    let arr = [...tool];

    let sum = parseFloat(sp) - parseFloat(arr[i].cost);
    let mi = parseFloat(re) + parseFloat(arr[i].cost);

    setSp(sum);
    setRe(mi);

    arr.splice(i , 1);
    setTool(arr);

  }


  return (
    <div>
        <div >
          <h1>My Budget Planner</h1>
          <div className='flex'>
            <div>
              <p>Budget: Rs.2000</p>
            </div>
            <div>
              <p>Remaining:Rs.-{re}</p>
            </div>
            <div>
              <p>Spant so far:{sp}</p>
            </div>
          </div>
        </div>
        <div>
          <h1>Expenses</h1>

          {tool.length === 0 ? (
            
            <h3>Add Data To List . . . . .</h3>
          ):
          tool.map((e , idx)=>{
            return(
              <div className='flex'>
                <p>{idx+1}</p>
                <p>{e.name}</p>
                <p>{e.cost}</p>
                <button onClick={()=>remove(idx)}>X</button>
              </div>
            )
          })}
        </div>
        <div>
          <h1>Add Expenses</h1>
          <div>
              <div>
                <label htmlFor="">Name</label>
                <input id='name' type="text" />
              </div>
              <div>
                <label htmlFor="">Cost</label>
                <input id='cost' type="number" />
              </div>
          </div>
              <button onClick={additms}>Save</button>
        </div>
    </div>
  );
}

export default App;
