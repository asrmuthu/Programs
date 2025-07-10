//849. Maximize Distance to Closest Person
//https://leetcode.com/problems/maximize-distance-to-closest-person/description/



import React, { useState } from 'react';

const Photon1 = () => {
  // Initial input: an array of seats where 1 represents occupied, 0 represents empty
  const [seats, setSeats] = useState([1, 0, 0, 0, 1, 0, 1]);

  // Function to calculate the maximum distance to the closest person
  const maxDistToClosest = (seats) => {
    const n = seats.length;
    let maxDist = 0;
    
    // Iterate through the seats
    for (let i = 0; i < n; i++) {
      if (seats[i] === 0) {
        let leftDist = Infinity;
        let rightDist = Infinity;
        
        // Calculate distance to the nearest occupied seat on the left
        for (let j = i - 1; j >= 0; j--) {
          if (seats[j] === 1) {
            leftDist = i - j;
            break;
          }
        }

        // Calculate distance to the nearest occupied seat on the right
        for (let j = i + 1; j < n; j++) {
          if (seats[j] === 1) {
            rightDist = j - i;
            break;
          }
        }

        // The minimum distance to the nearest person (either left or right)
        const minDist = Math.min(leftDist, rightDist);
        maxDist = Math.max(maxDist, minDist); // Maximize this minimum distance
      }
    }

    return maxDist;
  };

  // Get the result based on the current state of the seats
  const result = maxDistToClosest(seats);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Maximize Distance to Closest Person</h1>
      <p><strong>Seats:</strong> {JSON.stringify(seats)}</p>
      <p><strong>Maximum Distance to Closest Person:</strong> {result}</p>
    </div>
  );
};

export default Photon1;
