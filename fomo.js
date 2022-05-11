var resultado = Math.round(Math.random()*(max - min) + parseInt(min));
    var fomonumber = document.querySelector("#fomonumber");
    var fomociudad = document.querySelector("#fomociudad");
    
    fetch("https://ipwhois.app/json/")
    .then((response) => response.json())
    .then((data) => (fomonumber.innerHTML = resultado; fomonumber.innerHTML = data.city ; ))