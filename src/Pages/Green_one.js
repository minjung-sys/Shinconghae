import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from '../assets/cong.png'
import '../Home.css';
import {useNavigate} from 'react-router-dom';

function Greenone(){
const score = 0;
const [click,setClick] = useState(0);
const [savescore,setSavescore] = useState(0);
const navigate = useNavigate();
 const title = '나는 30분 미만의 거리에 있는 곳을 갈때는 주로'
 const options=[
    {
         id:1,
         title:'걸어간다',
         score:3
    },
    { 
        id:2,
         title :'자전거를 탄다',
         score:3
    },
    {
        id:3,
        title:'버스/지하철을 탄다',
        score:2
    },
    {
        id:4,
        title:'자동차/택시를 탄다',
        score:1
    }

]
 const handleClickRadioButton = (e) =>{
    setClick(e.target.value)
    handleScore(e.target.value);
}
const handleScore = (id)=>{
   setSavescore(options[id-1].score)
    
}
 return(

    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <img classname="cong" src={cong} alt ="cong" />
        <div className="homemain">
            <div className="hometitle">
                <p id="title_2">신.콩 레벨 테스트</p>
                <p id= "title_1" >{title}</p>
            </div>
            <div className="content">
                {options.map(kind=>(
                    <label key={kind.title} id="label">
                        <input
                            type="radio"
                            style={{visibility:'hidden'}}
                            value={kind.id}
                            checked = {click === `${kind.id}`}
                            onChange = {handleClickRadioButton}/>                            
                        <div key={kind.title} id = {kind.id === click  ? "clickbutton":"contentbutton"}>
                            <p id="option_" >{kind.title}</p>
                        </div>
                    </label>
                ))}
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/two',{state:Number(savescore)})}>다음으로</button>
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
export default Greenone;