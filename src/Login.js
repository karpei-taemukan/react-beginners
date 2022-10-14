import {useState} from "react";

function Login(){
const [data, setData] = useState({
    username:"",
    password:""
});
const [form, setForm] = useState({
    username:"",
    password:""
})

const [submitted, setSubmitted] = useState(false);

const updateField = (e) => {
setData(
    {
    ...data,
    [e.target.name]: e.target.value // 객체의 key에 value를 갱신하려면 갱신하려는 key에 []를 씌운다
    //[e.target.id]: e.target.value  가능 
})
//console.log(e.target.name);
//console.log({[e.target.name]: e.target.value});
setSubmitted(false);
}

const printValues = (e) => {
e.preventDefault();
setForm({
    username: data.username,
    password: data.password
})
setSubmitted(true);
}

 return (
    <div>
<form onSubmit={printValues}>
    <label htmlFor="username">username</label>
    <input name="username" value={data.username} onChange={updateField} id="username" placeholder="username"/> 
    <label htmlFor="password">password</label>
    <input name="password" value={data.password} onChange={updateField} id="password" placeholder="passwords"/> 
    <button>Submit</button>
    </form>
    <h2>{submitted ? `username:${data.username}` : null}</h2>
    <h2>{submitted ? `password:${data.password}`: null}</h2>
    </div>
 )   
}

export default Login;