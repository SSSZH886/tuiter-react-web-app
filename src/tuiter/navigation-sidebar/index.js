import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
       Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
       Explore
     </Link>
     <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
       Notifications
     </Link>
     <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
       Messages
     </Link>
     <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
       Bookmarks
     </Link>
     <Link to="/tuiter/list" className={`list-group-item ${active === 'list'?'active':''}`}>
       List
     </Link>
     <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
       Profile
     </Link>
     <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
       More
     </Link>
     <Link to="/" className={`list-group-item ${active === '/'?'active':''}`}>
       Labs
     </Link>
   </div>
 );
};
export default NavigationSidebar;