import { /*useRef ,*/ useEffect,useState } from "react";

const useScroll = () => {
//const  element = useRef();

const [scroll, setScroll] = useState({x:0,y:0});

const handle = () => {
    //console.log("x:", window.screenX, "y:", window.scrollY);
    setScroll({x:window.screenX, y:window.pageYOffset});

   /* if(window.scrollY > 500){
        element.current.style.color= "red";
    }
    else{
        element.current.style.color= "blue";
    }*/
}

useEffect(()=>{
    window.addEventListener("scroll", handle);
    return () => {
    window.removeEventListener("scroll", handle);
    }
},[]);

//return element;
return scroll;
}

function Scroll(){
    //const style = useScroll();
    const {y} = useScroll();
return (
    <div>
        <h3 style={{ position: "fixed", color: y > 500 ? "red": "blue"}}>SCROLL</h3>
       {/*<h3 ref={style}>SCROLL</h3>*/}
    </div>
)
}

export default Scroll;