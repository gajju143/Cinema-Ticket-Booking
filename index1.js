


document.querySelector(".btn").addEventListener("click", function(){
  let user  = document.getElementById("btn0").value;
  let length = user.length;
  let firstName = document.getElementById("input0").value;
  let length1 = firstName.length;
  if (length < 5){
    alert("Minimum length of the username must have 5 characters");
    document.querySelector(".detail0").setAttribute("method", "get");
    document.querySelector(".detail0").setAttribute("action", "index1.html");
  }

  else if (length1 < 4){
    alert("Enter the first name correctly");
    document.querySelector(".detail0").setAttribute("method", "get");
    document.querySelector(".detail0").setAttribute("action", "index1.html");
  }

});
