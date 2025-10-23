document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (!validateForm(form)) {
        showFormStatus('Please fill in all fields correctly.', 'error');
        return;
    }

    const formData = new FormData(form);

    try {
        showFormStatus('Sending message...', 'info');

        // Send using Formspree
        const response = await fetch('https://formspree.io/f/mqayvrjr', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showFormStatus('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
        } else {
            showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
        }
    } catch (err) {
        console.error(err);
        showFormStatus('Error sending message. Please try again later.', 'error');
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) isValid = false;
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    if (!value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    if (!isValid) showFieldError(field, errorMessage);
    else clearFieldError(field);

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);

    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc2626';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;

    field.parentElement.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentElement.querySelector('.field-error');
    if (errorDiv) errorDiv.remove();
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    if (!statusDiv) return;

    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
    statusDiv.style.display = 'block';

    if (type === 'success') {
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }
}
