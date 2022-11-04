import React from "react";
import EditProfileItem from "./edit-profile-item";
import { useSelector } from "react-redux";

const EditProfileList = () => {
  const profileArray = useSelector(state => state.profiles);
 return(
   <ul className="list-group">
     {
       profileArray.map(profile =>
         <EditProfileItem 
         key={profile.lastName}
         profile={profile}/> )
     }
   </ul>
 );
};
export default EditProfileList;