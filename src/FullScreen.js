import { useRef } from "react";

const useFullScreen = (callback)=>{
const element = useRef();

const runCb = (isFull) => {
    if(callback && typeof callback === "function"){
    callback(isFull);
}}

const trigger=() => {
if(element.current){
    if(element.current.requestFullscreen){
        element.current.requestFullscreen();
    }
else if(element.current.mozRequestFullScreen){
    element.current.requestFullscreen();
}
else if(element.current.webkitRequestFullscreen){
    element.current.requestFullscreen();
}
else if(element.current.msRequestFullscreen){
    element.current.requestFullscreen();
}
runCb(true);
}}


const Exit = () => {
document.exitFullscreen();
if(document.exitFullscreen){
    document.exitFullscreen();
}
else if(document.mozCancelFullScreen){
    document.exitFullscreen();
}
else if(document.webkitExitFullscreen){
    document.exitFullscreen();
}
else if(document.msExitFullscreen){
    document.exitFullscreen();
}
runCb(false);
}

const toggle = () => {
 if(document.fullscreenElement){
        document.exitFullscreen();
      }
      else {
   document.documentElement.requestFullscreen();
console.log(document.documentElement)
 }
};
return {element,trigger, Exit, toggle};
}

function FullScreen(){
    const onFulls = (isFull) => {
        console.log(isFull ? "FULLMODE" : "NOT FULLMODE")
    }
    const {element,trigger, Exit, toggle} = useFullScreen(onFulls);
return (
    <div>
<br />
<h2>switch certain tag</h2>
<div ref={element} >
<img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="100" height="200" />
<button onClick={Exit}>Exit FullScreen</button>
</div>
<button onClick={trigger}>Make FullScreen</button>
<br />
<h2>switch html tag</h2>
<div>
<button onClick={toggle}>Switch FullScreen</button>
    </div>
    </div>
    )
}

export default FullScreen;