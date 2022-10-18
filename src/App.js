import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import Login from "./Login";
import Ref from "./Ref";
import Confirm from "./Confirm";
import Prevent from "./Prevent";
import Leave from "./Leave";
import FadeIn from "./FadeIn";
import Network from "./Network";
import Scroll from "./Scroll";

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


/*const content = [
  {
    tab: "Section 1",
    content: "Section 1 Content"
  },
  {
    tab: "Section 2",
    content: "Section 2 Content"
  }
];*/


function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const [number, setNumber] = useState([]);

  const onClick = () => setCounter((counter) => counter+1);
  const onChange = (event) => {setKeyword(event.target.value)};
  const clickOn = () => setShowing((prev) => !prev);
 

  const maxLen = (value) => { return value.length <=10 }; 
  const name = useInput("Mr.", maxLen);

  const addNumber = () => {
    setNumber([
      ...number, /* 그전의 값을 갱신할려면 저장해야함*/
      {
      random: Math.random() * 10
    }]);
  }

/*const {currentItem, changeItem} = useTabs(0,content);
console.log(currentItem)
console.log(changeItem)*/
 

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

      <button onClick={addNumber}>Random in 10</button>
      <ul>
      {number.map((item,index) => (<li key={index}>{item.random}</li>))}
    </ul>
    <Login />
    <Ref />
    <Confirm />
    <Prevent />
    <Scroll />
    <Leave />
    <FadeIn />
    <Network />
    </div>

  );
}

export default App;
