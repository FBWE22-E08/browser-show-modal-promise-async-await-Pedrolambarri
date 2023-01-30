import "./css/style.css"; //importing css

const hiddenMessgae = document.querySelector(".modal");
const span = document.querySelector(".close");
let btn = document.querySelector(".btn");

const showMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(hiddenMessgae.style.display = "block");
        }, 60000);
    });
};

const printtingMessage = async () => {
    let result = await showMessage();
}

printtingMessage()


span.style.cursor = "pointer";

span.addEventListener("click", () => {
    hiddenMessgae.style.display = "none";
})


//BONUS-2

const continueButton = () => {
    return new Promise((resolve) => {
        btn.addEventListener("animationend", () => {
            alert("Continue to subscribe"); 
        });
        btn.addEventListener("mouseover", () => {
            btn.style.backgroundColor = "red";   
        });
        btn.addEventListener("mouseout", () => {
            btn.style.backgroundColor = "";  
        });
    });
};

const resultPromise = async () => {

    let result = await continueButton();
    
};

resultPromise();