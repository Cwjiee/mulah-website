document.addEventListener('DOMContentLoaded', function() {
    const phoneDisplay = document.getElementById('phoneDisplay');
    const nameDisplay = document.getElementById('nameDisplay');
    const birthdayDisplay = document.getElementById('birthdayDisplay');
    const emailDisplay = document.getElementById('emailDisplay');
    
    function loadUserData() {
        const urlParams = new URLSearchParams(window.location.search);
        
        const phone = urlParams.get('phone');
        const name = urlParams.get('name');
        const birthday = urlParams.get('birthday');
        const email = urlParams.get('email');
        
        if (phone && name && birthday) {
            phoneDisplay.textContent = `+60 ${phone}`;
            
            nameDisplay.textContent = name;
            birthdayDisplay.textContent = birthday;
            emailDisplay.textContent = email || 'No email provided';
        } else {
            phoneDisplay.textContent = 'No data found';
            nameDisplay.textContent = 'No data found';
            birthdayDisplay.textContent = 'No data found';
            emailDisplay.textContent = 'No data found';
        }
    }
    
    loadUserData();
});
