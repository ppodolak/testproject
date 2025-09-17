$(document).ready(function () {

  setTimeout(() => {
    console.log('funkcja timeout')
  }, 1000);


  $(function () {
    var image = "https://dog.ceo/api/breeds/image/random";

    function loadimage() {
      $("#obraz").html("<p>Ładowanie obrazu...</p>");

      var request = $.ajax({
        url: image,
        method: "GET"
      })

      $.when(request)
        .done(function (result) {
          console.log(result.message)

          $("#obraz").html("<img src='" + result.message + "\' />")
        })
        .catch(function () {
          console.log('nie mam internetu')
          $("#obraz").html("<img src='/my-photo.jpg' />")
        })
        .always(function () {
          console.log("ja się zawsze wykonam bez względu czy sukces czy bląd")
        })

    }

    $("#pokaż-obraz").on("click", function () {
      loadimage();
    });
  
    loadimage();
  });

  

  $(function () {
    var jokeUrl = "https://official-joke-api.appspot.com/random_joke"

    function loadJoke() {
      $("#żart").html("<p>Ładowanie żartu...</p>");

      var request = $.ajax({
        url: jokeUrl,
        method: "GET"
      })

      $.when(request)
        .done(function (result) {
          console.log(result.message)
      
          $("#żart").html("<p><strong>" + result.setup + "</strong><br>" + result.punchline + "</p>");
        })
        .catch(function () {
          console.log('brak dostępu do internetu')
          $("#żart").html("<p>nie udło się zaladować żartu</p>");
        })
        .always(function () {
          console.log("ja się zawsze wykonam bez względu czy sukces czy bląd");
        });
    }

    $("#pokaż-żart").on("click", function () {
      loadJoke();
    });
  
    loadJoke();
  });
  
  

  $(function () {
    var catFactsUrl = "https://meowfacts.herokuapp.com/";

  function loadRandomCatFact() {
    $("#koty").html("<p>Ładowanie faktów o kocie...</p>");

    $.ajax({
      url: catFactsUrl,
      method: "GET",
      dataType: "json",
      timeout: 5000
    })
      .done(function (result) {
        var fact = result.data[0];
        $("#koty").html("<p><strong>Fakt:</strong> " + fact + "</p>");
      })
      
      .fail(function () {
        console.log('brak dostępu do internetu')
        $("#koty").html("<p>nie udło się zaladować faktu</p>");
      })
      .always(function () {
        console.log("ja się zawsze wykonam bez względu czy sukces czy bląd");
      });
  }

  $("#pokaż-kota").on("click", function () {
    loadRandomCatFact();
  });
  
  loadRandomCatFact();
});




  console.log('kolejna instrukcja');

    $(".zdjecie").hover( function () {
        $("body").css("background-color", "pink")

    })
    $("#przycisk1").on("click", function () {
        $("body").css("background-color", "yellow")
      test("dupa", "dupa1");
      var element = $("#zdjecie1").html();
      //dodajElement("#lista", element);
      console.log(element);
    });

    function test(param1, param2) {
      console.log(param1, param2);
      $(".col").text(param2);
      $("#przycisk1").text(param1);
    }

    function dodajElement(id, element) {
        $(id).append(element);
        foo('test', 'test2')
    }

    var foo = (param1, param2) => { 
        return param1 + param2;
        
    }
  });