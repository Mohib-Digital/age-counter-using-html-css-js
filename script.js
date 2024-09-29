const date = document.getElementById('date');
const calculateBtn = document.getElementById('CalculateBtn');

// console.log(date)
// console.log(CalculateBtn)


calculateBtn.addEventListener('click', () => {

  // git display box
  const box1 = document.getElementById('box1')
  const box2 = document.getElementById('box2')
  const box3 = document.getElementById('box3')

  // git birthday value
  const birthday = date.value;
  // console.log(birthday);

  if(!birthday) {
    alert('Please select a date');
    return;
  };

  // create new date Object
  const birthdayDate = new Date(birthday)
  // console.log(birthdayDate)

  // current date 
  const curretDate = new Date();
  // console.log(curretDate)

  // birthday details
  const yearOfBirthday = birthdayDate.getFullYear();
  const monthOfBirthday = birthdayDate.getMonth() + 1;
  const dayOfBirthday = birthdayDate.getDay();

  // currentDate date details
  const yearOfCurrentDate = curretDate.getFullYear();
  const monthOfCurrentDate = curretDate.getMonth() + 1;
  const dayOfCurrentDate = curretDate.getDate(); 


  // calculate age
  let ageYears = yearOfCurrentDate - yearOfBirthday;
  let ageMonths = monthOfCurrentDate - monthOfBirthday;
  let ageDays = dayOfCurrentDate - dayOfBirthday;


  





});