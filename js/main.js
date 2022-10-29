(function () {
    // Back to Top - by CodyHouse.co
    var backTop = document.getElementsByClassName("js-cd-top")[0],
        offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
        offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        scrollDuration = 700,
        scrolling = false;

    if (backTop) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                !window.requestAnimationFrame
                    ? setTimeout(checkBackToTop, 250)
                    : window.requestAnimationFrame(checkBackToTop);
            }
        });

        //smooth scroll to top
        backTop.addEventListener("click", function (event) {
            event.preventDefault();
            !window.requestAnimationFrame
                ? window.scrollTo(0, 0)
                : Util.scrollTo(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        windowTop > offset
            ? Util.addClass(backTop, "cd-top--is-visible")
            : Util.removeClass(backTop, "cd-top--is-visible cd-top--fade-out");
        windowTop > offsetOpacity && Util.addClass(backTop, "cd-top--fade-out");
        scrolling = false;
    }
})();

//open menu and close menu

const navBar = document.getElementById("navbarSupportedContent");
const openBar = document.getElementById("open");
const closeBar = document.getElementById("closer");

function windowResize(breakpoint) {
    // If media query matches
    if (breakpoint.matches) {
        navBar.classList.add("changeBar");
        openBar.classList.remove("none");
        closeBar.classList.add("none");
    } else {
        // x.classList.remove("sizeSwiper")
        navBar.classList.remove("changeBar");
        openBar.classList.add("none");
        closeBar.classList.add("none");
    }
}
const breakpoint = window.matchMedia("(max-width:1024px)");
// Call listener function at run time
windowResize(breakpoint);
// Attach listener function on state changes
breakpoint.addEventListener("change", () => {
    //   console.log(breakpoint)
    windowResize(breakpoint);
});

openBar.addEventListener("click", function () {
    navBar.classList.remove("changeBar");
    closeBar.classList.remove("none");
    openBar.classList.add("none");
});
closeBar.addEventListener("click", function () {
    navBar.classList.add("changeBar");
    openBar.classList.remove("none");
    closeBar.classList.add("none");
});
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.getElementById("body").classList.toggle("dark");
}

document.getElementById("changeTheme").onclick = () => {
    document.getElementById("body").classList.toggle("dark");
    if (currentTheme == "dark") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "dark");
    }
};
