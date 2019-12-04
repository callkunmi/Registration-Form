var x=3; y=7;

console.log("value of x+y=" +(x!=y));

var  foodArray =["pizza", "Rice"];
var numberArray=[1,2]
console.log(foodArray);
foodArray.push("Burger");
console.log(foodArray);
console.log(foodArray.length);

//JSON
var  user= [{
    username: "Akinkunmi",
    password: 12345
},
    {
        username: "Oluwaseun",
        password: 4569

    }
];
console.log(user.username);
//creating functions
function getUsername(userobject) {
    return userobject.username;
}
console.log(getUsername(user[0]));

function  getRandomPassword() {
    var  password = Math.random();
    return password;

}
var userPassword = getRandomPassword();
user[0].password= userPassword.toString();

//DOM
var firstName = document.getElementById("firstNameId");
console.log(firstName.value);
//By name
 var inputs = document.getElementsByName("address");
 console.log(inputs);


 var formDiv =document.getElementById("para");
 formDiv.innerHTML="<p> This is the Registration form";
