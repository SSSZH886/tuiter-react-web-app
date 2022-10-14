import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"
const WhoToFollowList = () => {
   return (`
    <div class="list-group-item">
    ${
        whos.map(who => {
           return(WhoToFollowListItem(who));
        }).join('')
     }
    </div>
`); }

export default WhoToFollowList;