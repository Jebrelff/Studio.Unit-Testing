const launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],

  launchOutput(number) {
    /* mentioned approach 1 */
    // if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
    //   return 'LaunchCode Rocks!';
    // } else if (number % 2 === 0 && number % 3 === 0) {
    //   return 'LaunchCode!';
    // } else if (number % 2 === 0 && number % 5 === 0) {
    //   return 'Launch Rocks! (CRASH!!!!)';
    // } else if (number % 3 === 0 && number % 5 === 0) {
    //   return 'Code Rocks!';
    // } else if (number % 2 === 0) {
    //   return 'Launch!';
    // } else if (number % 3 === 0) {
    //   return 'Code!';
    // } else if (number % 5 === 0) {
    //   return 'Rocks!';
    // } else {
    //   return "Rutabagas! That doesn't work.";
    // }

    /* mentioned approach 2 */
    const conditions = [
      { divisor: 2, output: 'Launch' },
      { divisor: 3, output: 'Code' },
      { divisor: 5, output: 'Rocks' },
    ];

    let result = '';

    for (const condition of conditions) {
      if (number % condition.divisor === 0) {
        if(result !== '' && condition.divisor === 5) result += ' ';
        result += condition.output;
      }
    }

    if(result === 'Launch Rocks') result += '! (CRASH!!!!)';
    else result += '!';

    return result.length > 1 ? result : "Rutabagas! That doesn't work.";
  }
};

module.exports = launchcode;
