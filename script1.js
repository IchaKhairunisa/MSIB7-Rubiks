document.addEventListener('DOMContentLoaded', function() {
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        window.history.back();
    });

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Edit Profile Button
    const editProfileBtn = document.querySelector('.btn-primary');
    editProfileBtn.addEventListener('click', () => {
        alert('Edit Profile clicked!');
        // Tambahkan logika edit profil
    });

    // Share Profile Button
    const shareProfileBtn = document.querySelector('.btn-outline');
    shareProfileBtn.addEventListener('click', () => {
        alert('Share Profile clicked!');
        // Tambahkan logika share profil
    });
});
