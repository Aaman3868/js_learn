const form = document.querySelector('#bmiForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height in cm.";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight in kg.";
        return;
    }

    // Convert height to meters before applying formula
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    result.innerHTML = `<span>Your BMI is: <strong>${bmi}</strong></span>`;
});
