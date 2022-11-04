import React from "react";
import PostListItem
  from "./post-list-item";
import { useSelector } from "react-redux";

const PostList = () => {
  const tuitsArray = useSelector(state => state.tuits);
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <PostListItem 
         key={tuit.id}
         tuit={tuit}/> )
     }
   </ul>
 );
};
export default PostList;