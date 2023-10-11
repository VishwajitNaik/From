const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");
const tbody = userTable.querySelector("tbody");
const sortByNameButton = document.getElementById("sortByName");
const userData = [];

// Form submission
userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  userData.push({ firstName, lastName, phoneNumber });

  addUserToTable({ firstName, lastName, phoneNumber });

  // Clear the form
  userForm.reset();
});

// Add user data to the table
function addUserToTable(user) {
  const row = document.createElement("tr");
  for (const key of ["firstName", "lastName", "phoneNumber"]) {
    const cell = document.createElement("td");
    cell.textContent = user[key];
    row.appendChild(cell);
  }
  tbody.appendChild(row);
}

// Sort the table by name when the "Sort" button is clicked
sortByNameButton.addEventListener("click", () => {
  userData.sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`;
    const nameB = `${b.firstName} ${b.lastName}`;
    return nameA.localeCompare(nameB);
  });
  updateTable();
});

// Function to update the table with sorted data
function updateTable() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  userData.forEach(addUserToTable);
}
