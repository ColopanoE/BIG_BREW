// Select the element with the id 'menu-btn' and assign it to the variable 'menu'
let menu = document.querySelector('#menu-btn');

// Select the element with the class 'navbar' and assign it to the variable 'navbar'
let navbar = document.querySelector('.navbar');

// Add a click event listener to the 'menu' element
menu.onclick = () => {
    // Toggle the 'fa-times' class on the 'menu' element
    menu.classList.toggle('fa-times');
    
    // Toggle the 'active' class on the 'navbar' element
    navbar.classList.toggle('active');
}

// Add a scroll event listener to the window
window.onscroll = () => {
    // Remove the 'fa-times' class from the 'menu' element
    menu.classList.remove('fa-times');
    
    // Remove the 'active' class from the 'navbar' element
    navbar.classList.remove('active');
};

// Select all elements with the class 'image-slider img' and iterate over them
document.querySelectorAll('.image-slider img').forEach(images => {
    // Add a click event listener to each image element
    images.onclick = () => {
        // Get the 'src' attribute value of the clicked image
        var src = images.getAttribute('src');
        
        // Set the 'src' attribute value of the element with the class 'main-home-image' to the clicked image's 'src'
        document.querySelector('.main-home-image').src = src;
    };
});

// Create a new instance of the Swiper class with the specified options
var swiper = new Swiper(".review-slider", {
    // Set the space between slides to 20 pixels
    spaceBetween: 20,

    // Configure pagination settings
    pagination: {
        el: ".swiper-pagination",   // Pagination element selector
        clickable: true,           // Enable clickable pagination
    },

    // Enable looping through slides
    loop: true,

    // Show a grab cursor on hover
    grabCursor: true,

    // Configure autoplay settings
    autoplay: {
        delay: 7500,               // Delay between slides in milliseconds
        disableOnInteraction: false, // Disable autoplay on user interaction
    },

    // Configure responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,      // Number of slides to show on screen at 0px and above
        },
        768: {
            slidesPerView: 2,      // Number of slides to show on screen at 768px and above
        },
    },
});
