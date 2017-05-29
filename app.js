// toggle Menu on mobile devices

var toggleMenu =  function(event) {
  document.querySelector("body").classList.toggle("menu-mobile-active");
};

document.getElementById("main-nav").addEventListener("click", toggleMenu);


//toggle TeamSection

var toggleTeam = function(event) {
  event.preventDefault();
  var teamSection = document.getElementById("team");
  teamSection.classList.toggle("expand-team-members");

  if(!teamSection.classList.contains("expand-team-members")) {
    window.scrollTo(0, teamSection.offsetTop);
  };
};

document.getElementById("team-show-more").addEventListener("click", toggleTeam);
