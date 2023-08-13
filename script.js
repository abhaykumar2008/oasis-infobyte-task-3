function convertTemperature() {
    // Get user input
    const inputTemp = parseFloat(document.getElementById("temperature").value);
    if (isNaN(inputTemp)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    // Get selected unit
    const unit = document.getElementById("unit").value;

    // Convert the temperature
    let convertedTemp;
    let convertedUnit;
    switch (unit) {
        case "celsius":
            convertedTemp = inputTemp;
            convertedUnit = "Celsius";
            break;
        case "fahrenheit":
            convertedTemp = (inputTemp - 32) * 5 / 9;
            convertedUnit = "Celsius";
            break;
        case "kelvin":
            convertedTemp = inputTemp - 273.15;
            convertedUnit = "Celsius";
            break;
    }

    // Display the result
    document.getElementById("result").innerText = `Converted temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}
