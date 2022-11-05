import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../reducers/profile-reducer";
import {Link} from "react-router-dom";


const EditProfile = (
    
) => {
    const profileCurrent = useSelector(state => state.profile.profile)
    const [profile, setProfile] = useState(profileCurrent)
    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        dispatch(updateProfile(profile))
    }

   return(
    <div> 
        <div>
        <Link to="/tuiter/profile">
            <button className="btn btn-primary">
                X
            </button>
        </Link>
        <button className="float-end btn btn-primary"
                onClick={updateProfileHandler}>
                    Save
        </button>
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
            <label for="user_name">Name</label><br></br>
            <textarea 
                id="user_name" 
                name="user_name" 
                value={`${profile.firstName} ${profile.lastName}`} 
                style={{width:"100%"}}></textarea><br></br>
            <label for="bio">Bio</label><br></br>
            <textarea
             id="bio"
             onChange={(e) => setProfile({
                ...profile,
                bio: e.target.value
             })}
              name="bio"
              value={`${profile.bio}`} 
              style={{width:"100%", height:"100%"}}></textarea><br></br>

            <label for="location">Location</label><br></br>
            <textarea
             id="location"
             onChange={(e) => setProfile({
                ...profile,
                location: e.target.value
             })}
              name="location"
              value={`${profile.location}`} 
              style={{width:"100%", height:"100%"}}></textarea><br></br>
            
            <label for="website">Website</label><br></br>
            <textarea 
                id="website" 
                name="website" 
                value={`${profile.website}`} 
                style={{width:"100%"}}
                onChange={(e) => setProfile({
                    ...profile,
                    website: e.target.value
                })}
                ></textarea><br></br>
            <label for="bDate">Birth date</label><br></br>
            <textarea 
                id="bDate" 
                name="bDate" 
                value={`${profile.dateOfBirth}`} 
                style={{width:"100%"}}
                onChange={(e) => setProfile({
                    ...profile,
                    dateOfBirth: e.target.value
                })}
                ></textarea><br></br>
        </div>

    </div>
   );
  };
  export default EditProfile;
