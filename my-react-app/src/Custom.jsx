import{useState} from 'react'

const Custom = () => {
    let [Color,SetColor]=useState(true)
  function ChangeColor(){
    if(Color===true){
        SetColor(false)
    }
    else{
        SetColor(true)
    }
  }
    let [count,SetCount]= useState(0)
    const increment=()=> SetCount(count+1)
    const decrement=()=> SetCount(count-1)
   
    
  return {count,increment,decrement,ChangeColor,Color}
    
}

export default Custom