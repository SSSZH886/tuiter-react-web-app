import PostSummaryItem from "./PostSummaryItem.js";
import tuits from "./tuit.js";

const PostSummaryList = () => {
    return(`
       <ul class="list-group">
          ${
             tuits.map(tuit => {
                return(PostSummaryItem(tuit));
             }).join('')
          }
       </ul>
    `);
 }
 export default PostSummaryList;