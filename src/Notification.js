
const useNotification = (title, option) =>{
    if(!(window.Notification)){
        return ;
    }
    const fireNotifi = () => {
    if(window.Notification.permission !== "granted"){
     window.Notification.requestPermission.then(premission => {
         if(premission === "granted"){
              new window.Notification(title, option);
            }else{
                return;
            }
        })
    }else{
         new window.Notification(title, option);
    }
}
return fireNotifi;
}
function Notification(){
    const notifi = useNotification("HI, HOW ARE YOU", {body: "HAHAHA", icon: "https://chrisdavidmills.github.io/emogotchi/img/well-adjusted.png"});
    return (
    <div>
<button onClick={notifi}>NOTIFICATION</button>
    </div>
    )
}
export default Notification;
