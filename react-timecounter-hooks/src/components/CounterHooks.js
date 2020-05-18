import React,{useState,useEffect} from 'react'

function CounterHooks() {

    const [count,setCount] = useState(0);
    const [color,setColor] = useState('');
    const oddColor = ['red','violet','blue'];
    const evenColor = ['pink','yellow','brown'];
    
    const tick = () => {
        setCount(preCount =>{
            let newCount  = preCount + 1;
            if(newCount%2==0) setColor(oddColor[Math.floor(Math.random()*oddColor.length)]);
            else setColor(evenColor[Math.floor(Math.random()*evenColor.length)]);

            return newCount;
        })
    }
    useEffect(()=>{
        
        setInterval(()=> tick(),1000)
    },[])
    return (
        <div className="counter">
         
            <h1>The Counting Time is : <span style={{color}} >{count}</span></h1>
        </div>
    )
}

export default CounterHooks
