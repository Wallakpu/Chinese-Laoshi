// For HSK Level one questions
const question=document.getElementById("questions");//Accessign Question paragraph tag
const buttons=document.querySelectorAll(".btn");//Accessing each answers button
const nextBtn=document.getElementById("next");//Accessing Next button for next questions
const dialoge=document.querySelector(".dialoge");
const okayBtn=document.getElementById("OK");
const scoreMsg=document.getElementById("msg");


const QuizQn = [ // Questions that contains options and answers[starting with index 0]
    {q: "Which sentence is grammatically correct?", options: ["他是学生", "学生是他", "是他学生", "他学生是"], answer: 0},
    {q: "What does 我有一本书 mean?", options: ["I have two books", "I don't have a book", "I have a book", "This is a book"], answer: 2},
    {q: "Choose the best option. 你好吗？", options: ["谢谢", "我很好", "再见!", "不客气"], answer: 1},
    {q: "What is the Chinese word for 'apple'?", options: ["香蕉 (xiāngjiāo)", "橘子(júzi)", "苹果 (píngguǒ)", "葡萄(pútao)"], answer: 2},
    {q: "我____一个朋友. Complete the sentence", options: ["在", "和", "不", "有"], answer: 3},
]; // Contains 5 questions with options and answers

let score=0;//At first we have our score 0;
let current=0//Current Means current question number

const displayQn=()=>{  //Displays the Questions
    const qns=QuizQn[current]       //Here all the questions/options/answers stores in qns variable
    question.innerText=`${current+1}. ${qns.q}.`; //we are accessing only q not options and answers
    buttons.forEach((btn,index)=>{   //index represents the options index 
    btn.innerText=qns.options[index]; //we are excessing options tag using index so that in each buttons the string will be written
    })  
}

   // Attach event listeners only ONCE at startup
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const qns = QuizQn[current];
        disableBtn(); // prevent further clicks
        if (index === qns.answer) {
            score++;
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
            buttons[qns.answer].style.backgroundColor = "green";
        }
    });
});



const disableBtn=()=>{   //When we choose the options and we are wrong we wont be able to click the options again
    buttons.forEach((btn)=>{
        btn.disabled=true;  
    })
}

const enableBtn=()=>{
    buttons.forEach((btn)=>{
        btn.disabled=false;
        btn.style.backgroundColor="";
    })
}

const nextQn = () => { 
    nextBtn.addEventListener('click', () => {//when we click next Button it will change the current Question number
        current++;

        if (current < QuizQn.length) { //If the current qn number is less then the quizarray length 
            displayQn();//displays the questions
            enableBtn();//enables the buttons 
            if (current === QuizQn.length - 1) {//if the current question number is equal to the quizarray length
                nextBtn.innerText = "Submit";// it will change the button text to submit
            }
        } else {
           dialoge.showModal();// DIsplayes the modal that shows scoresmsg
scoreMsg.innerHTML = `You scored ${score}/${QuizQn.length}<br>Congratulations!!<br>You have passed the HSK 1 level test!!<br>Continue for HSK 2!`;

    nextBtn.disabled = true;  
        
        }
    });
};


const closeDialoge=()=>{ // we have to close the dialogue when we click okay button
    okayBtn.addEventListener('click',()=>{
        dialoge.close();
    })
}
//All this functions are called ;
nextQn();
displayQn();