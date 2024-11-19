// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function autoScroll() {
    scrollPosition += scrollSpeed;
    // If we've scrolled past the first item, reset scroll position
    if (scrollPosition >= featuredItems[0].offsetWidth) {
        scrollPosition = 0;
        // Move the first clone back to the end to keep the loop seamless
        featuredWrapper.appendChild(featuredWrapper.firstElementChild);
    }
    featuredWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(autoScroll);
}
autoScroll();



var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 500, // Time in milliseconds (e.g., 3000ms = 3 seconds)
      disableOnInteraction: false, // Keep autoplay on even if the user interacts with the slider
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });


    document.getElementById('paymentMethod').addEventListener('change', function () {
        const creditCardFields = document.getElementById('creditCardFields');
        const paypalFields = document.getElementById('paypalFields');
        
        // Reset fields visibility
        creditCardFields.classList.add('d-none');
        paypalFields.classList.add('d-none');
        
        // Show fields based on the selected payment method
        if (this.value === 'credit-card') {
            creditCardFields.classList.remove('d-none');
        } else if (this.value === 'paypal') {
            paypalFields.classList.remove('d-none');
        }
    });

    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle the payment submission logic here (e.g., send data to the server)
        alert('Payment submitted!'); // Replace this with your actual submission logic
        // Close the modal after submission
        var modal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
        modal.hide();
    });
