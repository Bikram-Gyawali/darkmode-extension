// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");
  let buttonOn = false;
  function mode() {
    alert("hello k xa khabar darkmode banauni haina ta..??");
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelector(["img", "picture", "video"]);
    media.forEach((mediaItem) => {
      mediaItem.style.filter = "'invert(1) hue-rotate(180deg)";
    });
  }

  button.addEventListener("click", () => {
    if (!buttonOn) {  
      buttonOn = true;
      (button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"),
        (circle.style.animation =
          "movieCircleRight 1s ease-in-out 0s forwards");
      chrome.tabs.executeScript({ file: "./on.js" });
    } else {
      buttonOn = false;
      (button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"),
        (circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"),
        chrome.tabs.executeScript({
          file: "./off.js",
        });
    }
  });
}

  //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
// });