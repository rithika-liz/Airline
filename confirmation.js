//get items from local storage
let flight_id=localStorage.getItem("flightid");
let val=localStorage.getItem("textvalue0");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");
let val4=localStorage.getItem("textvalue4");
let val5=localStorage.getItem("textvalue5");
let val6=localStorage.getItem("textvalue6");
let val7=localStorage.getItem("gend");
let val8=localStorage.getItem("gend1");
let np=localStorage.getItem("np");

flight_id-=1;
let content='';
function display_value(data)
{
    if(np === "2") //for 2 passengers
    {
        console.log(typeof np);
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        <div class="details" >
                <h3> Passenger details </h3>
                <h4> Passenger 1: ${val} ${val1}</h4>
                <h4> Age: ${val2} , ${val7}</h4>
                
                <h4> Email: ${val3}</h4>
                <h4> Passenger 2: ${val4} ${val5}</h4>
                <h4> Age: ${val6} , ${val8} </h4>
                
        </div>
        <div class="details2" >
                <h3> Flight details </h3>
                <h4>Flight number: ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price *2}</h4>
        </div>`
        document.querySelector("#card-collection").innerHTML = content;
     }
     else //for 1 passenger
     {
        departure=new Date(data[flight_id].departTime);
        arrival=new Date(data[flight_id].ArrivalTime);
        content +=  `
        <div class="details" >
                <h3> Passenger details </h3>
                <h4> Name: ${val} ${val1}</h4>
                <h4> Age: ${val2} , ${val7} </h4>
                <h4> Email: ${val3}</h4>
        </div>
        <div class="details1" >
                <h3> Flight details </h3>
                <h4>Flight number: ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
        </div>`
            document.querySelector("#card-collection").innerHTML = content;
      }
}
//calling function to display details of selected flight
fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));