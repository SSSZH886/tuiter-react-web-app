import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faComment, faHeart, faRetweet, faShare);




const PostListItem = (
    {
        tuit =  {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../image/starship.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
          }
          
      }
      
) => {
    const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-2 "> <img alt="qwe" width={55} height={55} style={{borderRadius:'50%', marginLeft:"40px"}} src={`/image/${tuit.image}`}/></div>
        <div className="col-8">

            <div className="fs-6 text-black-50">{tuit.topic} @{tuit.userName} -{tuit.time}</div>
            <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div> <img alt="wer" style={{height: "100%", width: "100%"}}  src={`/image/${tuit.image}`}/></div>
            <div className="fs-6 text-black-50">{tuit.tuit} </div>
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
    </div>
</li>
 );
};
export default PostListItem;