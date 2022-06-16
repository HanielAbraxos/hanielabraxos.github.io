const ip4submit = document.getElementById("ip-submitttt");

ip4submit.addEventListener("click",()=>{
    const ip4 = document.getElementById("ip4");
    let ipresult4 = document.getElementById("ip4-output");
    let date = document.getElementById("date-output");
    let base = document.getElementById("base-output");
    let rates = document.getElementById("rates-output");
    let block = document.querySelector(".api");
    console.log(ip4.value);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.currencyfreaks.com/latest?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&symbols=${ip4.value}`,true);

    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        let sym = ip4.value;
        console.log(sym);
        block.classList.toggle("apih");
        ipresult4.innerHTML = "<strong>Symbol:   </strong>" + [sym];
        date.innerHTML = "<strong>Date: </strong>" + result.date;
        base.innerHTML = "<strong>Base: </strong>" + result.base;
        rates.innerHTML = "<strong>Rates: </strong>" + result.rates[sym] + " " +[sym] +"s";
    }
    xhr.send();
})

