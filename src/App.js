import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

const useInput = (initialValue,validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
   // console.log(e.target.value);
   const {target:{value}} = event;
   let willUpdate = true;

    if(typeof validator === "function"){
      willUpdate = validator(value);
      //console.log(validator(value));
      // true false에 의해 함수의 실행을 결정 
    }

   if(willUpdate){
    setValue(value);
    //console.log(initialValue);
    //console.log(value);
   }
  
  }
  return {value, onChange};
}

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
 

  const maxLen = (value) => { return value.length <=10 }; 
  const name = useInput("Mr.", maxLen);

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
       <input placeholder="name" {...name}/>
    </div>

  );
}

export default App;
