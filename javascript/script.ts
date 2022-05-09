// vytiahnutie z domu
var advice = document.getElementById('advice');
var button = document.getElementById('btn');
var advice_id = document.getElementById('advice-id');

// pridanie buttonu ako event listener
button.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            advice.innerHTML = data.slip.advice;
            advice_id.innerHTML = 'advice #' + data.slip.id;
        })
});








