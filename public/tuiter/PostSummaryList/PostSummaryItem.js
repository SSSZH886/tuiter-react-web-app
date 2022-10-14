const PostSummaryItem = (tuit) => {
    return(`
    <li class="list-group-item">
    <div class="row">
        <div class="col-8">
            <div class="text-black-50">${tuit.topic}</div>
            <div >${tuit.userName}</div>
            <div>${tuit.title}</div>
        </div>
        <div class="col-4">
            <img src=${tuit.image} class="float-end" height="100%" width="100%">
        </div>
    </div>
</li>`
    );
  }
  export default PostSummaryItem;