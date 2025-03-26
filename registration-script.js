document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const emailInput = document.getElementById('email');
    const noEmailCheckbox = document.getElementById('noEmail');
    
    const nameError = document.getElementById('nameError');
    const birthdayError = document.getElementById('birthdayError');
    const emailError = document.getElementById('emailError');
    
    nameError.style.display = 'none';
    birthdayError.style.display = 'none';
    emailError.style.display = 'none';
    
    dayInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value > 31) this.value = 31;
        if (this.value.length === 2) monthInput.focus();
    });
    
    monthInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value > 12) this.value = 12;
        if (this.value.length === 2) yearInput.focus();
    });
    
    yearInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        const currentYear = new Date().getFullYear();
        if (this.value.length === 4 && this.value > currentYear) {
            this.value = currentYear;
        }
    });
    
    noEmailCheckbox.addEventListener('change', function() {
        if (this.checked) {
            emailInput.disabled = true;
            emailInput.value = '';
            emailInput.classList.remove('invalid');
            emailError.style.display = 'none';
        } else {
            emailInput.disabled = false;
        }
    });
    
    function getPhoneNumber() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('phone') || '17352725'; // Default if not provided
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        if (!nameInput.value.trim()) {
            nameInput.classList.add('invalid');
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameInput.classList.remove('invalid');
            nameError.style.display = 'none';
        }
        
        const day = dayInput.value;
        const month = monthInput.value;
        const year = yearInput.value;
        
        if (!day || !month || !year || year.length !== 4) {
            document.querySelector('.birthday-inputs').classList.add('invalid');
            birthdayError.style.display = 'block';
            isValid = false;
        } else {
            document.querySelector('.birthday-inputs').classList.remove('invalid');
            birthdayError.style.display = 'none';
        }
        
        let email = '';
        if (!noEmailCheckbox.checked) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value || !emailPattern.test(emailInput.value)) {
                emailInput.classList.add('invalid');
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailInput.classList.remove('invalid');
                emailError.style.display = 'none';
                email = emailInput.value;
            }
        }
        
        if (isValid) {
            const phone = getPhoneNumber();
            
            const params = new URLSearchParams();
            params.append('phone', phone);
            params.append('name', nameInput.value.trim());
            params.append('birthday', `${day}/${month}/${year}`);
            params.append('email', email || 'No email provided');
            
            window.location.href = `summary.html?${params.toString()}`;
        }
    });
    
    nameInput.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('invalid');
            nameError.style.display = 'none';
        }
    });
    
    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(this.value)) {
            this.classList.remove('invalid');
            emailError.style.display = 'none';
        }
    });
});
