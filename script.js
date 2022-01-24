/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleNav() {
    if (document.getElementById("nav-menu").classList.contains("hidden"))
        document.getElementById("nav-menu").classList.remove("hidden");
    else
        document.getElementById("nav-menu").classList.add("hidden");
}