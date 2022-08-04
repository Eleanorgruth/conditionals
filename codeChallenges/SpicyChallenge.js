goodDrivingRecord = false
isOver25 = false
if (goodDrivingRecord && isOver25){
  console.log(`discount applied`);
}else if (!goodDrivingRecord && !isOver25){
  console.log(`someone else needs to sign for the rental`);
} else {
  console.log(`full price`);
}
