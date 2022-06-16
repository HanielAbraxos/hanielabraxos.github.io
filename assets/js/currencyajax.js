// https://api.currencyfreaks.com/latest?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&format=xml

const ip2submit = document.getElementById("ip-submitt");

ip2submit.addEventListener("click",()=>{
    const ip2 = document.getElementById("ip2");
    let ipresult2 = document.getElementById("ip2-output");
    let currency = document.getElementById("currency-output");
    let currency_code = document.getElementById("currency_code-output");
    let currency_symbol = document.getElementById("currency_symbol-output");
    let block = document.querySelector(".api");
    console.log(ip2.value);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.ipgeolocation.io/ipgeo?apiKey=7c0ba997e81442a1af198040b9ae3253&ip=${ip2.value}`,true);

    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        block.classList.toggle("apih");
        ipresult2.innerHTML = "<strong>IP:   </strong>" + result.ip;
        currency.innerHTML = "<strong>Name: </strong>" + result.currency.name;
        currency_code.innerHTML = "<strong>Code: </strong>" + result.currency.code;
        currency_symbol.innerHTML = "<strong>Symbol: </strong>" + result.currency.symbol;
    }
    xhr.send();
})


