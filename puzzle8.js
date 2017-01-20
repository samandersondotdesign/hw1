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

var steps = 0;


function downTime(){
  steps = 0;
  while (steps < 8) {
    down();
    steps = steps + 1;
  }
	right();
	right();
}


function upTime(){
  steps = 0;
  while (steps < 8) {
    up();
    steps = steps + 1;
  }
  right();
  right();
}

downTime();
upTime();
downTime();
upTime();
downTime();
