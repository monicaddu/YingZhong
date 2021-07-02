$(window)
  .scroll(function () {
    // selectors
    var $window = $(window),
      $body = $("body"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function evtEllipse(info) {
  info.nextElementSibling.classList.toggle('hide');
  info.classList.toggle('hide');
}
function spanEllipse(info) {
  info.classList.toggle('hide');
  info.previousElementSibling.classList.toggle('hide')
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}