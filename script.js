const start = document.getElementById('startbtn');
const container = document.getElementById('container');
const next = document.getElementById('next');

start.onclick = () => {
    container.innerHTML = `
    <div class="questionContainer">

    <h3>what the name of pakistan?</h3>
    <input type="radio" name="same">  Heel
    <br>
    <input type="radio" name="same">  Hello
    <br>
    <input type="radio" name="same">  paksitan
    <br>
    <input type="radio" name="same">  pakistan
    <br>
    <br>
    <button id="next">Next</button>
    </div>
    `;
    
}
