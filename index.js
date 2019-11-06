/*At the beginning of the day, the deli is empty and is represented by an empty array,
like var katzDeliLine = [];. However, you don't need to code the array as a variable,
since the test scripts will create it and pass it to the functions you are about to build.
*/
/*Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept two paramaters:
the current line of people, along with the new person's name.
The function should return a welcome message including the new person's position in line,
such as "Welcome, Ada. You are number 1 in line.".
And don't go being too programmer-y and give them their index. These are normal people.
If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
*/

var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;

};

function nowServing(line){
  if (!line.length) {
    return "There is nobody waiting to be served!";
} else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine === katzDeliLine.length) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      return (`The line is currently:` )
    }
  // } else {
  //     return "The line is currently empty."
  //     }
}
