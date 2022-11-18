import React from "react";
const PostSummaryItem = (post) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-9">
       <div>{post.userName} . {post.time}</div>
       <div className="fw-bolder">{post.topic}</div>
       <div>{post.title}</div>
     </div>
     <div className="col-2">
       <img alt="ouo" height={70} className="float-end rounded-3" src={`/image/${post.image}`}/>
     </div>
   </div>
  </li>
 );
};
export default PostSummaryItem;

