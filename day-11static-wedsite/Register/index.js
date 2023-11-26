function Register(event){
    event.preventDefault();
    // alert("Hi form register finction")
    // console.log("hiiii")


    var name = document.getElementById("name").value;  //assigngi
     console.log(name,"- name")
    var email = document.getElementById("email").value
    console.log(email,"- email")
    var password = document.getElementById("password").value
    console.log(password,"- password")

     
    if(!name || !email || !password){
        return alert("all fields are is required")   
        
    }
    var userData = {name:name , email, password}
    //  console.log("All fields are found")

     var users = JSON.parse(localStorage.getItem("Users")) || [];
     users.push(userData)

     localStorage.setItem("Users", JSON.stringify(users))


     var name = document.getElementById("name").value =" "
     var email = document.getElementById("email").value =""
     var password = document.getElementById("password").value =""

    

     alert("Registration Successfully.")

     window.location.href = './../Login/index.html'

    




}
