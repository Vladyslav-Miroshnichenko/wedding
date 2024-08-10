// Встановлюємо дату, до якої буде зворотний відлік
const targetDate = new Date("2024-10-08T16:00:00").getTime();

// Функція для оновлення таймера кожну секунду
const countdown = setInterval(() => {
  const now = new Date().getTime(); // Поточний час
  const timeLeft = targetDate - now; // Різниця між цільовою датою і теперішнім часом

  // Обчислення часу для днів, годин, хвилин і секунд
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  // Відображення результату
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;

  // Якщо відлік закінчився, зупиняємо таймер і відображаємо повідомлення
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Відлік завершено!";
  }
}, 1000); // Оновлення кожну секунду (1000 мс)
