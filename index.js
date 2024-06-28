











// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const subHeadingContainer = document.querySelector(".games-heading-container");
//     const dashBTN = document.querySelectorAll(".btn");
//     const projectCards = document.querySelectorAll(".project-box");
//     const projectBTN = document.querySelectorAll(".btn-project");
//     let focusedIndex = 0;
//     let isFocusedOnNav = true;
//     let isFocusedOnsubHeading = false;
//     let isFocusedOnProjects = false;

//     // Set initial focus on the first nav link
//     navLinks[focusedIndex].classList.add("focused");

//     // Add event listener for keydown event
//     document.addEventListener("keydown", function (event) {
//         const key = event.key;

//         if (key === "ArrowLeft" || key === "ArrowRight" || key === "Enter" || key === "ArrowUp" || key === "ArrowDown") {
//             event.preventDefault(); // Prevent default browser behavior

//             // Remove focus classes
//             navLinks.forEach((link) => link.classList.remove("focused"));
//             subHeadingContainer.classList.remove("focused");
//             projectCards.forEach((project) => project.classList.remove("focused"));
//             projectBTN.forEach((btn) => btn.classList.remove("focused"));
//             dashBTN.forEach((btn) => btn.classList.remove("focused"));

//             // Move focus based on arrow keys
//             if (key === "ArrowLeft") {
//                 if (isFocusedOnNav) {
//                     focusedIndex = (focusedIndex - 1 + navLinks.length) % navLinks.length;
//                 }
//             } else if (key === "ArrowRight") {
//                 if (isFocusedOnNav) {
//                     focusedIndex = (focusedIndex + 1) % navLinks.length;
//                 }
//             } else if (key === "ArrowDown") {
//                 if (isFocusedOnNav) {
//                     if (focusedIndex === 0) {
//                         isFocusedOnNav = false;
//                         isFocusedOnsubHeading = true;
//                     }
//                 } else if (isFocusedOnsubHeading) {
//                     isFocusedOnsubHeading = false;
//                     isFocusedOnProjects = true;
//                     focusedIndex = 0; // Start from the first project card
//                 } else if (isFocusedOnProjects && focusedIndex < projectCards.length - 1) {
//                     focusedIndex = (focusedIndex + 1) % projectCards.length;
//                 }
//             } else if (key === "ArrowUp") {
//                 if (isFocusedOnProjects && focusedIndex > 0) {
//                     focusedIndex = (focusedIndex - 1 + projectCards.length) % projectCards.length;
//                 } else if (isFocusedOnProjects && focusedIndex === 0) {
//                     isFocusedOnProjects = false;
//                     isFocusedOnsubHeading = true;
//                 } else if (isFocusedOnsubHeading) {
//                     isFocusedOnsubHeading = false;
//                     isFocusedOnNav = true;
//                     focusedIndex = 0; // Back to the first nav link
//                 }
//             }

//             // Apply focus classes based on the current state
//             if (isFocusedOnNav) {
//                 navLinks[focusedIndex].classList.add("focused");
//             } else if (isFocusedOnsubHeading) {
//                 subHeadingContainer.classList.add("focused");
//             } else if (isFocusedOnProjects) {
//                 projectCards[focusedIndex].classList.add("focused");
//                 projectCards[focusedIndex].querySelector(".btn-project").classList.add("focused");
//             }

//             // Activate link or button on Enter
//             if (key === "Enter") {
//                 if (isFocusedOnNav) {
//                     window.location.href = navLinks[focusedIndex].href;
//                 } else if (isFocusedOnProjects) {
//                     projectCards[focusedIndex].querySelector(".btn-project").click();
//                 }
//             }
//         }

//         // Navigate back to home on Backspace key press
//         if (key === "Backspace" && window.location.pathname !== "/app/index.html") {
//             window.location.href = "/app/";
//         }
//     });
// });








// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const subHeadingContainer = document.querySelector(".games-heading-container");
//     const projectCards = document.querySelectorAll(".project-box");
//     const projectButtons = document.querySelectorAll(".btn-project");
//     let focusedIndex = 0;
//     let isFocusedOnNav = true;
//     let isFocusedOnsubHeading = false;
//     let isFocusedOnProjects = false;
//     let isFocusedOnProjectButtons = false;

//     // Helper function to remove all focus classes
//     function removeFocusClasses() {
//         navLinks.forEach(link => link.classList.remove("focused"));
//         subHeadingContainer.classList.remove("focused");
//         projectCards.forEach(card => card.classList.remove("focused"));
//         projectButtons.forEach(btn => btn.classList.remove("focused"));
//     }

//     // Set initial focus on the first nav link
//     navLinks[focusedIndex].classList.add("focused");

//     document.addEventListener("keydown", function (event) {
//         const key = event.key;

//         if (key === "ArrowLeft" || key === "ArrowRight" || key === "Enter" || key === "ArrowUp" || key === "ArrowDown") {
//             event.preventDefault(); // Prevent default browser behavior

//             removeFocusClasses();

//             if (key === "ArrowLeft" || key === "ArrowRight") {
//                 if (isFocusedOnNav) {
//                     if (key === "ArrowLeft") {
//                         focusedIndex = (focusedIndex - 1 + navLinks.length) % navLinks.length;
//                     } else {
//                         focusedIndex = (focusedIndex + 1) % navLinks.length;
//                     }
//                 } else if (isFocusedOnProjects) {
//                     if (key === "ArrowLeft") {
//                         focusedIndex = (focusedIndex - 1 + projectCards.length) % projectCards.length;
//                     } else {
//                         focusedIndex = (focusedIndex + 1) % projectCards.length;
//                     }
//                 }
//             } else if (key === "ArrowDown") {
//                 if (isFocusedOnNav) {
//                     if (focusedIndex === 0) {
//                         isFocusedOnNav = false;
//                         isFocusedOnsubHeading = true;
//                     } else {
//                         focusedIndex = (focusedIndex + 1) % navLinks.length;
//                     }
//                 } else if (isFocusedOnsubHeading) {
//                     isFocusedOnsubHeading = false;
//                     isFocusedOnProjects = true;
//                     focusedIndex = 0;
//                 }
//                 // Prevent losing focus when pressing down on the last project card
//                 else if (isFocusedOnProjects) {
//                     // Keep the focus on the last project card and its button
//                     projectCards[focusedIndex].classList.add("focused");
//                     projectCards[focusedIndex].querySelector(".btn-project").classList.add("focused");
//                     return; // Exit early to prevent losing focus
//                 }
//             } else if (key === "ArrowUp") {
//                 if (isFocusedOnsubHeading) {
//                     isFocusedOnsubHeading = false;
//                     isFocusedOnNav = true;
//                     focusedIndex = 0;
//                 } else if (isFocusedOnProjects) {
//                     isFocusedOnProjects = false;
//                     isFocusedOnsubHeading = true;
//                 } else if (isFocusedOnProjectButtons) {
//                     isFocusedOnProjectButtons = false;
//                     isFocusedOnProjects = true;
//                 }
//             }

//             if (isFocusedOnNav) {
//                 navLinks[focusedIndex].classList.add("focused");
//             } else if (isFocusedOnsubHeading) {
//                 subHeadingContainer.classList.add("focused");
//             } else if (isFocusedOnProjects) {
//                 projectCards[focusedIndex].classList.add("focused");
//                 projectCards[focusedIndex].querySelector(".btn-project").classList.add("focused");
//             } else if (isFocusedOnProjectButtons) {
//                 projectButtons[focusedIndex].classList.add("focused");
//             }

//             // Activate link or button on Enter
//             if (key === "Enter") {
//                 if (isFocusedOnNav) {
//                     window.location.href = navLinks[focusedIndex].href;
//                 } else if (isFocusedOnsubHeading) {
//                     subHeadingContainer.scrollIntoView({ behavior: "smooth" });
//                 } else if (isFocusedOnProjects) {
//                     projectCards[focusedIndex].querySelector(".btn-project").click();
//                 } else if (isFocusedOnProjectButtons) {
//                     projectButtons[focusedIndex].click();
//                 }
//             }
//         }

//         if (key === "Backspace" && window.location.pathname !== "/app/index.html") {
//             window.location.href = "/app/";
//         }
//     });
// });



