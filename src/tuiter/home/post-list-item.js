import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../service/tuits-thunks";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faComment, faHeart, faRetweet, faShare);




const PostListItem = (
    tuit
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-2 "> <img alt="qwe" width={55} height={55} style={{borderRadius:'50%', marginLeft:"40px"}} src={`/image/${tuit.tuit.image}`}/></div>
        <div className="col-8">

            <div className="fs-6 text-black-50">{tuit.tuit.topic} @{tuit.tuit.username} -{tuit.tuit.time}</div>

            <button className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit.tuit._id)}></button>
            <div> <img alt="wer" style={{height: "100%", width: "100%"}}  src={`/image/${tuit.tuit.image}`}/></div>
            <div className="fs-6 text-black-50">{tuit.tuit.tuit}</div>
        </div>

        <div>
            <div className="row">
        <div className="col-2">
        <div className="row">
                <div className="col-2">
                <a href="/"> 
                <FontAwesomeIcon icon={"comment"}></FontAwesomeIcon> 
            </a>
            </div>
            <div className="col-2">{tuit.tuit.replies}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
            <div className="row">
                <div className="col-2">
                <a href="/"><FontAwesomeIcon icon={"retweet"}></FontAwesomeIcon> </a>
            </div>
            <div className="col-2">{tuit.tuit.retuits}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
        <div className="row">
                <div className="col-2">
                <i onClick={()=>dispatch(updateTuitThunk({
                    ...tuit.tuit,
                    likes: tuit.tuit.likes+1
                }))}>
                <FontAwesomeIcon icon={"heart"}></FontAwesomeIcon> 
            </i>
            </div>
            <div className="col-2">
                {tuit.tuit.likes}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "50px"}}>
            <a href="/">
            <FontAwesomeIcon icon={"share"}></FontAwesomeIcon> 
            </a>
        </div>
    </div>
        </div>
    </div>
</li>
 );
};
export default PostListItem;