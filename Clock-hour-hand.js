/*
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
Also, the local council has lost most of our tax money to an elaborate email scam, 
there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code 
that tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates! Can you do it?

Task:
  Given the angle (in degrees) of the hour-hand, 
  return the time in 12 hour HH:MM format. 
  Round down to the nearest minute.

Examples:
  12:00 = 0 degrees
  03:00 = 90 degrees
  06:00 = 180 degrees
  09:00 = 270 degrees
  12:00 = 360 degrees

Notes:
  Do not make any AM or PM assumptions for the HH:MM result. 
  They are indistinguishable for this challenge.
  3 o'clock is 03:00, not 15:00
  7 minutes past midnight is 12:07
  7 minutes past noon is also 12:07

  0 <= angle <= 360
*/


// Solution


function whatTimeIsIt(angle) {
  let hour = Math.floor(angle/30), minutes = Math.floor((angle%30)*2);
  if (hour < 10) {hour = "0" + hour};
  if (hour <= 0) {hour = 12};
  if (minutes < 10) {minutes = "0" + minutes};
  return hour + ":" + minutes;
}

// or

let whatTimeIsIt = function(angle) {
  // 1 degree  is 2 minutes
  
  let conversion = Math.floor(angle * 2); // Convert degrees to minutes. Round down
  let hour = Math.floor(conversion / 60); // Calculate hours. Round down 
  let minute = conversion - (hour * 60); // Calculate minutes
  
  if (hour === 00){
    hour = 12;
  }
  if (hour < 10){
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  
  return hour + ":" + minute;
}