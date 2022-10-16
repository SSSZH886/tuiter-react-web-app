import React from "react";

const PostListItem = (
    {
        tuit = {
            "avatar": "starship.jpg",
            "author": "Elon Musk",
            "account": "elonmusk",
            "content": "Amazing show abuot inspiration misson!",
            "image": "starship.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "bot_content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civillian orbital space.."
        }
      }
) => {
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-2 "> <img width={55} height={55} style={{borderRadius:'50%', marginLeft:"40px"}} src={`/image/${tuit.avatar}`}/></div>
        <div className="col-8">
            <div className="fs-6 text-black-50">{tuit.author} @{tuit.account} -2h</div>
            <div className = "fs-6 text-black"> {tuit.content} </div>
            <div> <img style={{height: "100%", width: "100%"}}  src={`/image/${tuit.image}`}/></div>
            <div className="fs-6 text-black">{tuit.title} </div>
            <div className="fs-6 text-black-50">{tuit.bot_content} </div>
        </div>
        
    </div>
</li>
 );
};
export default PostListItem;