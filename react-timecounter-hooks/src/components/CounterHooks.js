import React,{useState,useEffect} from 'react'

function CounterHooks() {

    const [counterObj,setCount] = useState({sec:50,min:59,hour:20,day:1,color:''});
    const oddColor = ['red','violet','blue'];
    const evenColor = ['pink','yellow','brown'];

    const tick = () => {
        setCount(preCount => {
            let setColor;
            if(preCount.sec%2==0) preCount.setColor = oddColor[Math.floor(Math.random()*oddColor.length)];
            else preCount.setColor = evenColor[Math.floor(Math.random()*evenColor.length)];

            if(preCount.sec==59 && preCount.min == 59 && preCount.hour <23) return {...preCount,sec:0,min:0,hour:preCount.hour+1}
            else if(preCount.sec==59 && preCount.min <59) return {...preCount,sec:0,min:preCount.min+1}
            else if(preCount.sec==59 && preCount.min == 59 && preCount.hour == 23) return {...preCount,sec:0,min:0,hour:0,day:preCount.day+1}
            else return {...preCount,sec:preCount.sec+1}
        })

        
    }

    useEffect(()=>{
        
        setInterval(()=> tick(),1000)
    },[])

   
    return (
        <div className="counter">
        <h2>{counterObj.color}</h2>
    <h1>The Counting Time is : <span>{counterObj.day} Day</span>    <span>{counterObj.hour} hour</span>     <span>{counterObj.min} min</span> <span style={{color:counterObj.color}} >{counterObj.sec} </span>sec</h1>
        </div>
    )
}

export default CounterHooks
