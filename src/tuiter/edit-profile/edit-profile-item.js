import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";


const EditProfileItem = (
    {
        profile = {
            "firstName": "Jose", 
            "lastName": "Annunziato", 
            "handle": "@jannunzi",
            "profilePicture": "../../image/react.jpg", 	
            "bannerPicture": "../../image/react.jpg",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",	
            "dateOfBirth": "7/7/1968",	
            "dateJoined": "4/2009",
            "followingCount": 340,	
            "followersCount": 223
        }

}
) => {
    //const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        dispatch(updateProfile({
            
        }))
    }

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
        <div style={{position: "relative", top:"-50px"}}>
            <form>
            <label for="user_name">Name</label><br></br>
            <input id="user_name" name="user_name" placeholder={`${profile.firstName} ${profile.lastName}`} style={{width:"100%"}}></input><br></br>
            <label for="bio">Bio</label><br></br>
            <textarea id="bio" name="bio" placeholder={`${profile.bio}`} style={{width:"100%", height:"100%"}}></textarea><br></br>
            <label for="location">Location</label><br></br>
            <input id="location" name="location" placeholder={`${profile.location}`} style={{width:"100%"}}></input><br></br>
            <label for="website">Website</label><br></br>
            <input id="website" name="website" placeholder={`${profile.website}`} style={{width:"100%"}}></input><br></br>
            <label for="bDate">Birth date</label><br></br>
            <input id="bDate" name="bDate" placeholder={`${profile.dateOfBirth}`} style={{width:"100%"}}></input><br></br>
            <input 
                type="submit" 
                value="Save"
                onChange={(event) => updateProfileHandler(profile, event.target.value) }
                ></input>
            </form>
        </div>

    </div>
   );
  };
  export default EditProfileItem;
