// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

right();
var c;
c=getColor();

function magicMove() {
  if (getColor() == "blue") {
    down();
    down();
    down();
    if (getColor() == "blue") {
          right();
          down();
          }
          else {
          left();
          down();
          }
  }
  
  else {
    if (getColor() == "red") {
    up();
    up();
    up();
      if (getColor() == "blue") {
          right();
          up();
          }
          else {
          left();
          up();
          }
  }
}
}
magicMove();
magicMove();
magicMove();
