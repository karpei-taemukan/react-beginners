import { useRef, useEffect, useCallback } from "react";


const useClick = (onClick) => {
const element = useRef();

console.log(element);

// useEffect 를 사용해야하는 이유는 
/*
useEffect 가 componentDidMount, componentDidUpdate 되었을때와
componentWilUnmount 되었을때의 코드를 분리해 작성가능 

 useEffect 를 사용하지 않는다면 component가 mount가 되지 않은 상태로 render가 되므로 component로 아무것도 못하게 된다
 */
useEffect(()=>{ 
    if(element.current) // dependency가 존재하므로 componentDidMount일때만 호출
    {  
        element.current.addEventListener("click", onClick);
    }
    return () => { // dependency가 존재하므로 componentWilUnmount일때만 호출
        if(element.current)
        {  //useEffect 가 componentWilUnmount 되었을때 이 코드 호출
            // componentWilUnmount 일때는 return을 한다
            element.current.removeEventListener("click", onClick);
        } 
    }}, [onClick]) // [](dependency) 가 없다면 매번 업데이트될때마다 EventListener 추가됨
if(typeof onClick !== "function"){
    return;
}    
return element;
}


function Ref(){
    
    const click = useRef(); // getELementById 와 같은 역할
   //const body = document.querySelector("body");
   console.log(click.current)
    setTimeout(()=>{
    console.log(click.current)
    if(click.current){
    click.current.focus();
    click.current.style.background="pink";
    }
    //body.style.background="gray";
}, 4000);

const sayHi = () => console.log("hi");
const hi = useClick(sayHi);
    return (
    <div>
    <textarea cols="" row="" ref={click} placeholder="Memo"></textarea>
    <h3 ref={hi}>HI</h3>
    </div>)
}

export default Ref;