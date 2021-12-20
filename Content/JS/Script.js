let grid = document.querySelectorAll(".grid-container")

const Cards = [
    "Red",
    "Pink",
    "Yellow",
    "Orange",
    "Gray",
    "Black",
    "Red",
    "Pink",
    "Yellow",
    "Orange",
    "Gray",
    "Black"
]

let CheckBox =[]


let Seen =[]

// function SetDeck(){
Cards.sort(function(){return 0.5 - Math.random()});

for (let i = 0; i < Cards.length; i++) {
    let NewCard = document.createElement("img")
    NewCard.setAttribute("src", "/Content/Img/Blankensein.jpeg")
    NewCard.setAttribute("id", Cards[i])
    NewCard.setAttribute("class", "grid-item");
    // NewCard.addEventListener("click")
    NewCard.addEventListener("click", function() {
        CheckBox.push(this.id) 
        console.log(this.id)
        if (CheckBox.length == 2 && CheckBox[0] == CheckBox[1] && !Seen.includes(this.id)){
        alert("Correct!") 
        Seen.push(this.id)
        console.log("i have seen: " +Seen)
        CheckBox =[]
    }
    if (CheckBox.length == 2 && CheckBox[0] != CheckBox[1] && !Seen.includes(this.id)){
        alert("Wrong!")
        CheckBox =[]
    }
    if (CheckBox.length >= 2){
        CheckBox =[]
    }
        });
    document.getElementById("grid-container").appendChild(NewCard) 
    NewCard.style.backgroundColor = Cards[i] 
    Check = Cards[i]
    console.log(NewCard + " DATA ID: " + Check)  
   
  }
// }

  