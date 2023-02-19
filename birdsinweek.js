function birdsInWeek(birdsPerDay, week) {
    let totalBirdsInSpecifiedWeek = 0
    if (week === 1) {
      for (let i = 0; i < 7; i++) {
        totalBirdsInSpecifiedWeek += birdsPerDay[i];
      } 
        console.log(totalBirdsInSpecifiedWeek)
    } else {
    for (let i = week * 7 - 7; i < week * 7; i++) {
      totalBirdsInSpecifiedWeek += birdsPerDay[i];
    }
    console.log(totalBirdsInSpecifiedWeek);
  };
  }

  birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1],2)