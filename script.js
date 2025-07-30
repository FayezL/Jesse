// Funny & sweet love messages from nervous Fayez to Yassmen Jesse
const loveMessages = [
  "Yassmen, you're not just amazing - you're my whole universe! 🌟💕 (Did I mention I'm nervous?)",
  "Like the perfect spicy pizza, you set my heart on fire! 🔥🍕 (Hope this pizza emoji works...)",
  "Your laugh is the most beautiful music I've ever heard 🎵✨ (Better than my coding sounds)",
  "Every morning I wake up grateful that someone as incredible as you exists 💖 (And that this website still works)",
  "You're like Dexter's precision - perfectly crafted! 🔬💕 (Unlike my HTML... but we don't talk about that)",
  "Hot food, sweet music, perfect pizza... but nothing compares to YOU! 🌶️🎵🍕 (I googled romantic emojis for this)",
  "Yassmen, you're my favorite everything! 💕 (Including my favorite reason to learn coding)",
  "Like a perfect Dexter episode, every moment with you is pure perfection! 📺✨ (I binge-watched to understand this reference)",
  "You make me want to be the best version of myself! 💪💖 (Starting with better programming skills)",
  "Pizza might be life, but YOU are my reason for living! 🍕❤️ (This took me 3 tries to get right)",
  "Your beauty leaves me speechless! 😍💕 (Good thing I can type instead of talk)",
  "Yassmen Jesse, you're absolutely EXTRAORDINARY! 🌟👑 (I learned CSS just to make this sparkle)",
];

// Pizza expressions for different moods
const pizzaExpressions = ["😍", "🥰", "💕", "✨", "💖", "��", "🤩", "❤️"];

// Funny & cute love quotes for the music player
const cuteQuotes = [
  '💕 "You are my today and all of my tomorrows" 💕 (I copy-pasted this from Pinterest)',
  '✨ "In your smile, I see something more beautiful than stars" ✨ (And my code errors)',
  '🌙 "You\'re the reason I believe in love at first sight" 🌙 (And in Stack Overflow)',
  '💖 "Every love song makes sense when I think of you" 💖 (Even the ones in my broken Spotify code)',
  "🌸 \"You're my favorite notification\" 🌸 (Better than 'Error 404' messages)",
  '💕 "I fall for you every single day" 💕 (And for coding tutorials on YouTube)',
  '⭐ "You\'re my happy place in this chaotic world" ⭐ (Of HTML tags and CSS nightmares)',
  '💝 "Distance means nothing when someone means everything" 💝 (Neither do semicolons, apparently)',
  '🎵 "You\'re the melody my heart beats to" 🎵 (In JavaScript and in life)',
  '💖 "حبك في قلبي زي الشمس في السما" 💖 (Google Translate helped with this one)',
];

// Developer confessions for extra humor
const devConfessions = [
  "💻 Fun fact: I googled 'how to center a div' 14 times for this",
  "🤓 Plot twist: I watched 'CSS for Beginners' while making this",
  "😅 Confession: I asked ChatGPT what colors go well together",
  "🔍 Real talk: I spent 2 hours figuring out why nothing was pink enough",
  "💡 Truth: I learned JavaScript exists because of you",
  "🎨 Secret: I have 47 browser tabs open with tutorials right now",
];

// App state
let currentMessageIndex = 0;
let hasInteracted = false;

// DOM elements
const pizza = document.getElementById("pizza");
const pizzaExpression = document.getElementById("pizzaExpression");
const messageText = document.getElementById("messageText");
const messageBubble = document.getElementById("messageBubble");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");
const musicPlayer = document.getElementById("musicPlayer");
const closeMusicPlayer = document.getElementById("closeMusicPlayer");
const randomQuote = document.getElementById("randomQuote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);

/**
 * Initialize the application
 */
function initializeApp() {
  setupEventListeners();
  setDailyMessage();
  setupMusicControl();
  addCuteAnimations();
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
  pizza.addEventListener("click", handlePizzaClick);
  musicToggle.addEventListener("click", openMusicPlayer);
  closeMusicPlayer.addEventListener("click", closeMusicPlayerModal);
  newQuoteBtn.addEventListener("click", showNewQuote);
}

/**
 * Handle pizza click interaction
 */
function handlePizzaClick() {
  if (!hasInteracted) {
    hasInteracted = true;
    showWelcomeMessage();
  } else {
    showNextMessage();
  }

  animatePizzaClick();
  changePizzaExpression();
}

/**
 * Show welcome message on first interaction
 */
function showWelcomeMessage() {
  updateMessageText(
    "Yassmen, my beautiful queen! 👑 Fayez spent 3 days on Stack Overflow to make this work... please be impressed! 😅"
  );
  animateLoveMeter();

  setTimeout(() => {
    showNextMessage();
  }, 3000);
}

/**
 * Show the next love message
 */
function showNextMessage() {
  const message = loveMessages[currentMessageIndex];
  updateMessageText(message);

  currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
}

/**
 * Set message based on day of year for consistency
 */
function setDailyMessage() {
  const dayOfYear = getDayOfYear();
  currentMessageIndex = dayOfYear % loveMessages.length;
}

/**
 * Get current day of year (1-365/366)
 */
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Update message text with animation
 */
function updateMessageText(message) {
  messageBubble.classList.remove("new-message");

  setTimeout(() => {
    messageText.textContent = message;
    messageBubble.classList.add("new-message");
  }, 100);
}

/**
 * Animate pizza when clicked
 */
function animatePizzaClick() {
  pizza.classList.remove("clicked");

  setTimeout(() => {
    pizza.classList.add("clicked");
  }, 10);

  setTimeout(() => {
    pizza.classList.remove("clicked");
  }, 600);
}

/**
 * Change pizza expression randomly
 */
function changePizzaExpression() {
  const randomExpression = getRandomExpression();
  pizzaExpression.textContent = randomExpression;
}

/**
 * Get random pizza expression
 */
function getRandomExpression() {
  const randomIndex = Math.floor(Math.random() * pizzaExpressions.length);
  return pizzaExpressions[randomIndex];
}

/**
 * Animate the love meter
 */
function animateLoveMeter() {
  const loveMeter = document.getElementById("loveMeter");
  if (loveMeter) {
    loveMeter.style.animation = "loveGlow 2s ease-in-out infinite";
  }
}

/**
 * Create romantic floating hearts effect
 */
function createRomanticHearts() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.textContent = ["💕", "❤️", "💖", "💗", "💝"][i];
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = window.innerHeight + "px";
      heart.style.fontSize = "3rem";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "100";
      heart.style.animation = "romanticFloat 4s ease-out forwards";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, i * 200);
  }
}

/**
 * Setup music control functionality
 */
function setupMusicControl() {
  // Music player is always available since we use YouTube embeds
  musicToggle.style.display = "block";
}

/**
 * Open music player modal
 */
function openMusicPlayer() {
  musicPlayer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/**
 * Show a new random cute quote
 */
function showNewQuote() {
  const randomIndex = Math.floor(Math.random() * cuteQuotes.length);
  const newQuote = cuteQuotes[randomIndex];

  // Add a cute animation when changing quotes
  randomQuote.style.opacity = "0";
  setTimeout(() => {
    randomQuote.textContent = newQuote;
    randomQuote.style.opacity = "1";
  }, 200);

  // Add sparkle effect to the button
  newQuoteBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    newQuoteBtn.style.transform = "scale(1)";
  }, 150);
}

/**
 * Close music player modal (updated for Spotify)
 */
function closeMusicPlayerModal() {
  musicPlayer.classList.add("hidden");
  document.body.style.overflow = "auto";

  // Note: Spotify iframes handle their own playback
  // No need to manually stop like with YouTube
}

/**
 * Add cute animations throughout the app
 */
function addCuteAnimations() {
  // Animate mini hearts in footer
  const miniHearts = document.querySelectorAll(".mini-heart");
  miniHearts.forEach((heart, index) => {
    setTimeout(() => {
      heart.style.animation = "pulse 2s ease-in-out infinite";
    }, index * 300);
  });

  // Animate floating emojis in music player
  const floatingEmojis = document.querySelectorAll(".floating-emoji");
  floatingEmojis.forEach((emoji, index) => {
    setTimeout(() => {
      emoji.style.animation = "float 4s ease-in-out infinite";
    }, index * 500);
  });
}

/**
 * Create floating hearts effect (bonus feature)
 */
function createFloatingHearts() {
  const heart = document.createElement("div");
  heart.textContent = "💕";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = "2rem";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "100";
  heart.style.animation = "floatUp 3s ease-out forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

/**
 * Show random developer confession
 */
function showDevConfession() {
  const randomIndex = Math.floor(Math.random() * devConfessions.length);
  const confession = devConfessions[randomIndex];

  // Create a small confession popup
  const confessionDiv = document.createElement("div");
  confessionDiv.className = "dev-confession";
  confessionDiv.textContent = confession;
  confessionDiv.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 105, 180, 0.9);
    color: white;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    z-index: 1000;
    animation: slideInFromRight 0.5s ease-out;
    max-width: 250px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  `;

  document.body.appendChild(confessionDiv);

  // Remove after 4 seconds
  setTimeout(() => {
    confessionDiv.style.animation = "slideOutToRight 0.5s ease-out";
    setTimeout(() => {
      confessionDiv.remove();
    }, 500);
  }, 4000);
}

// Add floating hearts CSS animation
const style = document.createElement("style");
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add special interaction for multiple clicks
let clickCount = 0;
pizza.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    createRomanticHearts();
    updateMessageText(
      "You found the secret! 💖 Fayez's love for you is INFINITE (unlike his coding skills which are still loading...) You're his everything! 🌟👑"
    );
    clickCount = 0;
  }
});

// Show confession randomly when user interacts
pizza.addEventListener("click", () => {
  if (Math.random() < 0.3) {
    // 30% chance
    setTimeout(showDevConfession, 1000);
  }
});

// Auto-refresh message daily
setInterval(() => {
  if (!hasInteracted) {
    setDailyMessage();
  }
}, 24 * 60 * 60 * 1000); // 24 hours
