const start = document.getElementById('startbtn');
const container = document.getElementById('container');
const subject = document.getElementById('subject');
let counter = 0; // for next question generate.


const forNextQuestion = (next,options)=>{
    
    console.log(options[0]);
   if (options[0].checked === true) {
       console.log('hello option');
   }

    next.onclick = ()=> {
        startQuiz(counter);
        counter++;
    }
}


const updateQuiz = (data,counter) => {
  
    container.innerHTML = `
    <div class="questionContainer">

    <h3>${data[counter].question}</h3>
    <input type="radio" name="same" id="option0">  ${data[counter].options[0]}
    <br>
    <input type="radio" name="same" id="option1">  ${data[counter].options[1]}
    <br>
    <input type="radio" name="same" id="option2">  ${data[counter].options[2]}
    <br>
    <input type="radio" name="same" id="option3">  ${data[counter].options[3]}
    <br>
    <br>
    <button id="next">Next</button>
    </div>
     `;
    
     const next = document.getElementById('next');
     const option0 = document.getElementById('option0');
     const option1 = document.getElementById('option1');
     const option2 = document.getElementById('option2');
     const option3 = document.getElementById('option3');

     const options = [option0, option1, option2, option3]
    
    forNextQuestion(next, options);
}


const startQuiz = (counter) => {

    if (counter < 10) {
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
    }else{
        document.write('question end')
    }
   
}



start.onclick = () => {
    startQuiz(counter);
    counter++;
}


