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

  // create new date Object
  const birthdayDate = new Date(birthday)
  // console.log(birthdayDate)

  // current date 
  const curretDate = new Date();
  // console.log(curretDate)

  // calculate the date between birthday date and current date
  // birthday
  const yearOfBirthday = birthdayDate.getFullYear();
  const monthOfBirthday = birthdayDate.getMonth();
  const dateOfBirthday = birthdayDate.getDay();

  // currentDate 
  const yearOfCurrentDate = curretDate.getFullYear();
  const monthOfCurrentDate = curretDate.getMonth();
  const dayOfCurrentDate = curretDate.getDate(); 


  // adding values into the boxes
  const boxOneValue = yearOfBirthday - dayOfCurrentDate;
  box1.textContent = boxOneValue;

  





});