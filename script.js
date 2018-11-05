$("#search-input").on("keyup", function(e){
    var keyword = $("#search-input").val()
    searchAndDisplayMovies(keyword)
})

$("#search-form").on("submit", function(e){
    e.preventDefault()//enpêche le rechargement de la page à l'envoi du formulaire
    var keyword = $("#search-input").val()
    searchAndDisplayMovies(keyword)
})

function searchAndDisplayMovies(keyword){
    //$.ajax().done()
    $.ajax({
        //url: "http://localhost/movies-sf/public/api/v1/movies", method: "GET",//utilisation de l'api à l'adresse donnée et utiliser la méthode, ici GET.
        url: "https://api-adresse.data.gouv.fr/search/?q=", method: "GET",
        data:{
            q: keyword
        },
        headers:{
            accept : "application/json"
        },
        success : function( mydata ) {
            //console.log(mydata);
            $.each(mydata.features, function(i, obj) {
                console.log(obj.properties);
                //$("#content").empty()
                $("#content").append("coucou !")
                var adresse = $("<h2>" + obj.properties.label + "</h2>")
                $("#content").append(adresse)
            });   
        }
    })
    /*.done(function(response){//renvoie le résultat
        //console.log(response.data[0].title)
        //$("#content").html(response.data[0].title);//affiche le titre du film 0

        //window.navigator.vibrate(200)//fait vibrer le téléphone quand on reçoit des résultats.
        //enlève le loading (le contenu de #content en tout cas)
        $("#content").empty()
        //affiche
        response.data.forEach(function(movie){
            var pic = $("<img>").attr("src", "http://localhost/movies-sf/public/img/posters/tt0024216.jpg")
            pic.css("with", 200)
            pic.attr("data-movieId", movie.id)

            $("#content").append(pic)
        })

    });*/
}