const date = document.getElementById('date');
const calculateBtn = document.getElementById('CalculateBtn');

// console.log(date)
// console.log(CalculateBtn)


calculateBtn.addEventListener('click', () => {

  // git display box
  const box1 = document.getElementById('numValue1')
  const box2 = document.getElementById('numValue2')
  const box3 = document.getElementById('numValue3')

  // git birthday value
  const birthday = date.value;
  // console.log(birthday);

  if(!birthday) {
    alert('Please select a date');
    return;
  };

  // create new date Object
  const birthdayDate = new Date(birthday)


  // current date 
  const curretDate = new Date();


  // birthday details
  const yearOfBirthday = birthdayDate.getFullYear();
  const monthOfBirthday = birthdayDate.getMonth() + 1;
  const dayOfBirthday = birthdayDate.getDate();

  // currentDate date details
  const yearOfCurrentDate = curretDate.getFullYear();
  const monthOfCurrentDate = curretDate.getMonth() + 1;
  const dayOfCurrentDate = curretDate.getDate(); 


  // calculate age
  // Exeample: 10/ 30/ 2003
  let ageYears = yearOfCurrentDate - yearOfBirthday; // 21
  let ageMonths = monthOfCurrentDate - monthOfBirthday; // -1
  let ageDays = dayOfCurrentDate - dayOfBirthday; // -1


  // Adjust days and months if current date is before birthday date in the year
  if (ageDays < 0) {
    ageDays += 30; // Adjust days (approximation)
  }

  if (ageMonths < 0) {
    ageMonths += 12; // Adjust months
  }

  // Displaying values in boxes
  box1.textContent = `${ageYears}`;
  box2.textContent = `${ageMonths}`;
  box3.textContent = `${ageDays}`;
});