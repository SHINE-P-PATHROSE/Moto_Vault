 let currentTab = 'login';

    function switchTab(tab) {
        const loginTab = document.querySelector('.auth-tab:first-child');
        const signupTab = document.querySelector('.auth-tab:last-child');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const submitBtn = document.getElementById('submitBtn');

        if (tab === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.classList.remove('active');
            submitBtn.textContent = 'Continue';
            currentTab = 'login';
        } else {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            loginForm.style.display = 'none';
            signupForm.classList.add('active');
            submitBtn.textContent = 'Create Account';
            currentTab = 'signup';
        }

        // Reset form
        document.getElementById('authForm').reset();
    }

    function togglePassword(fieldId) {
        const passwordField = document.getElementById(fieldId);
        const eyeIcon = passwordField.nextElementSibling;

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.textContent = '🙈';
        } else {
            passwordField.type = 'password';
            eyeIcon.textContent = '👁';
        }
    }

    function showForgotPassword() {
        alert('Forgot password functionality would be implemented here.');
    }

    function socialLogin(provider) {
        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be implemented here.`);
    }

    // Enhanced form interactions
    document.querySelectorAll('.input-field').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderBottomColor = '#2563eb';
            this.parentNode.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderBottomColor = '#e0e0e0';
            }
            this.parentNode.style.transform = 'translateY(0)';
        });

        input.addEventListener('input', function() {
            if (this.value) {
                this.style.borderBottomColor = '#10b981';
            } else {
                this.style.borderBottomColor = '#2563eb';
            }
        });
    });

    // Form submission
    document.getElementById('authForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const inputs = this.querySelectorAll('.input-field');
        let allFilled = true;

        // Validate active form fields
        const activeForm = currentTab === 'login' ?
            document.getElementById('loginForm') :
            document.getElementById('signupForm');

        const activeInputs = activeForm.querySelectorAll('.input-field');

        activeInputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
                input.style.borderBottomColor = '#ef4444';
                input.style.animation = 'shake 0.5s ease-in-out';
            }
        });

        // Password confirmation check for signup
        if (currentTab === 'signup') {
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                allFilled = false;
                document.getElementById('confirmPassword').style.borderBottomColor = '#ef4444';
                alert('Passwords do not match!');
            }
        }

        if (allFilled) {
            submitBtn.style.background = '#2563eb';
            submitBtn.style.color = 'white';
            submitBtn.style.transform = 'translateY(0)';
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.style.background = '#10b981';
                submitBtn.textContent = currentTab === 'login' ? '✓ Logged In' : '✓ Account Created';

                setTimeout(() => {
                    submitBtn.style.background = '#f8f8f8';
                    submitBtn.style.color = '#666';
                    submitBtn.textContent = currentTab === 'login' ? 'Continue' : 'Create Account';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        }
    });

    // Add shake animation for validation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);



    function switchTab(tab) {
        const loginTab = document.getElementById('loginTab');
        const signupTab = document.getElementById('signupTab');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

        if (tab === 'login') {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    }

    function togglePassword(fieldId) {
        const passwordField = document.getElementById(fieldId);
        const eyeIcon = passwordField.nextElementSibling;

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.textContent = '🙈';
        } else {
            passwordField.type = 'password';
            eyeIcon.textContent = '👁';
        }
    }

    function showForgotPassword() {
        alert('Forgot password functionality would be implemented here.');
    }

    function socialLogin(provider) {
        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be implemented here.`);
    }

//
//    function switchTab(tab) {
//        const loginTab = document.getElementById('loginTab');
//        const signupTab = document.getElementById('signupTab');
//        const loginForm = document.getElementById('loginForm');
//        const signupForm = document.getElementById('signupForm');
//        const orDivider = document.querySelector('.divider');
//        const socialLogin = document.querySelector('.social-login');
//
//        if (tab === 'login') {
//            loginTab.classList.add('active');
//            signupTab.classList.remove('active');
//            loginForm.style.display = 'block';
//            signupForm.style.display = 'none';
//            if (orDivider) orDivider.style.display = 'block';
//            if (socialLogin) socialLogin.style.display = 'block';
//        } else {
//            signupTab.classList.add('active');
//            loginTab.classList.remove('active');
//            loginForm.style.display = 'none';
//            signupForm.style.display = 'block';
//            if (orDivider) orDivider.style.display = 'none';
//            if (socialLogin) socialLogin.style.display = 'none';
//        }
//    }
//
//    function togglePassword(fieldId) {
//        const passwordField = document.getElementById(fieldId);
//        if (!passwordField) return;
//
//        const eyeIcon = passwordField.nextElementSibling;
//        if (!eyeIcon) return;
//
//        if (passwordField.type === 'password') {
//            passwordField.type = 'text';
//            eyeIcon.textContent = '🙈';
//        } else {
//            passwordField.type = 'password';
//            eyeIcon.textContent = '👁';
//        }
//    }
//
//    function showForgotPassword() {
//        alert('Forgot password functionality would be implemented here.');
//    }
//
//    function socialLogin(provider) {
//        alert(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login would be implemented here.`);
//    }
//
//    // Initialize the page to show login form by default
//    document.addEventListener('DOMContentLoaded', function() {
//        switchTab('login');
//
//        // Add event listeners for all password eye icons
//        document.querySelectorAll('.eye-icon').forEach(icon => {
//            icon.addEventListener('click', function() {
//                const fieldId = this.previousElementSibling.id;
//                togglePassword(fieldId);
//            });
//        });
//    });