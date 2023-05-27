// Acess object

var cuboid = {
    height: '20',
    width: '10',
    length: '10'
}

console.log(cuboid.length*cuboid.width*cuboid.height);

// - Creating Your Own Objects

/* 

Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!

Complete the given program by fixing the constructor, 
making a flight object, and assign it to the given variable 
to correctly execute the corresponding message.

Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.

*/
 
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
    
    var flight1 = new Flight(flightNumber, flightStatus);
   
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status);

function Flight(flightNumber, flightStatus) {
    //fix the constructor
    this.number = flightNumber;
    this.status = flightStatus;
};