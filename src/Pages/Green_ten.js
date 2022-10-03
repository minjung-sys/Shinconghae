import React,{useState} from "react";
import Quiz from "./Quiz";
import '../Home.css';
import cong from "../assets/cong.png";

import {useNavigate,useLocation} from 'react-router-dom';

function Greenten(){
 const navigate = useNavigate();
 const location = useLocation();
 const state= location.state
 const [savescore,setSavescore] = useState(0);


const [click,setClick] = useState(0);
 const title = '요즘 esg경영이 유행이라던데..신.콩.해 프로젝트에 대해 알아?'
 const options=[
    {
        id:1,
        title:'신한카드+ 콩키우기 의 줄인말로  환경도 지키고 맞춤형 카드 서비스로 혜택도 받을 수있어 !',
        score:4
    },
    {
        id:2,
        title:'신콩해? 처음 들어보는데 환경을 위한 맞춤형 서비스라니 더 알아보고싶어 ! ',
        score:4
    },
    {
        id:3,
        title:'받기 어려운 혜택이 아니라 중고거래, 대중교통, 저탄소 제품 할인 및 적립이라니 내가 실천하기 쉬운 것들만 모아놨네 ! ',
        score:4,
    },
    {
        id:4,
        title:'취향저격인데..?..바로 콩키우러가야지 !!',
        score:4
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
            {conimage(10)}
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
                <button className="button" onClick={()=> navigate('/result',{state:Number(state)})}>결과 확인하기</button>
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
export default Greenten;