let birthYear = prompt("Enter your Birth Year (e.g., 2003), I will show your age:");

if (birthYear !== null) {
    birthYear = parseInt(birthYear);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    if (!isNaN(age) && age >= 0) {
        alert("Your age is: " + age + " years");
    } else {
        alert("Please enter a valid birth year!");
    }
} else {
    alert("No input provided!");
}