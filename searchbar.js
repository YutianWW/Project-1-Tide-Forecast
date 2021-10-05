window.addEventListener('load', function () {
    console.log("page is loaded");
    fetch('oceans.json')
    .then(Response => Response.json())
    .then(data => {
        console.log(data.seas[2].name)
        let seasArray = data.seas;
        let randomNumber = Math.floor(Math.random() * seasArray.length)//"floor"get the whole number
        let nameElement = document.getElementById('seas-name');
        // nameElement.innerText = seasArray[randomNumber].name;
    })

    



})