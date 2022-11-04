import React from "react";
import ProfileItem from "./profile-item";
import { useSelector } from "react-redux";

const ProfileList = () => {
  const profileArray = useSelector(state => state.profiles);
 return(
   <ul className="list-group">
     {
       profileArray.map(profile =>
         <ProfileItem 
         key={profile.lastName}
         profile={profile}/> )
     }
   </ul>
 );
};
export default ProfileList;