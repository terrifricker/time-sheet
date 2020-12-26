/* Make transparent label above input field slowly become opaque
when input recieves "focus".  */
input = document.querySelectorAll("input");
input.forEach( element => {
  element.addEventListener("focus", e => {
    var selector = document.querySelector('[for = "' + e.target.id + '"]');
    selector.classList.add("moving");
  })
})


