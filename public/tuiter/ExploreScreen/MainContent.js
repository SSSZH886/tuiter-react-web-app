import PostSummaryList from "../PostSummaryList/PostSummaryList.js";




const MainContent = () =>{
    return (`
    <div style="display: flex; justify-content: space-around;">
    <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
    <a href="./explore-settings.html" class="mt-2"><i class="fas fa-cog"></i></a>
</div>
<ul class="nav nav-tabs mt-1 mb-1">
    <li class="nav-item">
        <a href="#" class="nav-link active">For You</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link ">Trending</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link ">News</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link ">Sports</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link ">Entertaiment </a>
    </li>
</ul>
<div class="position-relative">
    <img src="../../image/starship.jpg" width="100%">
    <h1 class="position-absolute bottom-0 left-0 text-white">SpaceX/s Starship</h1>
</div>

${PostSummaryList()}
    `)
}
export default MainContent;