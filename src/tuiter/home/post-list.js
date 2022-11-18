import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {findTuitsThunk}
  from "../../service/tuits-thunks";
import PostListItem
  from "./post-list-item";
//import TuitsStats from "./tuits-stats.js"

const PostList = () => {
  const {tuits, loading} = useSelector(
    state => state.tuitsData)
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(findTuitsThunk())
   }, [])
  
 return(
  <>
   <ul className="list-group">
    {
       loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

     {
       tuits.map(tuit =>
         <PostListItem 
         key={tuit._id}
         tuit={tuit}/>
         ) 
        
     }
   </ul>
   </>
 );
};
export default PostList;