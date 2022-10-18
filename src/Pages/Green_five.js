import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";

import '../Home.css';
import {useNavigate,useLocation} from 'react-router-dom';

function Greenfive(){
 const navigate = useNavigate();
 const location = useLocation();
 const state= location.state
const [click,setClick] = useState(0);
const [savescore,setSavescore] = useState(0);

 const title = '영화를 보거나 물건을 산 당신, 종이 영수증 발행해드릴까요? 라는 알바생의 질문에'
 const options=[

    { 
        id:1,
        title:'전자영수증 발행이 된다면 환경을 생각해 전자 영수증으로  받는다',
        score:3
    },

    { 
        id:2,
        title:'그래도 종이영수증이지 ! 종이영수증을 달라고한다',
        score:1
    },
    {
        id:3,
        title:' 귀찮아서 영수증 따위 받지않는다',
        score:3
    },

    {
        id:4,
        title:'상황에 따라 전자영수증을 받거나 종이영수증을 받는다',
        score:2
    }
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
            {conimage(5)}
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
                            <p id="option_">{kind.title}</p>
                        </div>
                    </label>
                ))}
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/six',{state:Number(savescore)+Number(state)})}>다음으로</button>
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
export default Greenfive;