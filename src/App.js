import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";



function Hello(){

const destroyedFn = () => {
console.log("destroyed");
};

const createdFn = () => {
  console.log("created");
  return destroyedFn;
};

useEffect(createdFn, []);
  return <h1>Hello</h1>
}

function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);


  const onClick = () => setCounter((counter) => counter+1);
  const onChange = (event) => {setKeyword(event.target.value)};
  const clickOn = () => setShowing((prev) => !prev);
 
  useEffect(() => console.log("render once"), []);
  useEffect(() => console.log("only count", counter), [counter]);
  //useEffect()는 코드가 한번만 실행될수 있도록 보호해준다
  useEffect(() =>{
  if(keyword !== "" && keyword.length > 5){console.log("only search", keyword)}
}, [keyword]);
useEffect(() => console.log("run count, keyword"), [counter,keyword]);
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here"/>
       <h1 className={styles.title}>Welcome React!!</h1>
       <h2>{counter}</h2>
       <Button onClick={onClick} text={"Click"} />

       {showing ? <Hello />:null}
       <button onClick={clickOn}>{showing ? "Hide":"Show"}</button>
    </div>

  );
}

export default App;
