function convertWeightToPounds(name, weightKg) {
  // Convert weight from kilograms to pounds (1 kg = 2.20462 pounds)
  const weightPounds = weightKg * 2.20462;

  // Create a message string
  const message = `${name}, your weight is approximately ${weightPounds.toFixed(2)} pounds.`;

  // Display the message using the alert method
  alert(message);
}

// Prompt the user for their name and weight in kilograms
const userName = prompt("Please enter your name:");
const weightKg = parseFloat(prompt("Please enter your weight in kilograms:"));

// Call the function with the provided values
convertWeightToPounds(userName, weightKg);
