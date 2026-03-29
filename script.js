document.getElementById("button").addEventListener("click", function() {
  let date_birth = document.getElementById("input1").value;
  let current_date = document.getElementById("input2").value;

  let birth = new Date(date_birth);
  let current = new Date(current_date);

  let age = current.getFullYear() - birth.getFullYear();

  let m = current.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && current.getDate() < birth.getDate())) {
    age--;
  }

  alert("You are " + age + " years old!");
});