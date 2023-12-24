function openTab(tabName) {
    // Hide all tabs
    var tabs = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Deactivate all tab links
    var tabLinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the clicked tab and activate its link
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Open the default tab when the page loads
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablink")[0].classList.add("active");
