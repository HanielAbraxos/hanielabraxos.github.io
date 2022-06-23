const datesubmit = document.getElementById("dat-submit");
const mydateChart = document.getElementById("dateChart").getContext('2d');

datesubmit.addEventListener("click",()=>{
    let sdate = document.getElementById("sdate");
    let edate= document.getElementById("edate");
    const ipc = document.getElementById("ipc");
    const ipbc = document.getElementById("ipbc");
    // sdate = sdate.value.split("/").reverse().join("-")
    // edate = edate.value.split("/").reverse().join("-")
    // console.log(sdate)
    // let url = 
    // console.log("PKR");
    // console.log(tocur);

    const xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.currencyfreaks.com/timeseries?apikey=4af1a6a2bc744dce9ef426ca542b4aa4&start_date=${sdate.value}&end_date=${edate.value}&base=${ipbc.value}&symbols=${ipc.value}`,true);

    // console.log(edate)
    xhr.onload = ()=>{
        let date = [];
        let curr = [];
        let i =0;
        let result = JSON.parse(xhr.responseText);
        resultarr = Object.entries(result.rates);
        let curdata = Object.values(result.rates);
        let currdata = Object.values(curdata);
        let currrdata = Object.values(currdata);
        for(let [key,value] of Object.entries(currrdata)){
            for(let [key1,value1] of Object.entries(value)){
                console.log(value1);
                curr[i]=value1;
                i++;
            }
        }
        for(i=0;i<resultarr.length;i++){
            date[i] = resultarr[i][0];
            date[i] = date[i].slice(0,10);
        }
        
        let dateChart = new Chart(mydateChart,{
            type:'line',
            data: {
                labels: date,
                datasets: [{
                    label: ipc.value + " &  " + ipbc.value,
                    data: curr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    xhr.send();
})

