import React, { useEffect ,useState} from "react";
import GreenCard from '../assets/GreenCard.png'
import maincong from '../assets/maincong.png'
import './Mainpage.css';

export default function Mainpange(){
    
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'flex',height:'20%'}}/>
            <div id='main_content'>
                <img style={{position:'relative',width:'40%',left:'-10%'}} src={GreenCard} alt = "maincard" />
                <div id="content_">
                    <p id = "main_title">신.콩 그린카드</p>
                    <p>저탄소 제품      5% 할인</p>
                    <p>자전거/대중교통     3% 적립</p>
                    <p>중고거래시      3% 할인</p>
                </div>
            </div>

            <div id="green_test">
                <div style={{disply:'flex',flexDirection:'column',width:'70%',marginLeft:'20px'}}>
                    <p style={{fontSize:'25px'}}>신한 프렌즈들과 콩들이 만났다!</p>
                    <span style={{fontSize:'25px'}}>당신이 어떤 유형의 그린 컨슈머일까?</span>
                    <a href="https://minjung-sys.github.io/Shinconghae/">심리테스트 바로하러가기</a>
                    <p style={{fontSize:'25px'}}>그린 컨슈머 유형에 따른 맞품형 서비스 제공 !</p>
                </div>
                <img src={maincong} alt = "maincard" />
            </div>
        </div>
    )

}