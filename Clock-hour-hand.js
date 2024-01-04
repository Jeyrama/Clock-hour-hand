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