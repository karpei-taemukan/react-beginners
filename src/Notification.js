
const useNotification = () =>{
    if(!(window.Notification)){
        return ;
    }
    const fireNotifi = (title, option) => {
    if(Notification.permission !== "granted"){
     Notification.requestPermission().then(premission => {
            if(premission === "granted"){
                new Notification(title, option);
            }else{
                return;
            }
        })
    }else{
        new Notification(title, option);
    }
}
return fireNotifi;
}
function Notification(){
    const notifi = useNotification("HI, HOW ARE YOU", {body: "HAHAHA"});
    return (
    <div>
<button onClick={notifi}>NOTIFICATION</button>
    </div>
    )
}
export default Notification;
