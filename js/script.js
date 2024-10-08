const targetDate = new Date("2024-10-08T16:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Поздравляем!";
  }
}, 1000);

(function () {
  emailjs.init({
    publicKey: "ZEh4gCQsQVpg4KFU9",
  });
})();
document
  .getElementById("form-label")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      attendance: document.querySelector('input[name="attendance"]:checked')
        .value,
      name: document.querySelector('input[name="name"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      message: document.querySelector('input[name="message"]').value,
    };
    console.log(templateParams);

    emailjs.send("service_gxzwm8v", "template_pi91w2t", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Спасибо за ответ");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Ошибка при отправки сообщения");
      }
    );
  });
