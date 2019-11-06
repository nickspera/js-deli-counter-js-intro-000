var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;

};

function nowServing(katzDeliLine){
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
} else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


function currentLine(katzDeliLineLine){
  var outputString;
  if (!katzDeliLine.length) {
      outputString = “The line is currently empty.”
      }
        else {
          outputString = “The line is currently: ”
            for(var i = 0; i < katzDeliLine.length ; i++){
              if (i === 0){
                outputString = outputString + (i+1) + “. ” + katzDeliLine[i];
              }
                else{
                  outputString = outputString + “, ” + (i+1) + “. ” + katzDeliLine[i];
                }
              }
            }
            return outputString;
}
