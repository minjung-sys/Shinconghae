import React from "react";
import './Home.css';
import './font.css';
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div className="homemain">
            <div className="hometitle">
                <p id= "title_1">내 환경 점수는?</p>
                <p id="title_2">신.콩 레벨 테스트</p>
            </div>
            <div className="homeimg">
            </div>
            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/one')}>테스트 시작하기</button>
            </div>
        </div>
        </div>

    )



}

export default Home;