const start = document.getElementById('startbtn');
const container = document.getElementById('container');
const subject = document.getElementById('subject');
let counter = 0; // for next question generate.


const forNextQuestion = (next,options, errorMessage, data, counter)=>{
  

    next.onclick = ()=> {
        counter++;
        if (options[0].checked === true || options[1].checked === true ||
            options[2].checked === true || options[3].checked === true  ) 
        {
            for (let i in options) {
                if (options[i].checked) {
                    if (data[counter-1].answer === Number(i)) {
                        console.log('correct answer');
                    }
                }
            }
            
            startQuiz(counter);
        }else{
          errorMessage.className = '.error.show';
        }

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
    <small id='errorMessage' class='error'>plz select any one optoin</small>
    </div>
     `;
    
     const next = document.getElementById('next');
     const option0 = document.getElementById('option0');
     const option1 = document.getElementById('option1');
     const option2 = document.getElementById('option2');
     const option3 = document.getElementById('option3');
     const errorMessage = document.getElementById('errorMessage');     

     const options = [option0, option1, option2, option3]
    
    forNextQuestion(next, options, errorMessage, data, counter);
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


