// Funny & sweet love messages from nervous Fayez to Yassmen Jesse
const loveMessages = [
  "Yassmen, you're not just amazing - you're my whole universe! 🌟💕 (حبيبة قلبي)",
  "Like the perfect spicy pizza, you set my heart on fire! 🔥🍕 (إنتِ نور عيني)",
  "Your laugh is the most beautiful music I've ever heard 🎵✨ (ضحكتك أحلى من كل حاجة)",
  "Every morning I wake up grateful that someone as incredible as you exists 💖 (الحمد لله عليكِ)",
  "You're like Dexter's precision - perfectly crafted! 🔬💕 (إنتِ كمال في كمال)",
  "Hot food, sweet music, perfect pizza... but nothing compares to YOU! 🌶️🎵🍕 (ولا حاجة تشبهك)",
  "Yassmen, you're my favorite everything! 💕 (إنتِ أهم حاجة في حياتي)",
  "Like a perfect Dexter episode, every moment with you is pure perfection! 📺✨ (كل لحظة معاكِ جنة)",
  "You make me want to be the best version of myself! 💪💖 (عشانك هبقى أحسن واحد)",
  "Pizza might be life, but YOU are my reason for living! 🍕❤️ (إنتِ سبب حياتي كلها)",
  "Your beauty leaves me speechless! 😍💕 (جمالك خلاني أتلم)",
  "Yassmen Jesse, you're absolutely EXTRAORDINARY! 🌟👑 (إنتِ ملكة وملكتي)",
];

// Pizza expressions for different moods
const pizzaExpressions = ["😍", "🥰", "💕", "✨", "💖", "❤️", "🤩", "❤️"];

// Funny & cute love quotes for the music player
const cuteQuotes = [
  '💕 "You are my today and all of my tomorrows" 💕 (إنتِ أمس وبكرة وكل أيامي)',
  '✨ "In your smile, I see something more beautiful than stars" ✨ (ابتسامتك أحلى من النجوم)',
  '🌙 "You\'re the reason I believe in love at first sight" 🌙 (إنتِ اللي خليتني أآمن بالحب)',
  '💖 "Every love song makes sense when I think of you" 💖 (كل أغنية حب بتذكرني بيكِ)',
  '🌸 "You\'re my favorite notification" 🌸 (إنتِ أحب رسالة في حياتي)',
  '💕 "I fall for you every single day" 💕 (بحبك أكتر كل يوم)',
  '⭐ "You\'re my happy place in this chaotic world" ⭐ (إنتِ سعادتي في الدنيا دي)',
  '💝 "Distance means nothing when someone means everything" 💝 (البعد مبيفرقش لما الواحد يبقى كل حاجة)',
  '🎵 "You\'re the melody my heart beats to" 🎵 (إنتِ اللحن اللي قلبي بيخبط عليه)',
  '💖 "حبك في قلبي زي الشمس في السما" 💖 (Your love in my heart like the sun in the sky)',
];

// Developer confessions for extra humor
const devConfessions = [
  "💻 Fun fact: I googled 'how to center a div' 14 times for this (والله العظيم)",
  "🤓 Plot twist: I watched 'CSS for Beginners' while making this (مش عيب)",
  "😅 Confession: I asked ChatGPT what colors go well together (اعتراف مؤلم)",
  "🔍 Real talk: I spent 2 hours figuring out why nothing was pink enough (يا حبيبتي)",
  "💡 Truth: I learned JavaScript exists because of you (عشانك بس)",
  "🎨 Secret: I have 47 browser tabs open with tutorials right now (ربنا يستر)",
];

// New features data
const memoryPhotos = [
  {
    title: "📸 Our Future Sweet Memories",
    description: "When we'll take photos together... (صور حلوة مع بعض)",
    emoji: "📷",
  },
  {
    title: "🍕 Our First Pizza Together",
    description: "It'll be the best pizza in the world (أحلى بيتزا في الدنيا)",
    emoji: "🍕",
  },
  {
    title: "🎵 When We Listen to Music Together",
    description:
      "Every song will be sweeter with you (كل أغنية هتبقى أحلى معاكِ)",
    emoji: "🎶",
  },
];

// Date functions for countdown
function getDaysSinceDate(startDate) {
  const now = new Date();
  const start = new Date(startDate);
  const diffTime = Math.abs(now - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// New game state
let gameActive = false;
let heartsCaught = 0;
let gameHearts = [];

// DOM elements
const pizza = document.getElementById("pizza");
const pizzaExpression = document.getElementById("pizzaExpression");
const messageText = document.getElementById("messageText");
const messageBubble = document.getElementById("messageBubble");
const musicToggle = document.getElementById("musicToggle");
const musicStatus = document.getElementById("musicStatus");

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);

/**
 * Initialize the application - SIMPLE VERSION
 */
function initializeApp() {
  setupEventListeners();
  setDailyMessage();
  setupMusicControl();
  addCuteAnimations();
  initializeLoveCountdown();
}

/**
 * Set up all event listeners - SIMPLE VERSION
 */
function setupEventListeners() {
  if (pizza) pizza.addEventListener("click", handlePizzaClick);
  if (musicToggle) musicToggle.addEventListener("click", openMusicPlayer);
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
    "Yassmen, my beautiful queen! 👑 Fayez spent 3 days on Stack Overflow to make this work... please be impressed! 😅 (أرجوكِ اتبهري)"
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
 * Initialize love countdown display
 */
function initializeLoveCountdown() {
  // This would show days since you started liking her
  // You can update this date to something meaningful
  const startDate = "2024-01-01"; // Update this!
  const days = getDaysSinceDate(startDate);

  // Add countdown to the love meter section
  const loveMeter = document.querySelector(".love-meter");
  if (loveMeter && days > 0) {
    const countdownDiv = document.createElement("div");
    countdownDiv.className = "love-countdown";
    countdownDiv.innerHTML = `
      <div class="countdown-label">⏰ Days of Fayez loving Yassmen: ${days} days ⏰</div>
      <div class="countdown-note">And the love grows stronger every day! (وكل يوم بحبك أكتر) 💕</div>
    `;
    loveMeter.appendChild(countdownDiv);
  }
}

/**
 * Show photo memories section
 */
function showPhotoMemories() {
  const mainContent = document.querySelector(".main-content");
  const container = document.querySelector(".container");

  if (mainContent && container) {
    mainContent.style.display = "none";

    const memoryContent = createMemoryContent();
    container.appendChild(memoryContent);
  }
}

/**
 * Create photo memories content
 */
function createMemoryContent() {
  const memoryDiv = document.createElement("div");
  memoryDiv.id = "memoryContent";
  memoryDiv.className = "memory-content";

  memoryDiv.innerHTML = `
    <div class="memory-header">
      <button class="back-btn" onclick="closeMemoryGallery()">← Back</button>
      <h2>📸 Our Sweet Future Memories 📸</h2>
      <p class="memory-dedication">"Can't wait to make beautiful memories together! (مستني أعمل ذكريات حلوة معاكِ) 💕"</p>
    </div>
    
    <div class="memory-grid">
      ${memoryPhotos
        .map(
          (photo, index) => `
        <div class="memory-card" onclick="showMemoryDetail(${index})">
          <div class="memory-emoji">${photo.emoji}</div>
          <h3>${photo.title}</h3>
          <p>${photo.description}</p>
        </div>
      `
        )
        .join("")}
    </div>
    
    <div class="memory-game-section">
      <h3>🎮 Heart Catching Game (لعبة جمع القلوب) 🎮</h3>
      <p>Click on the flying hearts! (امسكي القلوب اللي بتطير)</p>
      <button class="game-btn" onclick="startHeartGame()">Start Game ❤️</button>
      <div class="game-score">💖 Hearts Caught: <span id="heartScore">0</span></div>
    </div>
  `;

  return memoryDiv;
}

/**
 * Close memory gallery
 */
function closeMemoryGallery() {
  const mainContent = document.querySelector(".main-content");
  const memoryContent = document.getElementById("memoryContent");

  if (mainContent && memoryContent) {
    mainContent.style.display = "block";
    memoryContent.remove();
  }
}

/**
 * Show memory detail
 */
function showMemoryDetail(index) {
  const photo = memoryPhotos[index];
  const detailMessages = [
    "📸 We'll take so many beautiful photos together, and each one will tell a love story! (كل صورة هتحكي حكاية حب)",
    "🍕 Our first pizza together will be the best in the world, because we'll be eating it together! (أحلى بيتزا عشان هناكلها مع بعض)",
    "🎵 When we listen to music together, every song will be sweeter, and every melody will speak of our love! (كل لحن هيحكي عن حبنا)",
  ];

  updateMessageText(detailMessages[index]);
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
 * Show music player by replacing main content (single page, no overlay!)
 */
function openMusicPlayer() {
  // Hide main content and show music content
  const mainContent = document.querySelector(".main-content");
  const container = document.querySelector(".container");

  if (mainContent && container) {
    mainContent.style.display = "none";

    // Create music content directly in the page
    const musicContent = createMusicContent();
    container.appendChild(musicContent);
  }
}

/**
 * Create music content that replaces main content
 */
function createMusicContent() {
  const musicDiv = document.createElement("div");
  musicDiv.id = "musicContent";
  musicDiv.className = "music-content";

  musicDiv.innerHTML = `
    <div class="music-header">
      <button class="back-btn" onclick="closeMusicPlayer()">← Back</button>
      <h2>🎵 Fayez's Heart Songs for Yassmen 🎵</h2>
      <p class="playlist-dedication">"I googled 'how to embed Spotify' for you! (عملت ده عشانك بس) 💕"</p>
    </div>
    
    <div class="spotify-section">
      <h3>🎧 Our Love Playlist (بلايليست الحب بتاعنا) 🎧</h3>
      <iframe class="spotify-player"
        src="https://open.spotify.com/embed/playlist/4EglqFy0j4G3CoidPAFBzr?utm_source=generator&theme=0"
        width="100%" height="380" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe>
      <p class="cute-note">👆 If this doesn't work, I'll just sing to you instead! (هغنيلك بنفسي) 😅</p>
    </div>
    
    <div class="quote-section">
      <div class="quote-bubble">
        <p class="cute-quote" id="musicPageQuote">💕 "You are my today and all of my tomorrows" 💕</p>
      </div>
      <button class="new-quote-btn" onclick="showMusicQuote()">✨ New Sweet Quote ✨</button>
    </div>
    
    <div class="romantic-message">
      <p>💕 "Yassmen, I don't know what songs you like yet, but I tried to pick the sweetest ones. You're my favorite song on repeat. (إنتِ أحب أغنية في حياتي)"</p>
      <small>- Forever yours, Fayez (who definitely didn't panic while coding this) 💕</small>
    </div>
  `;

  return musicDiv;
}

/**
 * Close music player and go back to main content
 */
function closeMusicPlayer() {
  const mainContent = document.querySelector(".main-content");
  const musicContent = document.getElementById("musicContent");

  if (mainContent && musicContent) {
    mainContent.style.display = "block";
    musicContent.remove();
  }
}

/**
 * Show new quote in music page
 */
function showMusicQuote() {
  const randomIndex = Math.floor(Math.random() * cuteQuotes.length);
  const newQuote = cuteQuotes[randomIndex];
  const quoteElement = document.getElementById("musicPageQuote");

  if (quoteElement) {
    quoteElement.style.opacity = "0";
    setTimeout(() => {
      quoteElement.textContent = newQuote;
      quoteElement.style.opacity = "1";
    }, 200);
  }
}

// Music player modal removed - now opens in new tab!

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

/**
 * Start heart catching game
 */
function startHeartGame() {
  if (gameActive) return;

  gameActive = true;
  heartsCaught = 0;
  updateHeartScore();

  // Create hearts for 10 seconds
  const gameInterval = setInterval(() => {
    createGameHeart();
  }, 800);

  // End game after 10 seconds
  setTimeout(() => {
    clearInterval(gameInterval);
    endHeartGame();
  }, 10000);

  // Update button
  const gameBtn = document.querySelector(".game-btn");
  if (gameBtn) {
    gameBtn.textContent = "Game Active! Catch the hearts! (امسكي القلوب) 💕";
    gameBtn.disabled = true;
  }
}

/**
 * Create a game heart
 */
function createGameHeart() {
  const heart = document.createElement("div");
  heart.textContent = ["💕", "❤️", "💖", "💗", "💝"][
    Math.floor(Math.random() * 5)
  ];
  heart.className = "game-heart";
  heart.style.cssText = `
    position: fixed;
    left: ${Math.random() * (window.innerWidth - 50)}px;
    top: -50px;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1000;
    animation: fallDown 3s linear forwards;
    pointer-events: all;
  `;

  heart.addEventListener("click", catchHeart);
  document.body.appendChild(heart);
  gameHearts.push(heart);

  // Remove heart after animation
  setTimeout(() => {
    if (heart.parentNode) {
      heart.remove();
    }
  }, 3000);
}

/**
 * Catch a heart
 */
function catchHeart(event) {
  event.target.remove();
  heartsCaught++;
  updateHeartScore();

  // Show cute message
  if (heartsCaught % 5 === 0) {
    showGameMessage(
      `Amazing! ${heartsCaught} hearts! Fayez is so happy! (فايز فرحان قوي) 🥰`
    );
  }
}

/**
 * Update heart score
 */
function updateHeartScore() {
  const scoreElement = document.getElementById("heartScore");
  if (scoreElement) {
    scoreElement.textContent = heartsCaught;
  }
}

/**
 * End heart game
 */
function endHeartGame() {
  gameActive = false;

  // Remove remaining hearts
  gameHearts.forEach((heart) => {
    if (heart.parentNode) {
      heart.remove();
    }
  });
  gameHearts = [];

  // Update button
  const gameBtn = document.querySelector(".game-btn");
  if (gameBtn) {
    gameBtn.textContent = "Play Again! ❤️";
    gameBtn.disabled = false;
  }

  // Show final score
  const messages = [
    `Amazing! You caught ${heartsCaught} hearts! (رائع جداً) 💕`,
    `Fayez is so happy! You caught ${heartsCaught} hearts! (فايز فرحان قوي) 😍`,
    `Incredible score! ${heartsCaught} hearts! You're the queen of hearts! (إنتِ ملكة القلوب) 👑💕`,
  ];

  showGameMessage(messages[Math.floor(Math.random() * messages.length)]);
}

/**
 * Show game message
 */
function showGameMessage(message) {
  const gameMessage = document.createElement("div");
  gameMessage.className = "game-message";
  gameMessage.textContent = message;
  gameMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    z-index: 1001;
    animation: bounceIn 0.6s ease-out;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  `;

  document.body.appendChild(gameMessage);

  setTimeout(() => {
    gameMessage.style.animation = "fadeOut 0.5s ease-out";
    setTimeout(() => {
      gameMessage.remove();
    }, 500);
  }, 2000);
}

// Add CSS animations for the new features
const newAnimationStyles = document.createElement("style");
newAnimationStyles.textContent = `
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
    @keyframes fallDown {
    from {
      transform: translateY(-50px) rotate(0deg);
      opacity: 1;
    }
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0.7;
    }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  .love-countdown {
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 1rem;
    border: 2px solid #ff69b4;
  }
  
  .countdown-label {
    font-size: 1rem;
    font-weight: 600;
    color: #d63384;
    margin-bottom: 0.5rem;
  }
  
  .countdown-note {
    font-size: 0.9rem;
    color: #6c757d;
    font-style: italic;
  }
  
  .memory-content {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    color: white;
    direction: rtl;
  }
  
  .memory-header {
    text-align: center;
    padding: 1rem 0 2rem 0;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 2rem;
  }
  
  .memory-header h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #ff69b4;
  }
  
  .memory-dedication {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
    margin: 0;
  }
  
  .memory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .memory-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid rgba(255, 105, 180, 0.3);
    backdrop-filter: blur(10px);
  }
  
  .memory-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 105, 180, 0.2);
    border-color: #ff69b4;
  }
  
  .memory-emoji {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .memory-card h3 {
    color: #ff69b4;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .memory-card p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .memory-game-section {
    background: rgba(255, 105, 180, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
    border: 2px solid rgba(255, 105, 180, 0.3);
  }
  
  .memory-game-section h3 {
    color: #ff69b4;
    margin-bottom: 1rem;
  }
  
  .game-btn {
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin: 1rem 0;
    transition: all 0.3s ease;
  }
  
  .game-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);
  }
  
  .game-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .game-score {
    font-size: 1.2rem;
    font-weight: 600;
    color: #ff69b4;
    margin-top: 1rem;
  }
  
  .game-heart {
    animation: fallDown 3s linear forwards;
  }
  
  .game-message {
    font-family: 'Quicksand', sans-serif;
  }
  
  @media (max-width: 768px) {
    .memory-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .memory-card {
      padding: 1rem;
    }
    
    .memory-emoji {
      font-size: 2.5rem;
    }
    
    .memory-game-section {
      padding: 1.5rem;
    }
    
    .game-btn {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;
document.head.appendChild(newAnimationStyles);

// Add photo memories button to footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  if (footer) {
    const memoryBtn = document.createElement("button");
    memoryBtn.className = "music-toggle";
    memoryBtn.style.marginTop = "0.5rem";
    memoryBtn.innerHTML = "📸 Our Sweet Memories";
    memoryBtn.onclick = showPhotoMemories;

    const musicToggle = footer.querySelector(".music-toggle");
    if (musicToggle) {
      footer.insertBefore(memoryBtn, musicToggle.nextSibling);
    }
  }
});

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
      "You found the secret! 💖 Fayez's love for you is INFINITE (حبي ليكِ مالوش آخر) You're his everything! 🌟👑"
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
