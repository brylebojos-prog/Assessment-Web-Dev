// Function to calculate petrol cost
function calculateTotal() {

    // Get values from inputs
    let cost = document.getElementById("cost").value;
    let litres = document.getElementById("litres").value;

    // Calculate total
    let total = cost * litres;

    // Display result
    document.getElementById("result").innerText = "Total: " + total.toFixed(2);
}