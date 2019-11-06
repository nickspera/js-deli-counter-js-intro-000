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

function currentLine(katzDeliLine) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      return `The line is currently: ${katzDeliLine.toString()}`;
    }
      return "The line is currently empty.";
}

 // ${i+1}. ${katzDeliLine[i]},
