// {
//     "id": 1,
//     "name": "Mr. Bonkers",
//     "isGoodDog": true,
//     "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
// }

const dogContainer = document.querySelector('#dog-bar')
const dogInfoContainer = document.querySelector('#dog-info')

fetch('http://localhost:3000/pups')
    .then(r => r.json())
    .then(data => {
        data.forEach(dogBar)
    })

function dogBar(dogArray) {
    const span = document.createElement('span')
    span.addEventListener('click', () => {
        dogInfoContainer.innerHTML = ''
        const img = document.createElement('img')
        img.src = dogArray.image
        const h2 = document.createElement('h2')
        h2.innerText = dogArray.name
        const btn = document.createElement('button')
        btn.id = 'button'
        let result;
        function goodBad() {
            if (dogArray.isGoodDog === true) {
                result = "Good Dog!"
            } else {
                result = "Bad Dog!"
            }
        }
        goodBad()
        btn.innerText = result
        dogInfoContainer.append(img, h2, btn)
    })
    span.innerText = dogArray.name
    dogContainer.append(span)
}
