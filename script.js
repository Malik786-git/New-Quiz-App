const start = document.getElementById('startbtn');
const container = document.getElementById('container');
const subject = document.getElementById('subject');
let counter = 0; // for next question generate.


const forNextQuestion = (next)=>{
    next.onclick = ()=> {
        startQuiz(counter);
        counter++;
    }
}


const updateQuiz = (data,counter) => {
  
    container.innerHTML = `
    <div class="questionContainer">

    <h3>${data[counter].question}</h3>
    <input type="radio" name="same">  ${data[counter].options[0]}
    <br>
    <input type="radio" name="same">  ${data[counter].options[1]}
    <br>
    <input type="radio" name="same">  ${data[counter].options[2]}
    <br>
    <input type="radio" name="same">  ${data[counter].options[3]}
    <br>
    <br>
    <button id="next">Next</button>
    </div>
     `;
    //  console.log(document.getElementById('next'));
    const next = document.getElementById('next');
    forNextQuestion(next);
    }


const startQuiz = (counter) => {

    fetch('question.json')
        .then(res => res.json())
        .then(data => {
            if (subject.value === 'cs') {
                updateQuiz(data.cs,counter)
            } else
                if (subject.value === 'math') {
                    updateQuiz(data.math, counter)
                } else {
                    updateQuiz(data.chem, counter)
                }
        });
}


start.onclick = () => {
    startQuiz(counter);
    counter++;
}

// next.onclick = () => {
//     // startQuiz(counter);
//     console.log('next btn run');
//     // counter++;
// }
