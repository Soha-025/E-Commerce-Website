document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const login = document.getElementById('login');
    const signup = document.getElementById('signup');
    const cartIcon = document.getElementById('cart-icon');
    const emptyCartOverlay = document.getElementById('empty-cart-overlay');
    const closeButton = document.querySelector('#empty-cart-overlay .close-button');
    
    // Agar saare elements mil gaye hain
    if (cartIcon && emptyCartOverlay && closeButton) {

        // Bag icon par click karne par panel kholo
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault(); // Default link behavior roko
            emptyCartOverlay.classList.add('is-open'); // 'is-open' class add karo
        });

        // Close button par click karne par panel band karo
        closeButton.addEventListener('click', function() {
            emptyCartOverlay.classList.remove('is-open'); // 'is-open' class hatao
        });

        // Panel ke bahar click karne par band karo (Optional)
        // Ye tab kaam karega jab aap panel ke bahar kahi bhi click karenge
        document.addEventListener('click', function(event) {
            // Agar click cart icon par nahi hai, aur panel par bhi nahi hai, aur panel khula hai
            if (!cartIcon.contains(event.target) &&
                !emptyCartOverlay.contains(event.target) &&
                emptyCartOverlay.classList.contains('is-open')) {
                emptyCartOverlay.classList.remove('is-open');
            }
        });

    } else {
        // Agar koi element nahi mila to console mein warning dikhao
        console.warn("Cart functionality elements not found. Check IDs and classes.");
    }



    // Toggle between forms
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Form submission handlers
    login.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        console.log('Login attempt with:', email, password);
        // Add your login logic here
        alert('Login functionality would be implemented here');
    });

    signup.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstName = this.querySelector('input[placeholder="First name"]').value;
        const lastName = this.querySelector('input[placeholder="Last name"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        console.log('Signup attempt with:', {firstName, lastName, email, password});
        // Add your signup logic here
        alert('Account creation would be implemented here');
    });
});