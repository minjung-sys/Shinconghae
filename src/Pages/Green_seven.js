import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";

import '../Home.css';
import {useNavigate,useLocation} from 'react-router-dom';

function Greenseven(){
 const navigate = useNavigate();
const [click,setClick] = useState(0);
const [savescore,setSavescore] = useState(0);

const location = useLocation();
const state= location.state

 const title = '집에 사놓은 식자재가 다 떨어져 장을 보러간 당신'
 const options=[
    {
        id:1,
        title:'환경을 생각해 장바구니를 꼭 들고간다',
        score:3
    },
    {
        id:2,
        title:'귀찮으니까 장바구니는 생략하고 백원짜리 비닐봉지를 산다 ',
        score:1
    },
    {
        id:3,
        title:'장바구니를 가끔까먹으면 쓰레기 종량제 봉투에다가 담아간다',
        score:3
    },
    {
        id:4,
        title:'온라인 마켓을 이용해 배달받는다',
        score:2
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
            {conimage(6)}
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
                            <p id="option_" >{kind.title}</p>
                        </div>
                    </label>
                ))}
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/eight',{state:Number(savescore)+Number(state)})}>다음으로</button>
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
export default Greenseven;