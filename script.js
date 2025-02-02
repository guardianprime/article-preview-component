const shareIcon = document.getElementById("share-Icon");
const wrapperOne = document.getElementById("wrapper-one");
const wrapperTwo = document.getElementById("wrapper-two");
const profileDiv = document.getElementById("profile-div");
const popup = document.getElementById("popup");

shareIcon.addEventListener("click", function () {
    if (window.screen.width <= 450) {
        wrapperOne.classList.toggle("hidden");
        wrapperTwo.classList.toggle("hidden");
        profileDiv.classList.toggle("share");
    } else {
        popup.classList.toggle("hide");
        popup.classList.toggle("show");
    }
})

let mobileWidth = 450;

function checkWidth() {
    let browserWidth = window.innerWidth;

    if (browserWidth <= mobileWidth) {
        popup.classList.remove("show");
        popup.classList.add("hide");
    }

    return;
}


window.addEventListener("resize", checkWidth)