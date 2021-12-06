/*
    This document is used in all of the pages, resizes the navigation bar
*/
function resizeNav() {
    console.log("Resizing nav bar");
    const myTitle = document.getElementById("myTitle");
    const options = document.getElementById("options");

    if (innerWidth > 450 && innerWidth < 1150) {
        const logoContainerWidth = document.getElementById("logo").clientWidth;
        let offset = ((innerWidth - myTitle.clientWidth) + (logoContainerWidth / 2)) / 2
        myTitle.style.left = `${offset}px`;
    } else {
        if (myTitle.style.left != "195px") {
            myTitle.style.left = "195px";
        }
    }

    if (innerWidth < 1150) {
        options.style.display = "none";
    } else {
        options.style.display = "inline-block";
    }
}

window.addEventListener("load", () => {
    resizeNav()
    window.addEventListener("resize", resizeNav);
})