var baseUrl = "https://stormy-fortress-20476.herokuapp.com/";

function getAlbums() {
    $.ajax({
        url:baseUrl + "/albums/",
        type:'GET',
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        success:function(data) {
          return data;
        }
    });
}
