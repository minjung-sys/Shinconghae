import React, { useEffect ,useState} from "react";
import '../Home.css';
import './Result.css';
import level1 from '../assets/level1.png'
import level2 from '../assets/level2.png'
import level3 from '../assets/level3.png'
import level4 from '../assets/level4.png'
import {useNavigate,useLocation} from 'react-router-dom';

export default function Result(){
    const navigate = useNavigate();
    const location = useLocation();
    const state= location.state
    const [level,setLevel] = useState(0);

    useEffect(()=>{
        if (state>=6 && state<12){
            setLevel(1);
        }
        else if (state >=12 && state<18){
            setLevel(2);
        }
        else if (state >=18 && state<=23 ){
            setLevel(3);
        } 
        else {
            setLevel(4);
        }

    },[]);

    const levelarr = [
        {
            id:1,
            title:'환경은 딱히 신경 안쓰는 현대인',
            src:level1
        
        },
        {
            id:2,
            title:'환경.. 무슨 문제가 있나? 환경에 관해서는 살짝 무관심한 타입',
            src:level2
        },
        {
            id:3,
            title:'환경을 아끼지만 실천력이 조금 아쉬운 유망한 그린슈머',
            src:level3
        },
        {
            id:4,
            title:'환경을 지키는 갓생러',
            src:level4
        },        

    ]
 
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div className="homemain">
            <div className="hometitle">
                <p id="title_2">신.콩 레벨 테스트</p>
                <p id= "title_1">결과 확인</p>
                <p id= "level">레벨 {level}</p>
                <p id= "result_">{levelarr[level-1]?.title}</p>
            </div>
         
            <div>
                <img src={levelarr[level-1]?.src} alt='레벨이미지' />
            </div>

            <div id = "testbutton">
                <button className="button" onClick={()=> navigate('/')}>다시 테스트하기</button>
            </div>
        </div>
        </div>
    )

}