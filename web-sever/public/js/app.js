console.log('Hello world')






const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const newText = document.querySelector('#test-1')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    newText.textContent = "loading message"
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            newText.textContent = data.error
        }else{
            newText.textContent = data.feelslike
        }
    })
})
})