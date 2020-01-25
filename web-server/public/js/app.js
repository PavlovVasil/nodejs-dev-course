const form = document.querySelector('form');
const searchInput = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = searchInput.value;
    fetch(`http://localhost:3000/weather?address=${address}`)
    .then(response => response.json()
    .then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
}))
})