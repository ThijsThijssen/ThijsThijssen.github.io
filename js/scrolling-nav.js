(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 55)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 55
  });

})(jQuery); // End of use strict

// FAQ
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});

// Lees ander nieuws
$().ready(addPrijzenUpdateButtonEventListener);

function addPrijzenUpdateButtonEventListener() {
  document.getElementById("btnPrijzenUpdate").addEventListener("click", showPrijzenUpdate);
}

function showPrijzenUpdate() {
  var x = document.getElementById("prijzenUpdate");
  var y = document.getElementById("btnPrijzenUpdate");
  var z = document.getElementById("voorspeeldagBtn");

  if (x.style.display === "none") {
    x.style.display = "block";
    z.style.display = "block";
    y.innerHTML = "Lees minder nieuws";
  } else {
    x.style.display = "none";
    z.style.display = "none";
    y.innerHTML = "Lees ander nieuws";
  }
}

$().ready(addVoorspeeldagButtonEventListener);

function addVoorspeeldagButtonEventListener() {
  document.getElementById("btnVoorspeeldag").addEventListener("click", showVoorspeeldagUpdate);
}

function showVoorspeeldagUpdate() {
  var x = document.getElementById("voorspeeldagNieuws");
  var y = document.getElementById("btnVoorspeeldag");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "Lees minder nieuws";
  } else {
    x.style.display = "none";
    y.innerHTML = "Lees ander nieuws";
  }
}

// Quotes veranderen elke 5 seconden
quotes = [
  "Anne (10 jaar): \"Door Florein leer ik goed piano te  spelen, in mijn eigen tempo. Het leuke is dat ik zelf de liedjes mag uitkiezen. Ik kijk dan ook elke week uit naar haar pianoles!\"",
  "Cleo (13 jaar): \"Ik vind Floreins pianolessen vooral superleuk omdat je erg veel ruimte krijgt om zelf liedjes die je leuk vind uit te kiezen en te leren. Ook geeft ze vaak zelf erg leuke ideeën voor liedjes die je zou kunnen leren.\"",
  "Astrid: \"Mijn zoon heeft al een aantal jaren pianoles bij Florein. Hij geniet hier enorm van en gaat met veel plezier naar haar toe. Hij heeft al heel veel geleerd en blijft leren!\""
];

function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = randomQuote;
}

$().ready(function() {
  setInterval(getRandomQuote, 15000);
});