function takeANumber(currentQue, newName){
  currentQue.push(newName);
  return `Welcome, ${newName}. You are number ${currentQue.length} in line.`
}
