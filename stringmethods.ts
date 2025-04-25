function processName(name: string): void {

    // Convert the name to uppercase
    const upperCaseName = name.toUpperCase();
    
    // Find the number of characters in the name
    const nameLength = name.length;
    const TrimmedName = name.trim(); // Remove leading and trailing spaces
        const ReplacedName = name.replace("Tummala "," Reddy "); // Replace "Divya" with "Tummala"

        console.log("Name in uppercase:", upperCaseName);
        console.log("Number of characters in the name:", nameLength);
        console.log("Trimmed Name:", TrimmedName.length);
        console.log("Replaced Name:", ReplacedName);

    }

    processName(" Divya Tummala ");