import { useState } from "react";
export default function MY_Game(){
    let[ran_numbers,setrand_numbers]=useState([]);
    const[selected,setSelected]=useState({});
    function gene_rand(){
        const numbers=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
        let genratednumbers=[];
        for (let i=0;i<18;i++){
        let rand_index=Math.floor(Math.random() * numbers.length);
        genratednumbers.push({id:i,num:numbers[rand_index]})
        numbers.splice(rand_index,1)
    }
    setrand_numbers(genratednumbers)
    console.log(ran_numbers)
    }
    function updateAndCecksSelected(num,key){
        setSelected((prev)=>{return{...prev}})
// if(Object.keys(selected).length<2){
//     setSelected({[key]:num})
// }else {
    if(key in selected){
        let copySel={...selected}
        delete copySel[key]
        setSelected(copySel)
        console.log('deleted')
    }
    const firstKey = Object.keys(selected)[0]
        if (firstKey !== key && selected[firstKey] === num) {
            console.log('you win')
        }else if(Object.keys(selected).length===3)
    {let copySel={...selected}
    const firstKey = Object.keys(copySel)[0];
    delete copySel[firstKey]
copySel.key=num
setSelected(copySel)}
else{
    let copySel={...selected}

copySel.key=num
setSelected(copySel)
}
}console.log(selected)
    // }
return(
<div>
    <button onClick={()=>gene_rand()}>generate</button>
    {ran_numbers.map((number)=>{
        return(
            <button value={number.num} onClick={()=>updateAndCecksSelected(number.num,number.id)} key={number.id}>{number.num}</button>
        )
    })}
</div>
)
}