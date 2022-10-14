const NavigationSidebar = () => {
    return(`
    <div class="list-group">
    <div class="list-group-item">
        <i class="fas fa-home"></i> 
        <a href="../HomeScreen/home.html" class="text-decoration-none text-black">Home</a>
    </div>
    <div class="list-group-item list-group-item-action active ">
        <i class="fas fa-hashtag"></i>
        <a href="../explore/explore.html" class="text-decoration-none text-white ">Explore</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-bell"></i>
        <a href="../notifications.html" class="text-decoration-none text-black">Notifications</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-envelope-square"></i>
        <a href="../messages.html" class="text-decoration-none text-black">Messages</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-bookmark"></i>
        <a href="../bookmarks/bookmarks.html" class="text-decoration-none text-black">Bookmarks</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-list"></i>
        <a href="../lists.html" class="text-decoration-none text-black">Lists</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-user-circle"></i>
        <a href="../profile.html" class="text-decoration-none text-black">Profile</a>
    </div>
    <div class="list-group-item">
        <i class="fas fa-comment-alt-dots"></i>
        <a href="../more.html" class="text-decoration-none text-black">More</a>
    </div>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
</div>
    `);
   }
   export default NavigationSidebar;