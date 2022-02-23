const start = document.getElementById('startbtn');
const container = document.getElementById('container');
const next = document.getElementById('next');
const subject = document.getElementById('subject');

const updateQuiz = (data) => {
   console.log(data[0].options[0]);
    container.innerHTML = `
    <div class="questionContainer">

    <h3>${data[0].question}</h3>
    <input type="radio" name="same">  ${data[0].options[0]}
    <br>
    <input type="radio" name="same">  ${data[0].options[1]}
    <br>
    <input type="radio" name="same">  ${data[0].options[2]}
    <br>
    <input type="radio" name="same">  ${data[0].options[3]}
    <br>
    <br>
    <button id="next">Next</button>
    </div>
     `;
}


const startQuiz = () => {

    if (subject.value === 'cs') {

        fetch('question.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data.cs);
                updateQuiz(data.cs)
        
            });

    } else {

    
    }

}



start.onclick = () => {
    startQuiz();
}
