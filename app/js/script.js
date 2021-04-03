window.onload = function () {
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
  document.getElementById("loader-wrapper").style.display = "none";
};

function pageReload() {
  window.scrollTo(0, 0);
  setTimeout(() => {
    document.getElementById("container").style.opacity = "60%";
  }, 500);

  setTimeout(() => {
    document.getElementById("warning-banner").style.height = "auto";
  }, 200);
  setTimeout(() => {
    document.getElementById("close-button").style.display = "block";
  }, 100);
}

function fadeIn() {
  setTimeout(() => {
    document.getElementById("container").style.opacity = "100%";
  }, 300);
  setTimeout(() => {
    document.getElementById("close-button").style.display = "none";
  }, 100);
  setTimeout(() => {
    document.getElementById("warning-banner").style.height = "auto";
  }, 200);
}
