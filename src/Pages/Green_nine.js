import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";

import '../Home.css';
import {useNavigate,useLocation} from 'react-router-dom';

function Greenine(){
 const navigate = useNavigate();
const [click,setClick] = useState(0);
const [savescore,setSavescore] = useState(0);

const location = useLocation();
const state= location.state
 const title = '4R운동은 어떤걸 의미할까요?'
 const options=[
    {
        id:1,
        title:'reduce reuse recycle refuse',
        score:3
    },
    {
        id:2,
        title:'환경~ 어 ~ 그게 뭔지 모르겠고 ~관심이 앞으로도 없을 예정이어서 안 궁금하고 앞으로도 모를 예정임',
        score:0
    }
    
 ]
 const handleClickRadioButton = (e) =>{
    setClick(e.target.value)
    console.log(e.target.value)
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
            {conimage(9)}
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
                            // style={{visibility:'hidden'}}
                            value={kind.id}
                            checked = {click === `${kind.id}`}
                            onChange = {handleClickRadioButton}/>
                        <div  id = {click === kind.id ? "clickbutton":"contentbutton"}>
                            <p id="option_">{kind.title}</p>
                        </div>
                    </label>
                ))}
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/ten',{state:Number(savescore)+Number(state)})}>다음으로</button>
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
export default Greenine;