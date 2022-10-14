const PostListItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-2 "> <img src=${post.avatar} height=48px width= 48px style="border-radius: 50%; margin-left: 40px"></div>
        <div class="col-8">
            <div class="fs-6 text-black-50">${post.author} @${post.account} -2h</div>
            <div class = "fs-6 text-black"> ${post.content} </div>
            <div> <img src=${post.image} height="100%" width="100%"></div>
            <div class="fs-6 text-black">${post.title} </div>
            <div class="fs-6 text-black-50">${post.bot_content} </div>
            <div class="row">
                <div class=col-2>
                <i class="fas fa-comment"></i>
                </div>
                <div class=col-2>
                <i class="fas fa-retweet"></i> 2k
                </div>
                <div class=col-2>
                <i class="fas fa-heart"></i> 4k
                </div>
                <div class=col-2>
                    <i class="fas fa-share-square"></i>
                </div>
            </div>
        </div>
        
    </div>
</li>`
    );
  }
  export default PostListItem;