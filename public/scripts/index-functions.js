

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
  const tr = document.createElement("tr");
  CUTable.appendChild(tr);


  // Name
  const nameTd = document.createElement("td");
  nameTd.textContent = items[0].name;  
  tr.appendChild(nameTd);
  
}



