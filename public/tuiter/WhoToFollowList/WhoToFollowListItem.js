const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item">
                        <div class="row">
                            <div class="col-2"> <img src=${who.avatarIcon} height="100%" width="100%" style="border-radius: 50%;"></div>
                            <div class="col-7">
                                <div>${who.userName}</div>
                                <div class="text-black-50">@${who.handle}</div>
                            </div>
                            <div class="col-3"><button class="btn btn-primary w-100 mt-1 rounded-pill">Follow</button></div>
                        </div>
                    </div>`
    );
  }
  export default WhoToFollowListItem;