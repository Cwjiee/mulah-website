document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const checkIcon = document.getElementById('checkIcon');
    const checkButton = document.getElementById('checkButton');
    
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        
        if (this.value === '17352725') {
            checkIcon.classList.add('active');
            checkIcon.querySelector('svg').setAttribute('stroke', '#4CAF50');
        } else {
            checkIcon.classList.remove('active');
            checkIcon.querySelector('svg').setAttribute('stroke', '#AAAAAA');
        }
    });
    
    checkButton.addEventListener('click', function() {
        const phoneNumber = phoneInput.value;
        
        if (phoneNumber === '17352725') {
            window.location.href = 'registration.html';
        } else {
            alert('Invalid phone number. Please enter the correct number.');
        }
    });
});
