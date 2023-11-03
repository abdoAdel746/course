$("#comm").on("submit", function (e) {
  var dataString = $(this).serializeArray();

  $.ajax({
    type: "get",
    url: "",
    data: dataString,
    success: function () {
      var today = new Date();
      //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

      $("#comment_area").prepend(`
      <div class="comment">
      <div class="row">
        <div class="col-12">
          <div class="row" style="align-items: center">
            <div class="col-2">
              <img src="img/person.jpg" alt="" />
            </div>

            <div class="col-7">
              <h1>${dataString[0].value}</h1>
              <div>
                <i class="far fa-clock"></i>
                <span >${date}</span>
              </div>
            </div>

            <div class="col">
              <button class="btn">reply</button>
            </div>
          </div>
        </div>

        <div class="col-12">
          <p>
          ${dataString[3].value}
          </p>
        </div>

        <div class="col-12" style="height: 2em">
          <div class="linBar">
            <div class="like">
              <i class="fas fa-heart"></i>
              <span>like</span>
            </div>

            <div class="no_comment">
              <i class="fas fa-comment"></i>
              <span>50 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    },
  });

  e.preventDefault();
});
