import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
const [status, setStatus] = useState(navigator.onLine);

const handleChange = () => {
    if(typeof onChange === "function"){
    setStatus(navigator.onLine);
    }
    onChange(navigator.onLine);
}

useEffect(() => {

    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)

    return () => { 
    window.removeEventListener("online", handleChange)
    window.removeEventListener("offline", handleChange)
}},[])
return status;
}

function Network(){
    const handleNetworkChange  = (onLine) => {
console.log(onLine ? "online" : "offline")
    }
    const onLine = useNetwork(handleNetworkChange);
    return (
    <div>

    <h1>{onLine ? "OnLine" : "OffLine"}</h1>
    </div>)
}

export default Network;