const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {

    formMessage.textContent = "Please fill in all fields.";
    return;

}

if (!email.includes("@")) {

    formMessage.textContent = "Please enter a valid email address.";
    return;

}

    // Your KAKA WhatsApp number
    const phoneNumber = "2348109389775";

    // Create the WhatsApp message
    const whatsappMessage =
        `Hello KAKA!

Name: ${name}
Email: ${email}

Message:
${message}`;

    // Create WhatsApp URL
    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});