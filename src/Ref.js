import { useRef, useEffect } from "react";



function Ref(){
    const click = useRef();
    setTimeout(()=>{
    /*console.log(click.current)*/
    click.current.focus();
    
}, 1000);


    return (
    <div>
    <input ref={click} placeholder = "Auto BackgroundColor Change" />
    </div>)
}

export default Ref;