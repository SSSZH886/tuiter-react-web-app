import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faComment, faHeart, faRetweet, faShare);

const tuitsStats = (tuit) =>{
    return (
        <div>
            <div className="row">
        <div className="col-2">
        <div className="row">
                <div className="col-2">
                <a href="/"> 
                <FontAwesomeIcon icon={"comment"}></FontAwesomeIcon> 
            </a>
            </div>
            <div className="col-2">{tuit.replies}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
            <div className="row">
                <div className="col-2">
                <a href="/"><FontAwesomeIcon icon={"retweet"}></FontAwesomeIcon> </a>
            </div>
            <div className="col-2">{tuit.retuits}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
        <div className="row">
                <div className="col-2">
                <a href="/">
                <FontAwesomeIcon icon={"heart"}></FontAwesomeIcon> 
            </a>
            </div>
            <div className="col-2">{tuit.likes}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "50px"}}>
            <a href="/">
            <FontAwesomeIcon icon={"share"}></FontAwesomeIcon> 
            </a>
        </div>
    </div>
        </div>
    )
}

export default tuitsStats;