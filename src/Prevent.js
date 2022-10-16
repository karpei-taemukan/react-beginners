const usePreventLeave = () => {

const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
}

const prevent = () => {
return window.addEventListener("beforeunload",listener)
}
const unprevent = () => {
    return window.removeEventListener("beforeunload",listener)
}
return {prevent, unprevent};
}


function Prevent() {
  const {prevent, unprevent} = usePreventLeave();
  return (<div>
    <button onClick={prevent}>Protect</button>
    <button onClick={unprevent}>Unprotect</button>
  </div>)
}

export default Prevent;