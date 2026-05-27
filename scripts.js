const button = document.querySelector(".generate-button")

const result = document.querySelector(".result")

function generateNumber() {

    const min =
        Math.ceil(Number(document.querySelector(".input-min").value))

    const max =
        Math.floor(Number(document.querySelector(".input-max").value))

    if (max <= min) {

        result.innerHTML = "Mínimo menor que máximo"

        result.style.color = "#ff4d4d"

        return
    }

    result.style.color = "#ffffff"

    let counter = 0

    const animation = setInterval(() => {

        const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min

        result.innerHTML = randomNumber

        result.classList.add("animate")

        counter++

        if (counter > 20) {

            clearInterval(animation)

            const finalNumber =
                Math.floor(Math.random() * (max - min + 1)) + min

            result.innerHTML = finalNumber

            result.classList.remove("animate")
        }

    }, 80)
}

button.addEventListener("click", generateNumber)