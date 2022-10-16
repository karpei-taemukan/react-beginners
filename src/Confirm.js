
const useConfirm = (message="", remove, cancel) => {
if(typeof remove !== "function" && typeof cancel !== "function"){
    return;
}
const confirmAction = () => {
if(window.confirm(message)){
    remove();
}
else{
    cancel();
}
}
return confirmAction;
}

function Confirm(){
const remove = () => {return console.log("remove")}
const cancel = () => {return console.log("cancel")};
const confirmDelete = useConfirm("Are you sure?", remove, cancel);
return (
<div>
<button onClick={confirmDelete}>Delete Button</button>
</div>)
} 

export default Confirm;