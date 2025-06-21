function createTable() {
  // Prompt for number of rows
  const rn = parseInt(prompt("Input number of rows"));
  // Prompt for number of columns
  const cn = parseInt(prompt("Input number of columns"));

  // Input validation
  if (isNaN(rn) || isNaN(cn)) return; // Ignore non-numeric input
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear any existing content in the table
  table.innerHTML = "";

  // Create the table dynamically
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
