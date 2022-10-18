import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";

import '../Home.css';
import {useLocation, useNavigate} from 'react-router-dom';

function Greenthree(){
 const navigate = useNavigate();
 const location = useLocation();
 const [savescore,setSavescore] = useState(0);

 const state= location.state
 const [click,setClick] = useState(0);
 const title = '카페에 음료를 사러가려는 당신'
 const options=[
    {
        id:1,
        title:'환경을 생각해서 텀블러를 챙겨간다',
        score:3
    }
    ,
    {
        id:2,
        title:'텀블러?? 그게뭐죠 ,, 집에 있긴 있는데 사용은 안해서 먼지 쌓임..',
        score:1    
    },
    
   { 
        id:3,
        title:'짐이 많지 않다면 텀블러를 챙겨가는 편이다',
        score:2
    },
 ]
 const handleClickRadioButton = (e) =>{
    setClick(e.target.value)
    handleScore(e.target.value);
}
const handleScore = (id)=>{
   setSavescore(options[id-1].score)
    
}
const conimage =(num)=>{
    var congarr = []
    for (var i = 0; i<num; i++){
       congarr.push( <img classname="cong" src={cong} alt ="cong" style={{width:'40px',height:'40px'}}/>)
    }
    return congarr
}
 return(

    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
     <div style={{display:'flex',flexDirection:'row'}}>
            {conimage(3)}
         </div>
        <div className="homemain">
            <div className="hometitle">
                <p id="title_2">신.콩 레벨 테스트</p>
                <p id= "title_1">{title}</p>

            </div>
            <div className="content">
                {options.map(kind=>(
                    <label key={kind.id} id="label">
                        <input
                            type="radio"
                            style={{visibility:'hidden'}}
                            value={kind.id}
                            checked = {click === `${kind.id}`}
                            onChange = {handleClickRadioButton}/>
                        <div  id = {click === kind.id ? "clickbutton":"contentbutton"}>
                            <p id="option_" >{kind.title}</p>
                        </div>
                    </label>
                ))}
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/four',{state:Number(savescore)+Number(state)})}>다음으로</button>
            </div>
        </div>
        </div>

    {/* <div className="homemain">
    <Quiz title = {title} options={options} />
    <div id = "testbutton">
        <button className="button">다음으로</button>
    </div>
    </div> */}
    </>
 )
}
export default Greenthree;