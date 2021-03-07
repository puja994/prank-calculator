
let textToDisplay = "";
const buttons = document.querySelectorAll('button');

buttons.forEach ((btn)=>{
    btn.addEventListener("click", ()=>{

        if(btn.innerText === "="){
            return onTotal();
        }

        if(btn.innerText ==='AC'){
            textToDisplay = "";
            return display(textToDisplay);
        }

        if(btn.innerText ==='C'){
            textToDisplay = textToDisplay.slice(0, -1);
            return display(textToDisplay);
        }

        if(btn.innerText === 'Off'){
            document.getElementById('result').style.backgroundColor = "brown";
            btn.innerText="ON"
            textToDisplay = ""
            return display(textToDisplay);
        }

        if(btn.innerText ==="ON"){
            document.getElementById('result').style.backgroundColor = "";
            btn.innerText = "Off"
            textToDisplay = ""
            return display(textToDisplay)
        }

        //grab the value from button
        textToDisplay += btn.innerText;
        display(textToDisplay);

    })

})

const display = (toDisplay) => {
    document.getElementById("result").value = toDisplay ;


   
};

const onTotal = () =>{
    //do totaling and display on screen
    const subtotal = eval(textToDisplay);
    const total = subtotal + randomVal();
    display(total);
    textToDisplay = "";
    
};
//create random number

const randomVal = () =>{
const randomVal = Math.floor( Math.random() * 10) + 1;
return randomVal <= 3 ? randomVal: 0;
}


