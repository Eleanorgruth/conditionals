goodDrivingRecord = false
isOver25 = true
if (goodDrivingRecord === true && isOver25 === true){
  console.log(`discount applied`);
}
else if (goodDrivingRecord === false && isOver25 === false){
  console.log(`someone else needs to sign for the rental`);
}
else {
  console.log(`full price`);
}
