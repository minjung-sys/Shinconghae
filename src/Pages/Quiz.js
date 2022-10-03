import React,{useState} from "react";
import '../Home.css';
import './Quiz.css';


function Quiz(title,options){
    const [click,setClick] = useState(0);
    const handleClickRadioButton = (e) =>{
        setClick(e.target.value)

    }
    return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div className="homemain">
            <div className="hometitle">
                    <p id= "title_1">{title}</p>
            </div>
        <div className="radio">
            {options.map(kind =>(
                <label key={kind.name}>
                    <input
                        type="radio"
                        style={{visibility:'hidden'}}
                        value={kind.name}
                        checked = {click === `${kind.name}`}
                        onChange = {handleClickRadioButton}/>
                    <div id = "testbutton">
                        <p id="option_">{kind.name}</p>
                    </div>
                </label>

            ))}
        </div>
        
        </div>

    </div>
    )

}
export default Quiz;
