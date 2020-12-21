console.log('starting JavaScript');
input = document.querySelectorAll("input");

input.forEach( element => {
  element.addEventListener("focus", e => {
    var selector = document.querySelector('[for = "' + e.target.id + '"]');
    selector.classList.add("moving");
  })
})


