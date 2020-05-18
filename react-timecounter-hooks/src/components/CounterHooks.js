import React,{useState,useEffect} from 'react'

function CounterHooks() {

    const [counterObj,setCount] = useState({sec:0,min:0,hour:0,day:0,color:''});
    const oddColor = ['OrangeRed','DarkMagenta ','DarkBlue'];
    const evenColor = ['MediumSpringGreen','gold','Salmon'];

    const tick = () => {
        setCount(preCount => {
            let setColor;
            /// This IS for Color Change .. Every Second Determine Even or Odd... 
            if(preCount.sec%2==0) setColor = oddColor[Math.floor(Math.random()*oddColor.length)];
            else setColor = evenColor[Math.floor(Math.random()*evenColor.length)];

            /// Conditionally Return 
            if(preCount.sec==59 && preCount.min == 59 && preCount.hour <23) return {...preCount,sec:0,min:0,hour:preCount.hour+1, color:setColor}
            else if(preCount.sec==59 && preCount.min <59) return {...preCount,sec:0,min:preCount.min+1, color:setColor}
            else if(preCount.sec==59 && preCount.min == 59 && preCount.hour == 23) return {...preCount,sec:0,min:0,hour:0,day:preCount.day+1, color:setColor}
            else return {...preCount,sec:preCount.sec+1, color:setColor}
        })

        
    }

    /// UseEffect Only One time USed in LifeCycle 
    useEffect(()=>{
        
        setInterval(()=> tick(),1000)
    },[])

   
    return (
        <div className="counter">
        <h2 style={{backgroundColor:counterObj.color,color:'white'}}>React Hooks Time Counter</h2>
    <h1>The Counting Time is : <span>{counterObj.day} </span>   Day  <span>{counterObj.hour}</span>  hour    <span>{counterObj.min} </span>  min <span style={{color:counterObj.color}} >{counterObj.sec} </span>sec</h1>
        </div>
    )
}

export default CounterHooks
