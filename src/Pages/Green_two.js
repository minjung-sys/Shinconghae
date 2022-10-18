import React,{useState} from "react";
import Quiz from "./Quiz";
import cong from "../assets/cong.png";
import '../Home.css';
import {useNavigate,useLocation} from 'react-router-dom';

function Greentwo(){
 const navigate = useNavigate();
 const location = useLocation();
 const [savescore,setSavescore] = useState(0);

 const state = location.state;
const [click,setClick] = useState(0);
 const title = '요리를 해먹기 귀찮은 당신, 배달을 시켰는데 '
 const options=[

    {
        id:1,
        title:'대부분의 경우 젓가락을 사용한다',
        score:3
    },
    {
        id:2,
        title:'설거지 하기도 귀찮은데, 보통 일회용 젓가락을 달라고 한다',
        score:1
    },
    {
        id:3,
        title:'집에 있는 젓가락을 쓸 때도 있고 가끔은 일회용 젓가락을 달라고 한다',
        score:2
    },
 ]
 const handleClickRadioButton = (e) =>{
    setClick(e.target.value)
    // console.log('선탟',e.target.value)
    handleScore(e.target.value);

}
const handleScore = (id)=>{
    setSavescore(options[id-1].score)

    
}
 return(

    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
         <div style={{display:'flex',flexDirection:'row'}}>
         <img classname="cong" src={cong} alt ="cong" />
         <img classname="cong" src={cong} alt ="cong" />
         </div>
            <div className="homemain">
            <div className="hometitle">
                <p id="title_2">신.콩 레벨 테스트</p>
                
                <p id= "title_1">{title}</p>

            </div>
            <div className="content">
                {options.map(kind=>(
                    <label key={kind.score} id="label">
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
                <button className="button" onClick={()=>  navigate('/three',{state:Number(savescore)+Number(state)})}>다음으로</button>
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
export default Greentwo;