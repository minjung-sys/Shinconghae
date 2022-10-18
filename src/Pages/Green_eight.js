import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";

import '../Home.css';
import {useNavigate,useLocation} from 'react-router-dom';

function Greeneight(){
 const navigate = useNavigate();
 const location = useLocation();
const state= location.state
const [click,setClick] = useState(0);
const [savescore,setSavescore] = useState(0);


 const title = '환경의 날 날짜는?'
 const options=[

    {
        id:1,
        title:'6월 5일',
        score:4
    },
    {
        id:2,
        title:'2월 29일',
        score:0
    },
    {
        id:3,
        title:'13월 1일',
        score:0
    },
    {
        id:4,
        title:'6월 33일',
        score:0
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
            {conimage(8)}
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
                <button className="button" onClick={()=> navigate('/nine',{state:Number(savescore)+Number(state)})}>다음으로</button>
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
export default Greeneight;