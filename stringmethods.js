function processName(name) {
    // Convert the name to uppercase
    var upperCaseName = name.toUpperCase();
    // Find the number of characters in the name
    var nameLength = name.length;
    var TrimmedName = name.trim(); // Remove leading and trailing spaces
    var ReplacedName = name.replace("Tummala ", " Reddy "); // Replace "Divya" with "Tummala"
    console.log("Name in uppercase:", upperCaseName);
    console.log("Number of characters in the name:", nameLength);
    console.log("Trimmed Name:", TrimmedName.length);
    console.log("Replaced Name:", ReplacedName);
}
processName(" Divya Tummala ");
