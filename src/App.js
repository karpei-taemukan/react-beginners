import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((counter) => counter+1);

  const onChange = (event) => {setKeyword(event.target.value)};

 
  useEffect(() => console.log("render once"), []);
  useEffect(() => console.log("only count", counter), [counter]);
  //useEffect()는 코드가 한번만 실행될수 있도록 보호해준다
  useEffect(() =>{
  if(keyword != "" && keyword.length > 5){console.log("only search", keyword)}
}, [keyword]);
useEffect(() => console.log("run count, keyword"), [counter,keyword]);
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here"/>
       <h1 className={styles.title}>Welcome React!!</h1>
       <h2>{counter}</h2>
       <Button onClick={onClick} text={"Click"} />
    </div>

  );
}

export default App;
