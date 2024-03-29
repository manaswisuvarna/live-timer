const settingIcon=document.getElementById("settingIcon");
const  date=document.getElementById("date");
let isDob=false;

const initialText = document.getElementById("initialtext");
const afterInput=document.getElementById("afterInput");
const submit=document.getElementById("submit");
const invalue=document.getElementById("invalue");
let time



const year=document.getElementById("year");
const month=document.getElementById("month");
const day=document.getElementById("day");
const hour=document.getElementById("hour");
const min=document.getElementById("minute");
const sec=document.getElementById("second");

const maketwodigi =(strnum)=>
{
    return strnum>9 ?strnum:`0${strnum}`;
}//two digit number setting

const toogleSetting = () =>
{
    if(isDob)
    {
        date.classList.add("hide");
    }else{
        date.classList.remove("hide");
    }
    isDob = !isDob;
}//setting icon toggle






const updatetime = () =>
{
    const curdate=new Date();
    
    const dateDiff=curdate-time;

    const yy = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const mm = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const dd = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hh = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const m = Math.floor(dateDiff / (1000 * 60)) % 60;
    const s = Math.floor(dateDiff / 1000) % 60;

    year.innerHTML= maketwodigi(yy)  ;
    month.innerHTML= maketwodigi(mm)  ;
    day.innerHTML= maketwodigi(dd)  ;
    hour.innerHTML= maketwodigi(hh)  ;
    min.innerHTML= maketwodigi(m);  
    sec.innerHTML= maketwodigi(s) ; 
}//time calculation


const localStoragegetter =()=>
{
    const y= localStorage.setItem("y");
const m=localStorage.setItem("m");
const d=localStorage.setItem("d");
if(y && m && d)
{
    time=new Date(y,m,d);
}
updatetime();
}//local storage

const contentToggler = () => {
    updatetime();
    if(time) {
        afterInput.classList.remove("hide");
        initialText.classList.add("hide");
        
       
    }
    else{
        afterInput.classList.add("hide");
        initialText.classList.remove("hide");
    }
  };

const timespanFun = () =>
{
     const timestr=invalue.value;
     time= timestr?new Date(timestr):null;



    if(time)
    {
        localStorage.setItem("y",time.getFullYear());
        localStorage.setItem("m",time.getMonth());
        localStorage.setItem("d",time.getDate());

        contentToggler();
        setInterval(() => updatetime(), 1000);

}
}


contentToggler();
localStoragegetter();


  