document.addEventListener("DOMContentLoaded", ()=>{
function updateTime(){
    const now = new Date();
    const utcTime =now.toISOString().slice(11, 19);
    const dayOfWeek = now.toLocaleDateString("en-US", {weekday:"long"})
    document.getElementById("current-time").innerHTML= utcTime;
    document.getElementById("current-day").textContent= dayOfWeek;
}
updateTime()
setInterval(updateTime, 1000)

})