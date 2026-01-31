

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

function addSocialLinks(item, linksTd) {
    if (item.url) {
      const urlLink = document.createElement("a");
      urlLink.href = item.url;
      urlLink.target = "_blank";
      urlLink.rel = "noopener noreferrer";
      urlLink.title = "Open link";
      urlLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i>`;
      linksTd.appendChild(urlLink);
    }

    if (item.website) {
      const websiteLink = document.createElement("a");
      websiteLink.href = item.website;
      websiteLink.target = "_blank";
      websiteLink.rel = "noopener noreferrer";
      websiteLink.title = "Visit website";
      websiteLink.innerHTML = `<i class="fa-solid fa-globe"></i>`;
      linksTd.appendChild(websiteLink);
    }

    if (item.facebook) {
      const fb = document.createElement("a");
      fb.href = item.facebook;
      fb.target = "_blank";
      fb.rel = "noopener noreferrer";
      fb.title = "Facebook";
      fb.innerHTML = `<i class="fa-brands fa-facebook"></i>`;
      linksTd.appendChild(fb);
    }

    if (item.twitter) {
      const tw = document.createElement("a");
      tw.href = item.twitter;
      tw.target = "_blank";
      tw.rel = "noopener noreferrer";
      tw.title = "Twitter / X";
      tw.innerHTML = `<i class="fa-brands fa-x-twitter"></i>`;
      linksTd.appendChild(tw);
    }

    if (item.instagram) {
      const ig = document.createElement("a");
      ig.href = item.instagram;
      ig.target = "_blank";
      ig.rel = "noopener noreferrer";
      ig.title = "Instagram";
      ig.innerHTML = `<i class="fa-brands fa-instagram"></i>`;
      linksTd.appendChild(ig);
    }
  
}


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

    // Links
    const linksTd = document.createElement("td");
    linksTd.className = "links-cell";

    addSocialLinks(item, linksTd);

    tr.appendChild(nameTd);
    tr.appendChild(abbrevTd);
    tr.appendChild(campusTd);
    tr.appendChild(linksTd);

    if (item.full_name) {
      tr.title = item.full_name;
    }

    // Institutions
    if (item.institutions && item.institutions.length > 0) {
      // Put the first institution inline
      const firstInst = item.institutions[0];

      const nameTdInst = document.createElement("td");
      nameTdInst.textContent = firstInst.name;

      const postcodeTd = document.createElement("td");
      postcodeTd.textContent = firstInst.postcode;
      postcodeTd.title = `Geocode: ${firstInst.geocode}`;

      const regionTd = document.createElement("td");
      regionTd.textContent = firstInst.region?.name || "N/A";

      tr.appendChild(nameTdInst);
      tr.appendChild(postcodeTd);
      tr.appendChild(regionTd);

      CUTable.appendChild(tr);

      // Remaining institutions to nested rows
      item.institutions.slice(1).forEach(inst => {
        const instTr = document.createElement("tr");
        instTr.className = "nested-row";

        // Empty cells for CU columns
        for (let i = 0; i < 4; i++) {
          const emptyTd = document.createElement("td");
          instTr.appendChild(emptyTd);
        }

        const nameTdInst = document.createElement("td");
        nameTdInst.textContent = inst.name;

        const postcodeTd = document.createElement("td");
        postcodeTd.textContent = inst.postcode;
        postcodeTd.title = `Geocode: ${inst.geocode}`;

        const regionTd = document.createElement("td");
        regionTd.textContent = inst.region?.name || "N/A";

        instTr.appendChild(nameTdInst);
        instTr.appendChild(postcodeTd);
        instTr.appendChild(regionTd);

        CUTable.appendChild(instTr);
      });
    } else {
      // No institutions so fill blank cells
      const blankTd = document.createElement("td");
      blankTd.colSpan = 3;
      tr.appendChild(blankTd);
      CUTable.appendChild(tr);
    }

  });
}



