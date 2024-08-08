
function bringToFront(boxId,a,b,c,d) {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');

    // Find the current highest z-index
    let highestZIndex = 0;
    boxes.forEach(box => {
        const zIndex = parseInt(window.getComputedStyle(box).zIndex);
        if (zIndex > highestZIndex) {
            highestZIndex = zIndex;
        }
    });

    // Set the specified box to the highest z-index + 1
    document.getElementById(boxId).style.zIndex = highestZIndex + 1;
    document.getElementById(boxId).style.opacity = 1;
    if (boxId==a) {
        document.getElementById(b).style.opacity=0;
        document.getElementById(c).style.opacity=0;
        document.getElementById(d).style.opacity=0;
        }
    if (boxId==b) {
        document.getElementById(a).style.opacity=0;
        document.getElementById(c).style.opacity=0;
        document.getElementById(d).style.opacity=0;
        }
    if (boxId==c) {
        document.getElementById(b).style.opacity=0;
        document.getElementById(a).style.opacity=0;
        document.getElementById(d).style.opacity=0;
        }
    if (boxId==d) {
        document.getElementById(b).style.opacity=0;
        document.getElementById(a).style.opacity=0;
        document.getElementById(c).style.opacity=0;
        }
    if (boxId!=a&&boxId!=b&&boxId!=c&&boxId!=d) {
        document.getElementById(a).style.opacity=0;
        document.getElementById(b).style.opacity=0;
        document.getElementById(c).style.opacity=0;
        document.getElementById(d).style.opacity=0;
        }
}


function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
