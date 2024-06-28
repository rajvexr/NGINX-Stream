document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const subHeadingContainer = document.querySelectorAll(".sub-heading-container");
    const dashBTN = document.querySelectorAll(".btn")
    const projectCards = document.querySelectorAll(".project-box")
    const projectBTN = document.querySelectorAll(".btn-project")
    let focusedIndex = 0;
    let isFocusedOnsubHeading = false;
    let isOnProjects = false

    console.log(navLinks)
    console.log(dashBTN)
    console.log(subHeadingContainer)

    // Set initial focus
    navLinks[focusedIndex].classList.add("focused");
    dashBTN[focusedIndex]

    // Add event listener for keydown event
    document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (key === "ArrowLeft" || key === "ArrowRight" || key === "Enter" || key === "ArrowUp" || key === "ArrowDown") {
            event.preventDefault(); // Prevent default browser behavior

            navLinks.forEach((link) => link.classList.remove("focused"));


            if (window.location.pathname === "/app/index.html") {
                subHeadingContainer.forEach((sub) => sub.classList.remove("focused"));
                isFocusedOnsubHeading = false;
                projectCards.forEach((project) => project.classList.remove("focused"));
                projectBTN.forEach((btn) => btn.classList.remove("focused"));
                dashBTN.forEach((btn) => btn.classList.remove("focused"));
                isOnProjects = false
            }

            // Move focus based on arrow keys
            if (key === "ArrowLeft") {
                focusedIndex = (focusedIndex - 1 + navLinks.length) % navLinks.length;
            } else if (key === "ArrowRight") {
                focusedIndex = (focusedIndex + 1) % navLinks.length;
            } else if (key === "ArrowDown") {
                if (window.location.pathname === "/app/") {
                    if (!isFocusedOnsubHeading && !isOnProjects) {
                        isFocusedOnsubHeading = true;
                        navLinks[focusedIndex].classList.remove("focused");
                    } else if (!isOnProjects && isFocusedOnsubHeading) {
                        isOnProjects = true
                        projectCards[focusedIndex].classList.add("focused");
                        projectBTN[focusedIndex].classList.add("focused");
                        subHeadingContainer.classList.remove("focused");
                        navLinks[focusedIndex].classList.remove("focused");
                        isFocusedOnsubHeading = false
                        return
                    }
                }
                else {
                    focusedIndex = (focusedIndex + 1) % navLinks.length;
                }


            } else if (key === "ArrowUp") {

                if (isFocusedOnsubHeading) {
                    focusedIndex = focusedIndex % navLinks.length;
                    subHeadingContainer.classList.remove("focused");
                    isFocusedOnsubHeading = false;
                } else {
                    focusedIndex = focusedIndex % navLinks.length;
                }
            }

            if (isFocusedOnsubHeading) {
                subHeadingContainer.classList.add("focused");
            } else {
                navLinks[focusedIndex].classList.add("focused");
            }

            // Activate link on Enter
            if (key === "Enter") {
                window.location.href = navLinks[focusedIndex].href;
            }
        }

        if (key === "Backspace" && window.location.pathname !== "/app/index.html") {
            window.location.href = "/app/";
        }
    });
});