const rockButton = document.querySelector (".rock");
const paperButton = document.querySelector (".paper");
const scissorsButton = document.querySelector (".scissors");
const Options = ["rock","paper","scissors"];
const btnAgain = document.querySelector (".btn");
const rockComp = document.querySelector (".rockComp");
const paperComp = document.querySelector (".paperComp");
const scissorsComp = document.querySelector (".scissorsComp");
const circle = document.querySelectorAll (".circle");
const circleClose = document.querySelector(".circleClose");

function intro() {
        Swal.fire({
        title: 'Hi! I am Sam. Lets play!',
        text: 'Sam likes playing "Rock Paper Scissors" game. Rules are very easy: rock crushes scissors, scissors cut paper, and paper covers rock. Try your luck and see who wins!',
        imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-teasing-cat-emoji-tulpahn-outline-color-tulpahn.png',
        imageWidth: 70,
      })
    } 
intro()

function random(){
    
    const random = Math.floor(Math.random() * Options.length);
    let speed = 800;
    rockComp.style.display = "none";
    paperComp.style.display = "none";
    scissorsComp.style.display = "none";
    
    rockButton.style.display = "block";
    paperButton.style.display = "block";
    scissorsButton.style.display = "block";
    circleClose.style.backgroundColor = "#7D574B"

    rockButton.addEventListener("click", () => {
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
        computerCard()
        setTimeout(computerChoice0,speed)
    })
    paperButton.addEventListener("click", () => {
        rockButton.style.display = "none";
        scissorsButton.style.display = "none";
        computerCard()
        setTimeout(computerChoice1,speed)
    })
    scissorsButton.addEventListener("click", () => {
        rockButton.style.display = "none";
        paperButton.style.display = "none";
        computerCard()
        setTimeout(computerChoice2,speed)
    })
    console.log (random)

    function computerCard() {
        if (random === 0){
            rockComp.style.display = "block";
            paperComp.style.display = "none";
            scissorsComp.style.display = "none"
        }
        else if (random === 1) {
            rockComp.style.display = "none";
            paperComp.style.display = "block";
            scissorsComp.style.display = "none"
        }
        else {
            rockComp.style.display = "none";
            paperComp.style.display = "none";
            scissorsComp.style.display = "block"
        }
        circleClose.style.backgroundColor = "#F7ECDE"
    }

    function computerChoice0 () {
        
        if (random === 0) {
            Swal.fire({
                title: 'Draw! Try again.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-smart-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else if (random === 1) {
            Swal.fire({
                title: 'Sorry! You lost.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-sad-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else {
            Swal.fire({
                title: 'Hooray! You won!',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-fall-in-love-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
    }
    function computerChoice1 () {
        
        if (random === 0) {
            Swal.fire({
                title: 'Hooray! You won!',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-fall-in-love-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else if (random === 1) {
            Swal.fire({
                title: 'Draw! Try again.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-smart-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else {
            Swal.fire({
                title: 'Sorry! You lost.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-sad-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        
    }
    function computerChoice2 () {
        
        if (random === 0) {
            Swal.fire({
                title: 'Sorry! You lost.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-sad-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else if (random === 1) {
            Swal.fire({
                title: 'Hooray! You won!',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-fall-in-love-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
        else {
            Swal.fire({
                title: 'Draw! Try again.',
                imageUrl: 'https://img.icons8.com/external-tulpahn-outline-color-tulpahn/344/external-smart-cat-emoji-tulpahn-outline-color-tulpahn.png',
                imageWidth: 70,
            })
        }
    }
    
}
random()


btnAgain.addEventListener ("click", function () {
    random(); 
    })

