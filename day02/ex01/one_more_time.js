#!/usr/bin/env node

const getDateValue = (arg, arr) => {
  let value = 0;
  let valid = false;

  for (var i = 0; !valid && i < arr.length; i += 1) {
    if (arr[i].name === arg) {
      valid = true;
      value = arr[i].value;
    }
  }
  return (value);
};

if (process.argv[2] != undefined) {
  const days = [
    { name: 'lundi', value: 1 },
    { name: 'mardi', value: 2 },
    { name: 'mercredi', value: 3 },
    { name: 'jeudi', value: 4 },
    { name: 'vendredi', value: 5 },
    { name: 'samedi', value: 6 },
    { name: 'dimanche', value:  7 }
  ];
  const months = [
    { name: 'janvier', value: 1 },
    { name: 'fevrier', value: 2 },
    { name: 'mars', value: 3 },
    { name: 'avril', value: 4 },
    { name: 'mai', value: 5 },
    { name: 'juin', value: 6 },
    { name: 'juillet', value: 7 },
    { name: 'aout', value: 8 },
    { name: 'septembre', value: 9 },
    { name: 'octobre', value: 10 },
    { name: 'novembre', value: 11 },
    { name: 'decembre', value: 12 }
  ];
  const date = process.argv[2].split(' ');

  if (date.length == 5 && getDateValue(date[0].toLowerCase(), days) != 0) {
    const time = new Date(Date.UTC(
      date[3],                                      // year
      getDateValue(date[2].toLowerCase(), months),  // month
      date[1],                                      // day
      date[4].substring(0,2),                       // hour
      date[4].substring(3,5),                       // minute
      date[4].substring(6,8)                        // second
    ));
    const parisTime = new Date(time.valueOf() - 60 * 60000);
    console.log(parisTime.getTime() / 1000);
  }
  else {
    console.log('Wrong Format');
  }
}
