 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        const submitBtn = document.getElementById('submitBtn');
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (!nameInput.value.trim() || !phoneInput.value.trim()) {
                alert('Пожалуйста, заполните имя и телефон');
                return;
            }
            alert('Спасибо! Менеджер свяжется с вами в ближайшее время.');
            document.getElementById('leadForm').reset();
        });