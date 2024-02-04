function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function hello() {
    let hello = document.querySelector(".hello");
    let text = "Добро пожаловать!";
    for (i=0;i<text.length;i++) {
        let letter = document.createElement("span");
        letter.textContent = text[i];
        if (text[i]==" ") {
            letter.style.width = "20px";
        }
        letter.classList.add("letter");
        hello.appendChild(letter);
        letter.style.animation = "letter 0.3s 1";
        await sleep(300);
    }
}
hello()
