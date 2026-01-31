

window.onload = async function () {

  // Initial display of the full list
  let fetchedData = await fetch('/fetch-CU', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: "" })
  })

  let jsonData = await fetchedData.json();

  displayCUList(jsonData.data);

};


// Function to display the list of CU items
function displayCUList(items) {
  const CUTable = document.getElementById("CU-table");
  CUTable.innerHTML = "";

  items.forEach(item => {
    const tr = document.createElement("tr");

    // Name
    const nameTd = document.createElement("td");
    nameTd.textContent = item.name;

    // Abbreviation
    const abbrevTd = document.createElement("td");
    abbrevTd.textContent = item.abbreviation ?? "-";

    // Campus
    const campusTd = document.createElement("td");
    campusTd.textContent = item.campus ?? "-";


    tr.appendChild(nameTd);
    tr.appendChild(abbrevTd);
    tr.appendChild(campusTd);

    if (item.full_name) {
      tr.title = item.full_name;
    }

    CUTable.appendChild(tr);

  });
}



