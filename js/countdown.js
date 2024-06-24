function countdown(targetDate) {
  const countdownDate = new Date(targetDate).getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "El evento ha comenzado";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    document.querySelector(".days-label").innerText =
      days === 1 ? "Día" : "Días";
    document.querySelector(".hours-label").innerText =
      hours === 1 ? "Hora" : "Horas";
    document.querySelector(".minutes-label").innerText =
      minutes === 1 ? "Minuto" : "Minutos";
    document.querySelector(".seconds-label").innerText =
      seconds === 1 ? "Segundo" : "Segundos";
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

countdown("2024-06-28T00:18:00");
