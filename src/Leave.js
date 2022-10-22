import { useRef, useEffect } from "react";

const useBeforeLeave = (onBefore) => {
const handle = (e) => {
if(window.clientY < 0){
    onBefore();
}
}
useEffect(()=>{
document.addEventListener("mouseleave",handle)
return () => {
document.removeEventListener("mouseleave",handle)
}},[]);
if(typeof onBefore !== "function"){
    return;
}
return handle;
} 

function Leave(){
    const onBefore= () => {
    const div = document.getElementById("leave"); 
    const h1 = document.createElement("h1");
    h1.innerText = "Don't Leave";
    div.appendChild(h1);
    }
const leave = useBeforeLeave(onBefore);
return(
<div id="leave">
<h2 ref={leave}>Leave</h2>
</div>)
}

export default Leave;