const screenWidth = screen.width;
console.log(screenWidth);

window.onload = function () {
  warningBanner();
  window.scrollTo(0, 0);
  document.getElementById("loader-wrapper").style.opacity = "0";
};

function warningBanner() {
  document.getElementById("warning-banner").style.display = "block";
  if (screenWidth < 750) {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "7.5vh";
    }, 200);
  } else {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "4vh";
    }, 200);
  }
  setTimeout(() => {
    document.getElementById("warning-banner-p").style.display = "block";
  }, 300);
}

function pageReload() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("container").style.opacity = "60%";
  }, 500);
  if (screenWidth < 750) {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "10vh";
    }, 200);
  } else {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "7vh";
    }, 200);
  }
  setTimeout(() => {
    document.getElementById("warning-banner-dismiss-btn").style.display = "block";
  }, 100);
}

function fadeIn() {
  setTimeout(() => {
    document.getElementById("container").style.opacity = "100%";
  }, 300);
  setTimeout(() => {
    document.getElementById("warning-banner-dismiss-btn").style.display =
      "none";
  }, 100);
  if (screenWidth < 750) {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "7.5vh";
    }, 200);
  } else {
    setTimeout(() => {
      document.getElementById("warning-banner").style.height = "4vh";
    }, 200);
  }
}