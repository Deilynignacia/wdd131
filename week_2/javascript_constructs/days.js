const DAYS = 6;
const options = { weekday: 'long' };
const today = new Date();

let i = 1;
while (i <= DAYS) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i);

  let day = new Intl.DateTimeFormat('en-US', options).format(nextDay);
  console.log(day);
  i++;
}
