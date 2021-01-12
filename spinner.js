const spin = (reps) => {
  let timeOut = 0;
  for (let i = 0; i < reps; i++) {
    timeOut = rev(timeOut); // reassign the parent timeOut variable to the value returned by the helper function
  }
  setTimeout(() => process.stdout.write('\n'), timeOut);
};

// helper function - does one complete revolution
const rev = (timeOut) => {
  const positions = ['|   ', '/   ', '-   ', '\\   ']; // defines all the possible positions
  for (let pos of positions) {
    setTimeout(() => process.stdout.write('\r' + pos), timeOut);
    timeOut += 100;
  }
  return timeOut; // return the current timeOut value so it can continue being incremented outside of the function
};

spin(5);
