console.log("counter")

countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")
let count = 0


console.log(count)

function increment(){
    count += 1
    console.log(count)
    countEl.textContent = count

}
function save() {
    let countDash = count + " - ";
    saveEl.textContent += countDash;

    count = 0;
    countEl.textContent = 0;
}