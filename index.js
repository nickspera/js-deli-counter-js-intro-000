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
    for (var i = 0; i < katzDeliLine; i++) {
      return `The line is currently: ${i++}. ${katzDeliLine[i]}`;
    }
      return "The line is currently empty.";
}
