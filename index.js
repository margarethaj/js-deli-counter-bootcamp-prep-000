function takeANumber(currentQue, newName){
  currentQue.push(newName);
  return `Welcome, ${newName}. You are number ${currentQue.length} in line.`
}

function nowServing(currentQue){
  var tempText = ""
  if(currentQue.length < 1){
    tempText = "There is nobody waiting to be served!"
  }
  else{
    tempText = `Currently serving ${currentQue[0]}.`
    currentQue.shift();
  }
  return tempText;
}
