document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("main-nav").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("body").classList.toggle("menu-mobile-active");
  });

  document.getElementById("team-show-more").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#team").classList.toggle("expand-team-members");
  });

  document.getElementById("team-show-more").addEventListener("click", function (event) {
    event.preventDefault();
    var teamTop = document.getElementById("team").offsetTop;
    document.querySelector("#team").scrollTo(teamTop);
  });
});
