
let sound = document.querySelector("#sound source");
const audio = new Audio(sound.src)
let btns = [document.getElementById("play1"), document.getElementById("play2")]
btns.forEach(e => {
    e.addEventListener("mouseover", (e) => {
        console.log(e.target)
        audio.play()
    })
})
