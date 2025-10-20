function answerQuiz(choice) {
  const resultDiv = document.getElementById('result');
  if (choice === 'kiss') {
    resultDiv.textContent = "Correct (+ let’s forget sneaking, just get in my arms 💋)";
    showConfetti();
  } else if (choice === 'cuddle') {
    resultDiv.textContent = "Cuddle + gossip: Okay, you win. But don’t blame me for what happens next 😌";
    showConfetti();
  } else {
    resultDiv.textContent = "Only after I’ve kissed you first 😏";
  }
}

function showDare() {
  const dares = [
    "Send me your cutest selfie, right now!",
    "Text me something spicy you’ve never said 😉",
    "Tell me the boldest thing you want me to do next time we meet.",
    "Admit something naughty you’ve thought about me.",
    "Call me and say 'I miss you' — no excuses!",
    "Confess: Who’s more obsessed, you or me?"
  ];
  const dareResult = document.getElementById('dare-result');
  const randomDare = dares[Math.floor(Math.random() * dares.length)];
  dareResult.textContent = randomDare;
  showConfetti();
}

function showConfetti() {
  for (let i = 0; i < 24; i++) {
    let confetti = document.createElement('div');
    confetti.innerText = "💗";
    confetti.style.position = 'fixed';
    confetti.style.left = (Math.random()*100) + "vw";
    confetti.style.top = '-40px';
    confetti.style.fontSize = "2rem";
    confetti.style.userSelect = "none";
    confetti.style.zIndex = "9999";
    confetti.style.transition = "transform 2s, opacity 2s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random()*360}deg)`;
      confetti.style.opacity = 0;
      setTimeout(() => confetti.remove(), 2100);
    }, 100);
  }
}
