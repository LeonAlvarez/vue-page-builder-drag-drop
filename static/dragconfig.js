  dragula([document.getElementById("left-lovehandles")], {
  moves: function (el, container, handle) {
    return handle.classList.contains('handle');
  }
});

