function genColorAndApply() {
    let str = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        let char = str[index]
        color = color + char
    }

    let colorBox = document.querySelector('.color-box')
    colorBox.style.backgroundColor = color

    const showColor = document.querySelector('.show-color')
    showColor.innerHTML = `color:${color}`;
}

const genBtn = document.querySelector('.gencolorbtn')
genBtn.addEventListener('click', genColorAndApply)

window.addEventListener('load', genColorAndApply)

console.log(Math.floor(Math.random() * 1000 + 1000));


const card = document.querySelector('.mycard')

console.log(card.innerText);
console.log(card.textContent);
console.log(card.innerHTML);
card.innerHTML = `<li>Change</li>`;