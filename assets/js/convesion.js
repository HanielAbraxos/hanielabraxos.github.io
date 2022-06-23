const ip4submit = document.getElementById("ip-submitttt");


ip4submit.addEventListener("click",()=>{
    const ip4 = document.getElementById("ip4");
    const ipb = document.getElementById("ipb");
    let ipbresult = document.getElementById("ipb-output");
    let ipresult4 = document.getElementById("ip4-output");
    let date = document.getElementById("date-output");
    // let base = document.getElementById("base-output");
    let rates = document.getElementById("rates-output");
    let block = document.querySelector(".api");
    console.log(ip4.value);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.currencyfreaks.com/latest?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&symbols=${ip4.value}&base=${ipb.value}`,true);
 
    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        let sym = ip4.value.toUpperCase();
        // if (sym = "PAKISTAN"){
        //     sym = "PKR"
        // }
        let base = ipb.value.toUpperCase();
        console.log(sym);
        block.classList.toggle("apih");
        ipresult4.innerHTML = "<strong>Symbol:   </strong>" + [sym];
        date.innerHTML = "<strong>Date: </strong>" + result.date;
        ipbresult.innerHTML = "<strong>Base: </strong>" + [base];
        rates.innerHTML = "<strong>Rates: </strong>" + "1 "+ [base] + " = " + result.rates[sym] + " " +[sym] +"s";
    }
    xhr.send();
})

