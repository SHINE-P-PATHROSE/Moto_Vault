    // Menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const closeMenu = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const sideMenu = document.getElementById('sideMenu');

    function openMenu() {
        menuOverlay.classList.add('active');
        sideMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenuFunc() {
        menuOverlay.classList.remove('active');
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    menuOverlay.addEventListener('click', closeMenuFunc);

    // Menu item selection
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            closeMenuFunc();
        });
    });

    // Tab switching functionality
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        vehicleCards.forEach(card => {
            const name = card.querySelector('.vehicle-name').textContent.toLowerCase();
            const details = card.querySelector('.vehicle-details').textContent.toLowerCase();
            const vehicleId = card.querySelector('.vehicle-id').textContent.toLowerCase();

            if (name.includes(searchTerm) || details.includes(searchTerm) || vehicleId.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // FAB click handler
    document.querySelector('.fab').addEventListener('click', function() {
        alert('Add new vehicle functionality would be implemented here');
    });

    // Menu button handlers
    document.querySelectorAll('.menu-btn-card').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Vehicle options menu would appear here');
        });
    });

    // Action button handlers
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to remove this vehicle?')) {
                this.closest('.vehicle-card').style.animation = 'fadeOut 0.3s ease forwards';
                setTimeout(() => {
                    this.closest('.vehicle-card').remove();
                }, 300);
            }
        });
    });

    document.querySelectorAll('.btn-renew').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Renewal process would start here');
        });
    });

    // Add fade out animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: translateX(-100%);
            }
        }
    `;
    document.head.appendChild(style);

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenuFunc();
        }
    });