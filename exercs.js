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

/*
A store manager needs a program to set discounts for products.

The program should take the product ID, price and discount as input and output the discounted price.
However, the changePrice method, which should calculate the discount, is incomplete. Fix it!
*/

    var prodID = MN1480;
    var price = 2500;
    var discount = 20;
    
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price = price-(discount * price);
    }
}
