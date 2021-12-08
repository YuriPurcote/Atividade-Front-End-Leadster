$(document).ready(function() {
    var api_key =" 563492ad6f917000010000011b118c35dd0342678ffae6590d418347";
    var image = ''
    $("#form ").submit(function (event) {
        event.preventDefault();

        var search =$("#search").val(); 
        
        imagesearch()
        
    })
    function imagesearch() {
        var porPagina = $("#quantidadePorPagina").val();
        var numeroPagina = $("#numeroPagina").val();
        $.ajax({
            method:'GET',beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", api_key);
            },
            url:"https://api.pexels.com/v1/search?query="+search+"&per_page="+porPagina+"&page="+numeroPagina+"",
            success: function (data){
                data.photos.forEach(photo => {
                    image = `
                        <img src="${photo.src.original}"width="300" height="500" style="margin-bottom:5px;"  class=" rounded "/>
                    `
                    $("#images").append(image)
                });
            },
            error: function (error) {
                console.log(error);
            }
        })  
        
    }
})