import React from "react";
import tuitsArray from './tuits.json';
import PostListItem
  from "./post-list-item";

const PostList = () => {
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <PostListItem tuit={tuit}/> )
     }
   </ul>
 );
};
export default PostList;