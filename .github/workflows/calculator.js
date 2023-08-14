document.getElementById('paperType').addEventListener('change', function() {
    // Hide all input sections
    document.getElementById('standardSheets').style.display = 'none';
    document.getElementById('customSheets').style.display = 'none';
    document.getElementById('standardReams').style.display = 'none';
    document.getElementById('paperRolls').style.display = 'none';

    // Show the selected input section
    var selectedType = this.value;
    if (selectedType) {
        document.getElementById(selectedType).style.display = 'block';
    }
});

// Event listener for the "Calculate" button
document.getElementById('calculateButton').addEventListener('click', function() {
    // Get the selected paper type
    var paperType = document.getElementById('paperType').value;

    // Perform calculations based on the selected paper type
    switch (paperType) {
        case 'standardSheets':
            var standardSheetFormat = document.getElementById('standardSheetFormat').value;
            var standardSheetQuantity = document.getElementById('standardSheetQuantity').value;
            var standardSheetPrice = document.getElementById('standardSheetPrice').value;

            // Calculate the area for the selected sheet size (e.g., A1)
            var sheetArea = calculateSheetArea(standardSheetFormat);

            // Calculate total area and total cost
            var totalArea = sheetArea * standardSheetQuantity;
            var totalCost = standardSheetPrice * standardSheetQuantity;

            // Display the results
            alert('Total Area: ' + totalArea + ', Total Cost: ' + totalCost);
            break;

        // Other cases for different paper types will go here
    }
});

// Function to calculate sheet area based on the selected size
function calculateSheetArea(format) {
    // Example: predefined dimensions for A1 size
    if (format === 'A1') return 594 * 841;
    // Add other sizes (A2, A3, etc.) here
}
