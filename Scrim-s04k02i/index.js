const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordElOne = document.getElementById("passwordOne")
let passwordElTwo = document.getElementById("passwordTwo")

function getPassword() {
    passwordElOne.textContent = "";
    passwordElTwo.textContent = "";
    
    for (let i = 0; i < 16; i++) {
         passwordElOne.textContent += characters[Math.floor(Math.random() * characters.length)]
         passwordElTwo.textContent += characters[Math.floor(Math.random() * characters.length)]
        }
    }
    
        function copyToClipboard(id) {
            const el = document.getElementById(id);
            const text = el.textContent;
            if (!text) return;

            navigator.clipboard.writeText(text).then(() => {
                el.textContent = "Copied!";
                setTimeout(() => {
                    el.textContent = text;
                }, 1000);
            });
        }