import React from "react";
import './Updates.css';
import { UpdatesData } from "../../Data/Data";

const RightSide = () => {
    return(
        <div className="Updates">
               {UpdatesData.map((update)=>{
                    return(
                        <div className="update">
                            <img src={update.img} alt=""/>
                            <div className="noti">
                                <div style={{marginBottom: '0.5rem'}}>
                                    <span>{update.name}</span>
                                    <span>  {update.noti}</span>
                                </div>
                                <span>{update.time}</span>
                            </div>
                        </div>
                    )
                })}
            
        </div>
    )
}

export default RightSide