// https://api.currencyfreaks.com/latest?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&format=xml

const ip3submit = document.getElementById("ip-submittt");

ip3submit.addEventListener("click",()=>{
    const ip3 = document.getElementById("ip3");
    let ipresult3 = document.getElementById("ip3-output");
    let time_zone_name = document.getElementById("tname-output");
    let time_zone_time = document.getElementById("ttime-output");
    let time_zone_unix = document.getElementById("tunix-output");
    let time_zone_offset = document.getElementById("toffset-output");
    let block = document.querySelector(".api");
    console.log(ip3.value);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.ipgeolocation.io/ipgeo?apiKey=7c0ba997e81442a1af198040b9ae3253&ip=${ip3.value}`,true);

    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        block.classList.toggle("apih");
        ipresult3.innerHTML = "<strong>IP:   </strong>" + result.ip;
        time_zone_name.innerHTML = "<strong>Region: </strong>" + result.time_zone.name;
        time_zone_time.innerHTML = "<strong>Current Time: </strong>" + result.time_zone.current_time;
        time_zone_unix.innerHTML = "<strong>Current Unix: </strong>" + result.time_zone.current_time_unix;
        time_zone_offset.innerHTML = "<strong>Offset: </strong>" + result.time_zone.offset;
    }
    xhr.send();
})

