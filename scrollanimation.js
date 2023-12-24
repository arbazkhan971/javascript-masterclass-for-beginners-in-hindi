document.addEventListener("DOMContentLoaded", function() {
    // Get the indicator element
    var indicator = document.getElementById("`scroll`-indicator");

    // Listen for the scroll event
    window.addEventListener("scroll", function() {
        // Calculate the scroll percentage
        console.log(window.scrollY,"window.scrollY");
        console.log(document.body.scrollHeight,"document.body.scrollHeight");
        console.log(window.innerHeight,"window.innerHeight");
        var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        // console.log(scrollPercentage,"scrollPercentage");
        indicator.style.backgroundColor = "green";
        indicator.style.width = scrollPercentage + "%";
    });

});
