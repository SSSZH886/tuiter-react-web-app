import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faBookmark, faEnvelope, faHouse, faList, faListDots, faMessage, faUser} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faHouse, faEnvelope, faMessage, faBookmark, faList, faUser, faListDots, faBomb);

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <a href="/" className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
       <FontAwesomeIcon icon={"house"}></FontAwesomeIcon> Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
       <FontAwesomeIcon icon={"bomb"}></FontAwesomeIcon> Explore
     </Link>
     <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
     <FontAwesomeIcon icon={"envelope"}></FontAwesomeIcon> Notifications
     </Link>
     <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
     <FontAwesomeIcon icon={"message"}></FontAwesomeIcon> Messages
     </Link>
     <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
     <FontAwesomeIcon icon={"bookmark"}></FontAwesomeIcon> Bookmarks
     </Link>
     <Link to="/tuiter/list" className={`list-group-item ${active === 'list'?'active':''}`}>
     <FontAwesomeIcon icon={"list"}></FontAwesomeIcon> List
     </Link>
     <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
     <FontAwesomeIcon icon={"user"}></FontAwesomeIcon> Profile
     </Link>
     <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
     <FontAwesomeIcon icon={"list-dots"}></FontAwesomeIcon> More
     </Link>
     <Link to="/" className={`list-group-item ${active === '/'?'active':''}`}>
       Labs
     </Link>
   </div>
 );
};
export default NavigationSidebar;