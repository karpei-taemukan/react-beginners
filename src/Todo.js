import {useState} from "react";


function Todo(){
const [toDo, setToDo] = useState("");
const [toDos, setToDos] = useState([]);

const onChange = (event) => {
    setToDo(event.target.value);
   // console.log(toDo);
};
const onSubmit = (event) => {
    event.preventDefault();
    //console.log(toDo);
    if(toDo === ""){
        return;
    }
    setToDos((currentArray)=>[toDo, ...currentArray]);
    setToDo("");
   // console.log(toDos);
   // console.log(toDos.map((item, index) => <li key={index}>{item}</li>))
};

const deleteBtn = (e) => {
//console.log(e.target);
//console.log(e.target.parentElement.parentElement);
//e.target.parentElement.parentElement.removeChild(e.target.parentElement);
e.target.parentElement.remove();

};

return (
<div>
<h1>TO-DO list ({toDos.length})</h1>
<form onSubmit={onSubmit}>
<input onChange={onChange} value={toDo} type="text" placeholder="Write your TODO-list"/>
<button>Add TO-DO</button>
</form>
<hr/>
<ul>
{toDos.map((item, index) => <li key={index}>{item}<button onClick={deleteBtn}>❌</button></li>)}
</ul>
</div>)
};

export default Todo;