document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Class tab switching
    const classTabButtons = document.querySelectorAll('.class-tab-btn');
    
    classTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            classTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // In a real app, you would load different class data here
        });
    });
    
    // Avatar upload functionality
    const avatarUpload = document.getElementById('avatarUpload');
    const profilePicture = document.getElementById('profilePicture');
    
    avatarUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                profilePicture.src = event.target.result;
                // In a real app, you would upload this to your server
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Simulate loading user data
    loadUserData();
    
    // Simulate loading class data
    loadClassData();
    
    // Form submission
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Settings saved successfully!');
            // In a real app, you would send this data to your server
        });
    }
});

function loadUserData() {
    // In a real app, you would fetch this from your backend
    const userData = {
        username: "UgeshBadar",
        joinDate: "June 2025",
        currentLevel: "2",
        progress: 65,
        streak: 7,
        charactersLearned: 248,
        classesTaken: 18,
        quizzesCompleted: 32
    };
    
    document.getElementById('username').textContent = userData.username;
    document.getElementById('joinDate').textContent = userData.joinDate;
    document.getElementById('currentLevel').textContent = userData.currentLevel;
    document.querySelector('.progress-bar').style.width = `${userData.progress}%`;
    document.querySelector('.stat-value').textContent = userData.streak;
    document.querySelectorAll('.stat-value')[1].textContent = userData.charactersLearned;
    document.querySelectorAll('.stat-value')[2].textContent = userData.classesTaken;
    document.querySelectorAll('.stat-value')[3].textContent = userData.quizzesCompleted;
}

function loadClassData() {
    // In a real app, you would fetch this from your backend
    const classData = [
        {
            title: "HSK 2 - Lesson 7",
            teacher: "Teacher Zhang",
            time: "Tomorrow, 3:00 PM - 4:00 PM"
        },
        {
            title: "Conversation Practice",
            teacher: "Teacher Li",
            time: "Friday, 10:00 AM - 11:00 AM"
        }
    ];
    
    const classList = document.querySelector('.class-list');
    if (classList) {
        classList.innerHTML = '';
        
        classData.forEach(cls => {
            const classCard = document.createElement('div');
            classCard.className = 'class-card';
            classCard.innerHTML = `
                <div class="class-info">
                    <h3>${cls.title}</h3>
                    <p class="class-teacher">With ${cls.teacher}</p>
                    <p class="class-time"><i class="far fa-clock"></i> ${cls.time}</p>
                </div>
                <div class="class-actions">
                    <button class="join-btn">Join Class</button>
                    <button class="reschedule-btn">Reschedule</button>
                </div>
            `;
            classList.appendChild(classCard);
        });
    }
}