const buttons = document.querySelector(".buttons")
const header = document.querySelector("h1")
const image = document.querySelector(".image img")

//Event yakalayıcı fonksiyon
function handleAction(event) {

    let letter;
    //tıklama veya klavye eventi yakalama
    if (event.type == "keydown") {
        letter = event.key.toUpperCase();
    } else {
        letter = event.target.innerText;
    }

    const audio = new Audio()

    //ses dosyalarini calma ve efectlerin classlarini ekleme
    const playSound = (src, color) => {
        audio["src"] = src;
        audio.play();
        header.classList.add("transformed")
        image.classList.add(color);

        setTimeout(() => {
            header.classList.remove("transformed")
            image.classList.remove(color);
        }, 100)
    }

    //hangi harfe tiklandigini veya tusa basildigini bulma
    if (letter == "A") {
        playSound("audio/boom.wav", "purple")
    }
    else if (letter == "S") {
        playSound("audio/clap.wav", "green")
    }
    else if (letter == "D") {
        playSound("audio/hihat.wav", "blue")
    }
    else if (letter == "F") {
        playSound("audio/kick.wav", "red")
    }
    else if (letter == "G") {
        playSound("audio/openhat.wav", "orange")
    }
    else if (letter == "H") {
        playSound("audio/ride.wav", "purple")
    }
    else if (letter == "J") {
        playSound("audio/snare.wav", "green")
    }
    else if (letter == "K") {
        playSound("audio/tink.wav", "blue")
    }
    else if (letter == "L") {
        playSound("audio/tom.wav", "orange")
    }
    else {

    }
}

//butonlara tiklaninca calisacak
buttons.addEventListener("click", handleAction)

//klavyeden tuslaninca calisacak
document.addEventListener("keydown", (event) => {
    if (event.key == "a" || event.key == "A") {
        handleAction(event)
    }
    else if (event.key == "s" || event.key == "S") {
        handleAction(event)
    }
    else if (event.key == "d" || event.key == "D") {
        handleAction(event)
    }
    else if (event.key == "f" || event.key == "F") {
        handleAction(event)
    }
    else if (event.key == "g" || event.key == "G") {
        handleAction(event)
    }
    else if (event.key == "h" || event.key == "H") {
        handleAction(event)
    }
    else if (event.key == "j" || event.key == "J") {
        handleAction(event)
    }
    else if (event.key == "k" || event.key == "K") {
        handleAction(event)
    }
    else if (event.key == "l" || event.key == "L") {
        handleAction(event)
    }
})


