
    document.addEventListener("DOMContentLoaded", function () {
        let icons = document.querySelectorAll(".animated-icons span");
    
        icons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.3}s`;
        });
    });
            
    document.addEventListener("DOMContentLoaded", function () {
        const profilePic = document.getElementById("profilePic");
        const imageModal = document.getElementById("imageModal");
        const fullSizeImage = document.getElementById("fullSizeImage");
    
        profilePic.addEventListener("click", function () {
            imageModal.style.display = "flex";
            fullSizeImage.src = profilePic.src;
        });
    
        imageModal.addEventListener("click", function () {
            imageModal.style.display = "none";
        });
    });     
    
       
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
       
    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("darkModeToggle");
        const body = document.body;
    
        // Check localStorage for theme preference
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            toggleButton.textContent = "☀️"; // Update button text
        }
    
        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
    
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled"); // Save preference
                toggleButton.textContent = "☀️ "; // Change icon
            } else {
                localStorage.setItem("darkMode", "disabled");
                toggleButton.textContent = "🌙 ";
            }
        });
    });
    
   const collageModal = document.getElementById("collageModal");
    const viewLink = document.getElementById("viewLink");
    const closeBtn = document.querySelector(".close");

    viewLink.addEventListener("click", function (event) {
        event.preventDefault();
        collageModal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        collageModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === collageModal || event.target === imageModal) {
            collageModal.style.display = "none";
            imageModal.style.display = "none";
        }
    });

   
    
    document.addEventListener("DOMContentLoaded", function () {
        const navbarLinks = document.querySelectorAll('.navbar a'); // Select all navbar links
        const sections = document.querySelectorAll("section"); // Select all sections
    
        // When any navbar link is clicked
        navbarLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent the default anchor behavior
    
                const targetId = link.getAttribute("href").substring(1); // Get target section ID from the link href
                const targetSection = document.getElementById(targetId); // Get the target section by its ID
                
                // Remove any existing blur effects and reset the state
                sections.forEach(section => {
                    section.classList.remove("hidden");
                    section.classList.remove("blur-background");
                    section.classList.remove("active");
                });
    
                // Add the blur effect to all sections except the one being clicked
                sections.forEach(section => {
                    if (section !== targetSection) {
                        section.classList.add("blur-background");
                    }
                });
    
                // Add the active class to the clicked section to make it visible and prominent
                targetSection.classList.add("active");
    
                // Scroll to the clicked section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    
        // When a click occurs outside any section, reset everything
        window.addEventListener("click", function (event) {
            const activeSection = document.querySelector('.active');
            if (activeSection && !activeSection.contains(event.target) && !event.target.closest('.navbar')) {
                // Reset the state for all sections
                sections.forEach(section => {
                    section.classList.remove("blur-background");
                    section.classList.remove("hidden");
                    section.classList.remove("active");
                });
            }
        });
    
        // Optional: Reset the state after a delay (you can modify or remove this if not needed)
        setTimeout(() => {
            sections.forEach(section => {
                section.classList.remove("hidden"); // Unhide all sections
                section.classList.remove("active"); // Remove the active class
            });
        }, 3000); // Reset after 3 seconds
    });
    
    

