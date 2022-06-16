// https://api.whoisfreaks.com/v1.0/whois?apiKey=8bb6312b2a8a4b9fb025d871d39c7400&whois=live&domainName=whoisfreaks.com

// https://api.currencyfreaks.com/latest?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&format=xml

const ip6submit = document.getElementById("ip-submitttttt");

ip6submit.addEventListener("click",()=>{
    const ip6 = document.getElementById("ip6");
    let ipresult6 = document.getElementById("ip6-output");
    let country_name = document.getElementById("country_name-output");
    let zip = document.getElementById("zip-output");
    let user_name = document.getElementById("user_name-output");
    let user_device = document.getElementById("user_device-output");
    let user_type = document.getElementById("user_type-output");
    let user_os = document.getElementById("user_os-output");
    let block = document.querySelector(".api");
    
    console.log(ip6.value);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.ipgeolocation.io/ipgeo?apiKey=7c0ba997e81442a1af198040b9ae3253&ip=${ip5.value}&fields=geo&include=useragent`,true);

    xhr.onload = ()=>{
        let result = JSON.parse (xhr.responseText);
        console.log(result);
        block.classList.toggle("apih");
        ipresult6.innerHTML = "<strong>IP:   </strong>" + result.ip;
        country_name.innerHTML = "<strong>Country: </strong>" + result.country_name;
        zip.innerHTML = "<strong>ZipCode: </strong>" + result.zipcode;
        user_name.innerHTML = "<strong>User Agent: </strong>" + result.user_agent.name;
        user_device.innerHTML = "<strong>Device Name: </strong>" + result.user_agent.device.name;
        user_type.innerHTML = "<strong>Engine Type: </strong>" + result.user_agent.type;
        user_os.innerHTML = "<strong>Operating Version: </strong>" + result.user_agent.version;
    }
    xhr.send();
})


