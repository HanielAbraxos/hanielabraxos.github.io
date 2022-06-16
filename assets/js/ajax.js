const ipsubmit = document.getElementById("ip-submit");

ipsubmit.addEventListener("click",()=>{
    const ip = document.getElementById("ip");
    let country = document.getElementById("country-output");
    let city = document.getElementById("city-output");
    let continent = document.getElementById("continent-output");
    let ipresult = document.getElementById("ip-output");
    // let ipresult2 = document.getElementById("ip2-output");
    let ipresult3 = document.getElementById("ip3-output");
    let code = document.getElementById("code-output");
    let currency = document.getElementById("currency-output");
    let currency_code = document.getElementById("currency_code-output");
    let currency_symbol = document.getElementById("currency_symbol-output");
    let time_zone_name = document.getElementById("tname-output");
    let time_zone_time = document.getElementById("ttime-output");
    let time_zone_unix = document.getElementById("tunix-output");
    let time_zone_offset = document.getElementById("toffset-output");
    let block = document.querySelector(".api");
    console.log(ip.value);

    const xhr = new XMLHttpRequest();
    xhr.open("GET",`https://api.ipgeolocation.io/ipgeo?apiKey=7c0ba997e81442a1af198040b9ae3253&ip=${ip.value}`,true);

    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        block.classList.toggle("apih");
        ipresult.innerHTML = "<strong>IP: </strong>" + result.ip;
        // ipresult2.innerHTML = "<strong>IP: </strong>" + result.ip;
        ipresult3.innerHTML = "<strong>IP: </strong>" + result.ip;
        city.innerHTML = "<strong>City: </strong>" + result.city;
        country.innerHTML = "<strong>Country: </strong>" + result.country_name;
        continent.innerHTML = "<strong>Continent: </strong>" + result.continent_name;
        code.innerHTML="<strong>Calling Code: </strong>" + result.calling_code;
        currency.innerHTML = "<strong>Name: </strong>" + result.currency.name;
        currency_code.innerHTML = "<strong>Code: </strong>" + result.currency.code;
        currency_symbol.innerHTML = "<strong>Symbol: </strong>" + result.currency.symbol;
        time_zone_name.innerHTML = "<strong>Region: </strong>" + result.time_zone.name;
        time_zone_time.innerHTML = "<strong>Current Time: </strong>" + result.time_zone.current_time;
        time_zone_unix.innerHTML = "<strong>Current Unix: </strong>" + result.time_zone.current_time_unix;
        time_zone_offset.innerHTML = "<strong>Offset: </strong>" + result.time_zone.offset;
    }
    xhr.send();
})


// currency":{"code":"PKR","name":"Pakistan Rupee","symbol":"₨"},"time_zone":{"name":"Asia/Karachi","offset":5,"current_time":"2022-06-15 13:06:07.991+0500","current_time_unix":1655280367.991,"is_dst":false,"dst_savings":0}}
