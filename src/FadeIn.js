import { useRef,useEffect } from "react";

const useFadeIn = (duration=1, delay=0) => {
    const element = useRef();
    useEffect(()=>{
        const {current} = element;
        current.style.opacity = 1;
        current.style.transition = `opacity ${duration}s linear ${delay}s`;
    },[]);
    if(typeof duration !== "number" || typeof delay !== "number"){
        return; 
    }

return {ref: element, style: {opacity: 0}};
}

function FadeIn(){
const el = useFadeIn(3, 4);
return (
<div>
<h2 {...el}>FadeIn</h2>
</div>)
}

export default FadeIn;