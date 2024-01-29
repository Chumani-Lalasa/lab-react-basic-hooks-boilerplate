import { useEffect, useState } from 'react'
import './App.css'
import { createContext} from 'react'
import UseContext from './Component/UseContext'

// let obj = {
//   age:19,
//   sib:1
// }
// function App() {
//   // const [age,setAge] = useState(19)
//   // const [sib,setSib] = useState(1)
//   // const handleAge = () => {
//   //   setAge(age+1)
//   // }
//   // const handleSib = () => {
//   //   setSib(sib+1)
//   // }
//   // const [state,setState] = useState(obj);

//   // const handleState = (val) => {    
//   //   setState({
//   //     ...state,[val]:state[val]+1
//   //   })
//   // }
//   const {age,sib} = state

//   useEffect(() => {
//     alert(`Something Changes ${age}`)
//   },[age])

//   return (
//     <>
//       <h2>My Current Age is {age}</h2>
//       <h3>My siblings {sib}</h3>
//       {/* <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button> */}

//       {/* <button onClick={() => setAge(age+1)}>Get Older</button>
//       <button onClick={() => setSib(sib+1)}>Get more Sib</button> */}

//       <button onClick={() => {handleState("age")}}>Get Older</button>
//       <button onClick={() => {handleState("sib")}}>Get more Sib</button>
//     </>
//   )
// }

// export default App
export const ToggleTheme = createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;