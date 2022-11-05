import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useSelector } from "react-redux";
library.add(faLocationDot, faHeart, faRetweet, faShare);

const ProfileComponent = (
//     {
//         profile = {
//             "firstName": "Jose", 
//             "lastName": "Annunziato", 
//             "handle": "@jannunzi",
//             "profilePicture": "../../image/react.jpg", 	
//             "bannerPicture": "../../image/react.jpg",
//             "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.",
//             "website": "youtube.com/webdevtv",
//             "location": "Boston, MA",	
//             "dateOfBirth": "7/7/1968",	
//             "dateJoined": "4/2009",
//             "followingCount": 340,	
//             "followersCount": 223
//         }

// }
) => {
    const profile = useSelector(state => state.profile.profile)
   return(
     <div>
        <div> 
            <div className="position-relative">
            <img alt="ert" style={{height: "250px", width: "100%"}}  src={`/image/${profile.bannerPicture}`}/>
            </div>
            <div>
                <div className="col-8">
                <img        
                     width={120} height={120} style={{borderRadius:'50%', marginLeft:"40px", position:"relative", top:"-70px"}} src={`/image/${profile.profilePicture}`} className="rounded-circle ms-3 wd-profile-image p-1 " alt="text" ></img>
                </div>
            </div>
        </div>
        

        <div style={{top:"-50px", position: "relative"}}>
        <div ><h2>{profile.firstName} {profile.lastName}</h2></div>
        <Link to="/tuiter/edit-profile">
        <button style={{top:"-50px", position: "relative"}} className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            >
           Edit Profile
         </button>
        </Link>
        <div className="text-black-50"><p>{profile.handle}</p></div>
        <div><p>{profile.bio}</p></div>
        
        <div className="row">
        <div className="col-2">
        <div className="row">
                <div className="col-2">
                <a href="/"> 
                <FontAwesomeIcon icon={"comment"}></FontAwesomeIcon> 
            </a>
            </div>
            <div className="col-2 text-black-50">{profile.location}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
            <div className="row">
                <div className="col-2">
                <a href="/"><FontAwesomeIcon icon={"retweet"}></FontAwesomeIcon> </a>
            </div>
            <div className="col-2 text-black-50">{profile.dateOfBirth}</div>
            </div>
        </div>
        <div className="col-2" style={{marginLeft: "30px"}}>
        <div className="row">
                <div className="col-2">
                <a href="/">
                <FontAwesomeIcon icon={"heart"}></FontAwesomeIcon> 
            </a>
            </div>
            <div className="col-2 text-black-50">{profile.dateJoined}</div>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-2">
                <div className="row">
                    <div className="col-4">{profile.followingCount}</div>
                    <div className="col-2 text-black-50">Following</div>
                </div>
            </div>

            <div className="col-2">
                <div className="row">
                    <div className="col-4">{profile.followersCount}</div>
                    <div className="col-2 text-black-50">Follower</div>
                </div>
            </div>
            
        </div>
        </div>
        
       
     </div>
   );
  };
  export default ProfileComponent;
