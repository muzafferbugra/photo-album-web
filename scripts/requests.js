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
function addAlbum() {
    var title = document.getElementById("album-title").value;
    if(title == ""){
        alert("Album ismi giriniz");
        return;
    }
    var myObject = {"title":title};
    $.ajax({
        url:baseUrl + "/albums/",
        type:'POST',
        dataType:'json',
        data : JSON.stringify(myObject),
        contentType: "application/json; charset=utf-8",
        success:function(data) {
          alert(data.title + " is added");
          location.reload();
        }
    });
}

function getPhotos(albumId) {
    $.ajax({
        url:baseUrl + "/albums/" + albumId + "/photos/" ,
        type:'GET',
        dataType:'json',
        contentType: "application/json; charset=utf-8",
        success:function(data) {
          var resim_row = document.getElementById("resim-row");
          var resimler = "";
          for(var i = 0; i < data.length; i++){
            resimler += "<div class=\"gallery\"><a target=\"_blank\" href=\"" + data[i].photoLink + "\"><img src=\"" + data[i].photoLink + "\" width=\"300\" height=\"200\"></a><div class=\"desc\">" + data[i].tags + 
            "</div><a href=\"javascript:void(0);\" onclick=\"deletePhoto(" + albumId + "," +  data[i].id + ")\">Sil</a></div>"
          }
          resim_row.innerHTML = resimler;
          var photoUploadGroup = document.getElementById("photoUploadGroup");
          photoUploadGroup.innerHTML = "<button type=\"button\" onclick=\"uploadImage(" + albumId + ")\" class=\"btn btn-primary btn-xl\" id=\"uploadPhoto\">Ekle</button>"
        }
    });
}