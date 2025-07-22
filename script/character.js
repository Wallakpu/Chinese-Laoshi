// Character data will be loaded from JSON files
let currentLevel = 1;

async function loadCharacterData(level) {
  try {
    const response = await fetch(`../json/hsk${level}.json`);
    if (!response.ok) throw new Error("Failed to load character data");
    return await response.json();
  } catch (err) {
    console.error("Error loading data:", err);
    return [];
  }
}

function renderCharacters(characters) {
  const grid = document.getElementById("charactersGrid");
  grid.innerHTML = characters.map(char => `
    <div class="character-card">
      <div class="character">${char.character}</div>
      <div class="pinyin">${char.pinyin}</div>
      <div class="meaning">${char.meaning}</div>
    </div>
  `).join('');
}

function setActiveLevel(level) {
  document.querySelectorAll('.hsk-level').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-level="${level}"]`).classList.add('active');
  currentLevel = level;
  loadCharacterData(level).then(renderCharacters);
}

document.addEventListener('DOMContentLoaded', function() {
  const isPremium = localStorage.getItem("isPremiumUser") === "true";

  document.querySelectorAll('.hsk-level').forEach(button => {
    button.addEventListener('click', () => {
      const level = parseInt(button.dataset.level);

      if (level >= 4 && !isPremium) {
        alert('This level requires premium membership. Please upgrade to access HSK 4-6 content.');
        return;
      }

      setActiveLevel(level);
    });
  });

  // Load HSK 1 by default
  loadCharacterData(1).then(renderCharacters);

  // Card interaction
  document.addEventListener('click', (e) => {
    if (e.target.closest('.character-card')) {
      const card = e.target.closest('.character-card');
      const character = card.querySelector('.character').textContent;
      const pinyin = card.querySelector('.pinyin').textContent;
      const meaning = card.querySelector('.meaning').textContent;
      console.log(`Character: ${character}, Pinyin: ${pinyin}, Meaning: ${meaning}`);

      speakChinese(character);

      // Feedback animation
      card.style.transform = 'scale(0.95)';
      setTimeout(() => { card.style.transform = ''; }, 150);
    }
  });

  // Speak the Chinese character
  function speakChinese(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.5;
    speechSynthesis.speak(utterance);
  }
});