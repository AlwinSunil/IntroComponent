window.onload = function () {
    warningBanner();
    window.scrollTo(0, 0);
  };

function warningBanner() {
  document.getElementById("warning-banner").style.display = "block";
  setTimeout(() => {
    document.getElementById("warning-banner").style.height = "8vh";
  }, 200);
  setTimeout(() => {
    document.getElementById("warning-banner-p").style.display = "block";
  }, 300);
}

function pageReload() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("container").style.opacity = "60%";
  }, 500);
  setTimeout(() => {
    document.getElementById("warning-banner").style.height = "12vh";
  }, 200);
  setTimeout(() => {
    document.getElementById("warning-banner-dismiss-btn").style.display = "block";
  }, 100);
}

function fadeIn() {
  setTimeout(() => {
    document.getElementById("container").style.opacity = "100%";
  }, 300);
  setTimeout(() => {
    document.getElementById("warning-banner-dismiss-btn").style.display = "none";
  }, 100);
  setTimeout(() => {
    document.getElementById("warning-banner").style.height = "8vh";
  }, 100);
}
