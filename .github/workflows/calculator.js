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
