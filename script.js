function toggleNav() {
    if (document.getElementById("nav-menu").classList.contains("hidden"))
        document.getElementById("nav-menu").classList.remove("hidden");
    else
        document.getElementById("nav-menu").classList.add("hidden");
}

function hideNav() {
    document.getElementById("nav-menu").classList.add("hidden");
}

function registerServiceWorker() {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    }
}
