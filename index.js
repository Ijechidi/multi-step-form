const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const successMessage = document.getElementById('successMessage');

let currentStep = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            steps[currentStep].classList.add('completed');
            formSteps[currentStep].classList.remove('active');
            currentStep++;
            formSteps[currentStep].classList.add('active');
            steps[currentStep].classList.add('active');
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formSteps[currentStep].classList.remove('active');
        steps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
    });
});

document.getElementById('multiStepForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateStep(currentStep)) {
        steps[currentStep].classList.add('completed');
        formSteps[currentStep].classList.remove('active');
        successMessage.style.display = 'block';
    }
});

function validateStep(step) {
    const inputs = formSteps[step].querySelectorAll('input');
    for (let input of inputs) {
        if (!input.value) {
            input.classList.add('error');
            return false;
        }
    }
    return true;
}
