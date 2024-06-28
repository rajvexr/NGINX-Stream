document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const subHeadingContainers = document.querySelectorAll(".sub-heading-container");
    const projectCards = document.querySelectorAll(".project-box");
    const projectBtns = document.querySelectorAll(".btn-project");
    const imageSlider = document.querySelector(".slideshow-container");

    let focusedIndex = 0;
    let isFocusedOnNav = true;
    let isFocusedOnImageSlider = false;
    let isFocusedOnSubHeading = false;
    let isOnProjects = false;

    // Set initial focus
    navLinks[focusedIndex].classList.add("focused");

    // Add event listener for keydown event
    document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (key === "ArrowLeft" || key === "ArrowRight" || key === "Enter" || key === "ArrowUp" || key === "ArrowDown") {
            event.preventDefault(); // Prevent default browser behavior

            if (window.location.pathname === "/app/") {
                // Remove focus from all elements
                navLinks.forEach((link) => link.classList.remove("focused"));
                subHeadingContainers.forEach((sub) => sub.classList.remove("focused"));
                projectCards.forEach((project) => project.classList.remove("focused"));
                projectBtns.forEach((btn) => btn.classList.remove("focused"));
                imageSlider.classList.remove("focused");

                // Move focus based on arrow keys
                if (key === "ArrowLeft" && isFocusedOnNav) {
                    focusedIndex = (focusedIndex - 1 + navLinks.length) % navLinks.length;
                } else if (key === "ArrowRight" && isFocusedOnNav) {
                    focusedIndex = (focusedIndex + 1) % navLinks.length;
                } else if (key === "ArrowDown") {
                    if (isFocusedOnNav) {
                        isFocusedOnNav = false;
                        isFocusedOnImageSlider = true;
                    } else if (isFocusedOnImageSlider) {
                        isFocusedOnImageSlider = false;
                        isFocusedOnSubHeading = true;
                        focusedIndex = 0;
                    } else if (isFocusedOnSubHeading) {
                        if (focusedIndex < subHeadingContainers.length - 1) {
                            focusedIndex++;
                        } else {
                            isFocusedOnSubHeading = false;
                            isOnProjects = true;
                            focusedIndex = 0;
                        }
                    }
                } else if (key === "ArrowUp") {
                    if (isOnProjects) {
                        if (focusedIndex > 0) {
                            focusedIndex--;
                            projectCards[focusedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else {
                            isOnProjects = false;
                            isFocusedOnSubHeading = true;
                            focusedIndex = subHeadingContainers.length - 1;
                        }
                    } else if (isFocusedOnSubHeading) {
                        if (focusedIndex > 0) {
                            focusedIndex--;
                        } else {
                            isFocusedOnSubHeading = false;
                            isFocusedOnImageSlider = true;
                        }
                    } else if (isFocusedOnImageSlider) {
                        isFocusedOnImageSlider = false;
                        isFocusedOnNav = true;
                    }
                }

                // Set focus based on current state
                if (isFocusedOnNav) {
                    navLinks[focusedIndex].classList.add("focused");
                } else if (isFocusedOnImageSlider) {
                    imageSlider.classList.add("focused");
                    imageSlider.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (isFocusedOnSubHeading) {
                    subHeadingContainers[focusedIndex].classList.add("focused");
                    subHeadingContainers[focusedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (isOnProjects) {
                    projectCards[focusedIndex].classList.add("focused");
                    projectBtns[focusedIndex].classList.add("focused");
                    projectCards[focusedIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // Activate link on Enter
                if (key === "Enter") {
                    if (isOnProjects) {
                        window.location.href = projectBtns[focusedIndex].href;
                    } else if (isFocusedOnNav) {
                        window.location.href = navLinks[focusedIndex].href;
                    } else if (isFocusedOnImageSlider) {
                        // Handle image slider activation if needed
                    }
                }
            }
        }

        // Handle Backspace navigation
        if (key === "Backspace" && window.location.pathname !== "/app/") {
            window.location.href = "/app/";
        }
    });
});
