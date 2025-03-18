document.querySelectorAll(".flip-button").forEach(button => {
    button.addEventListener("click", function() {
        let card = this.closest(".flip-card");
        card.classList.toggle("flipped");
    });
});

//Applying Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (!name || !email || !message) {
        alert("Please fill out all the required fields");
        return;
    }
    alert("Form submitted successfully!");
});

//Riddle Challenge (Swahili riddle)
document.addEventListener("DOMContentLoaded", () => {
    const riddleSection = document.createElement("section");
    riddleSection.innerHTML = `
        <h2>Riddle Challenge (Swahili)</h2>
        <p>Nyumba yangu haina mlango</p>
        <input type="text" id="riddle-answer" placeholder="Jibu">
        <button id="check-answer">Angalia jibu</button>
        <p id="riddle-result"></p>
    `;
    
    const footer = document.querySelector("footer");

    //Inserting the riddle section before the footer for better visuals
    footer.insertAdjacentElement('beforebegin', riddleSection);

    document.getElementById("check-answer").addEventListener("click", () => {
        let answer = document.getElementById("riddle-answer").value.toLowerCase().trim();
        let result = document.getElementById("riddle-result");
        if (answer === "yai") {
            result.textContent = "Hongera, jibu sahihi!";
        } else {
            result.textContent = "Umekosea. Tafadhali jaribu tena!";
        }
    });
});
