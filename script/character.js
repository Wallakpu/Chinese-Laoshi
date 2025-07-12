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
    const grid = document.getElementById('charactersGrid');
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

// read the data from the JSON file

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hsk-level').forEach(button => {
        button.addEventListener('click', () => {
            const level = parseInt(button.dataset.level);
            if (level >= 4) {
                alert('This level requires premium membership. Please upgrade to access HSK 5-6 content.');
                return;
            }
            setActiveLevel(level);
        });
    });

    // Load initial HSK 1
    loadCharacterData(1).then(renderCharacters);

    // Add interactivity to cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.character-card')) {
            const card = e.target.closest('.character-card');
            const character = card.querySelector('.character').textContent;
            const pinyin = card.querySelector('.pinyin').textContent;
            const meaning = card.querySelector('.meaning').textContent;
            console.log(`Character: ${character}, Pinyin: ${pinyin}, Meaning: ${meaning}`);
            
            //  SPEAK THE CHARACTER OUT LOUD
            speakChinese(character);

            // lil' animation feedback
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.transform = ''; }, 150);
        }
    });

    // Function to make browser speak Chinese
    function speakChinese(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN"; // 🇨🇳 Chinese
        utterance.rate = 0.5; // slightly slower = better for learners
        speechSynthesis.speak(utterance);
    }
});
