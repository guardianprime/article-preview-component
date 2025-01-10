const shareIcon = document.getElementById("share-Icon");
const wrapperOne = document.getElementById("wrapper-one");
const wrapperTwo = document.getElementById("wrapper-two");
const profileDiv = document.getElementById("profile-div");

shareIcon.addEventListener("click", function(){
    wrapperOne.classList.toggle("hidden");
    wrapperTwo.classList.toggle("hidden");
    profileDiv.classList.toggle("share");
    console.log("toggling classes")
})