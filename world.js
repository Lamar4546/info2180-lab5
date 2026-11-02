window.onload = function () {
    const lookupBtn = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");

    lookupBtn.addEventListener("click", function () {
        const country = document.getElementById("country").value;  // input box

        // Build the request URL
        let url = "world.php";
        if (country.trim() !== "") {
            url += "?country=" + encodeURIComponent(country);
        }

        // Fetch data with AJAX
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;  // show the result
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.innerHTML = "An error occurred while fetching data.";
            });
    });
};
