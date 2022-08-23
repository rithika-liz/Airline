let flight_id=localStorage.getItem("flightid");
let val=localStorage.getItem("textvalue0");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");
let val4=localStorage.getItem("textvalue4");
let val5=localStorage.getItem("textvalue5");
let val6=localStorage.getItem("textvalue6");
let np=localStorage.getItem("np");
console.log(np);

flight_id-=1;
let content='';
function display_value(data)
{
    
    console.log(np);
    if(np === "2")
    {
        console.log(typeof np);
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        <div class="details" >
                <h3> Passenger details </h3>
                <h4> Name:${val} ${val1}</h4>
                <h4> Age:${val2} </h4>
                <h4> Email:${val3}</h4>
                <h4> Name:${val4} ${val5}</h4>
                <h4> Age:${val6} </h4>
                
        </div>
        <div class="details1" >
                <h3> Flight details </h3>
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
        </div>`
        document.querySelector("#card-collection").innerHTML = content;
     
   
    
     }
     else
     {

        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        <div class="details" >
                <h3> Passenger details </h3>
                <h4> Name:${val} ${val1}</h4>
                <h4> Age:${val2} </h4>
                <h4> Email:${val3}</h4>
        </div>
        <div class="details1" >
                <h3> Flight details </h3>
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
        </div>`
            document.querySelector("#card-collection").innerHTML = content;
    






        
     }
}
fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));