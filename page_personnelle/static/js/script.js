document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const oldMessage = document.getElementById("message");
    if (oldMessage) oldMessage.remove();

    const message = document.createElement("p");
    message.id = "message";
    message.textContent = "Message envoyé ✅";
    message.style.marginTop = "10px";
    this.appendChild(message);

    this.reset();
  });
});