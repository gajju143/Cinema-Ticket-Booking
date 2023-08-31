
document.querySelector(".btn1").addEventListener("click",function(){
  let input = document.getElementById("username").value;
  let length = input.length;
  let pass = document.getElementById("password").value;
  if (length < 5){
    alert("Please enter the correct username");
    document.querySelector(".detail").setAttribute("method", "get");
    document.querySelector(".detail").setAttribute("action", "index.html");
  }
  else if (pass !== "abc"){
    alert("Please check the password or try the password abc");
    document.querySelector(".detail").setAttribute("method", "get");
    document.querySelector(".detail").setAttribute("action", "index.html");

  }

});
