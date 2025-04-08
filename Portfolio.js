    //homepage open by default
    window.onload = function() {
    openTab(event = null, 'home');
    }

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;

        // Hide all tab contents
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove 'active' class from all tab links
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }

        // Show the selected tab content
        document.getElementById(tabName).style.display = "block";

        // Add 'active' class to the clicked tab
        if (evt) {
            evt.currentTarget.classList.add("active");
        } else {
            // If there's no event (like on load), manually activate the first tab
            document.querySelector(`.tablinks[onclick*="${tabName}"]`).classList.add("active");
        }
    }

    //collapsible in learning outcomes tab
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }