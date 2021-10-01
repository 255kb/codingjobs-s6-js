// Ajax
// the technique used to fetch data from a server with Javascript
// https://en.wikipedia.org/wiki/Ajax_(programming)

// XMLHttpRequest
// https://en.wikipedia.org/wiki/XMLHttpRequest
// global built-in browser object that we can use to make Ajax calls

function reqListener() {
  console.log(JSON.parse(this.responseText));
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.dev/api/people/1/");
oReq.send();

// usually we use a library because the code is easier to write, read and understand

// fetch API
// more modern way of doing an XMLHttpRequest, it has been added recently in browsers. It uses Promises.

// jQuery Ajax
// simple GET request with jQuery ajax method
// we can omit the method (GET)
$.ajax({
  method: "GET",
  url: "https://swapi.dev/api/starships/9/",
  /* success: function (data) {
    console.log(data);
} */
}).done(function (data) {
  // jQuery already JSON.parse() the JSON for us
  console.log(data);
});

// another call made with $.get()
$.get("https://swapi.dev/api/planets/3/", function (data) {
  $(".content").text(`${data.name} (${data.population})`);
  console.log(data);
});

// forms & data sending
$("form").on("submit", function (event) {
  // prevent the form to do its default behavior = reloading the page
  event.preventDefault();
  // we can get the data serialized (in a query string) with jQuery serialize() function
  const formData = $("form").serialize();
  console.log(formData);

  // we usually use a POST request to send data to a server/API
  $.post("http://localhost:3000/tasks", formData, function () {});
  
  // inside each event listener/handler we have access to the event object itself (type of event, etc.)
  console.log("form submitted", event);
});
