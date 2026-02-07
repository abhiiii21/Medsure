function searchMedicine() {
    console.log("Search button pressed");  // 👈 TEST LINE

    let name = document.getElementById("medicineInput").value;

    fetch(`/search?medicine=${name}`)
    .then(res => res.json())
    .then(data => {
        console.log("Server response:", data);  // 👈 TEST LINE

        if (data.message) {
            document.getElementById("resultBox").innerHTML =
                `<p style="color:red;">${data.message}</p>`;
            return;
        }

        document.getElementById("resultBox").innerHTML = `
            <p><b>Composition:</b> ${data.composition}</p>
            <p><b>Alternatives:</b> ${data.alternatives.join(", ")}</p>
            <p><b>Price:</b> ${data.priceRange}</p>
        `;
    })
    .catch(err => console.error("ERROR:", err));
}

