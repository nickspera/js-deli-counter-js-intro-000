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
  var lineAsString;
  if (katzDeliLine.length === 0) {
    lineAsString = `The line is currently empty.`
      }
        else {
          lineAsString = `The line is currently: `
            for (var i = 0; i < katzDeliLine.length ; i++){
              if (i === 0){
                lineAsString = "lineAsString" + `${i+1}. ${katzDeliLine[i]}`;
              }
                else {
                  lineAstString = `${lineAsString}, ${i+1}. ${katzDeliLine[i]}`;
                }
              }
            }
            return lineAsString;
}
