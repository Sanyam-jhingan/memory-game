const section = document.querySelector("section")

const getData = () => [
  { name: "happy", imgSrc: "./images/icons8-emoji-64.png" },
  { name: "smile", imgSrc: "./images/icons8-emoji-64(1).png" },
  { name: "rofl", imgSrc: "./images/icons8-emoji-64(2).png" },
  { name: "angry", imgSrc: "./images/icons8-emoji-64(3).png" },
  { name: "sad", imgSrc: "./images/icons8-emoji-64(4).png" },
  { name: "kiss", imgSrc: "./images/icons8-emoji-64(5).png" },
  { name: "sick", imgSrc: "./images/icons8-emoji-64(6).png" },
  { name: "angel", imgSrc: "./images/icons8-emoji-64(7).png" },
  { name: "happy", imgSrc: "./images/icons8-emoji-64.png" },
  { name: "smile", imgSrc: "./images/icons8-emoji-64(1).png" },
  { name: "rofl", imgSrc: "./images/icons8-emoji-64(2).png" },
  { name: "angry", imgSrc: "./images/icons8-emoji-64(3).png" },
  { name: "sad", imgSrc: "./images/icons8-emoji-64(4).png" },
  { name: "kiss", imgSrc: "./images/icons8-emoji-64(5).png" },
  { name: "sick", imgSrc: "./images/icons8-emoji-64(6).png" },
  { name: "angel", imgSrc: "./images/icons8-emoji-64(7).png" }
]

const randomize = () => {
  const cardData = getData()
  cardData.sort(() => Math.random() - 0.5)
  //console.log(cardData)
  return cardData
}

const cardGenerator = () => {
  let cardData = randomize()

  cardData.forEach(item => {
    const card = document.createElement("div")
    const face = document.createElement("img")
    const back = document.createElement("div")
    card.classList = "card"
    face.classList = "face"
    back.classList = "back"

    face.src = item.imgSrc
    card.setAttribute('name', item.name)

    section.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)

    card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard")
        checkCards(e)
    })
  })
}

const checkCards = (e) => {
    const clickedCard = e.target
    //console.log(clickedCard)
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped")
    const toggleCard = document.querySelectorAll(".toggleCard")

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log("match")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped")
                card.style.pointerEvents = "none"
                card.style.boxShadow = "rgba(32, 228, 14, 1) 0px 5px 15px"
            })
        } else {
            console.log("wrong")
            flippedCards.forEach((card) => {
                card.classList.remove("flipped")
                setTimeout(() => card.classList.remove("toggleCard"), 750)
            })
        }
    }
    if (toggleCard.length === 16) {
        setTimeout(() => restart("Congrats! you won!"), 1000)
    }
}

const restart = (text) => {
    let cardData = randomize()
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    section.style.pointerEvents = "none"

    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard")
        cards[index].style.pointerEvents = "all"
        faces[index].src = item.imgSrc
        cards[index].setAttribute("name", item.name)
        cards[index].style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 5px 15px"
        section.style.pointerEvents = "all"
    })
    setTimeout(() => window.alert(text), 100)
}

cardGenerator()
