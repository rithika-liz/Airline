function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //get number of flights
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        //display flight details 
        content +=  `
        <div class="card" >
            <div class="card-body">
                <h6>Flight Number: ${flight_det[count]['flightNum']}</h6>
                
                <h6>Origin: ${flight_det[count]['origin']}</h6>
                
                <h6>Destination: ${flight_det[count]['destination']}</h6>
                
                <h6>Departure: ${departure.toUTCString()}</h6>
                
                <h6>Arrival: ${arrival.toUTCString()}</h6>
                
                <h6>Price: &#8377;${flight_det[count]['price']}</h6>
                
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}" onclick="location.href='booking.html'; get_flight_details(${flight_det[count]['id']});" >Proceed</button>
            </div>
        </div>

    `
    }
    document.querySelector("#card-collection").innerHTML = content;
}
fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

//setting item in local storage
function get_flight_details(flightid){
    localStorage.setItem("flightid",flightid);
}