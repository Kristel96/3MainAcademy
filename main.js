// Objects
var user1= {
  id:1,
  firstName: "Khrystyna",
  secondName: "Rymar",
  gender: "female",
  dateOfBirth: "22/10/88"
};

var user2={
  id:2,
  firstName: "Orest",
  secondName: "P",
  gender: "male",
  dateOfBirth: "2/1/12"
};
var user3={
  id:3,
  firstName: "Olena",
  secondName: "Pall",
  gender: "female",
  dateOfBirth: "1/1/98"
};
var user4={
  id:4,
  firstName: "Ivan",
  secondName: "Ytrl",
  gender: "female",
  dateOfBirth: "1/1/98"
};

var userArray = [user1,user2,user3,user4];
console.log(userArray);
var userContainer = document.getElementById("usersContainer");


for(var i=0; i<userArray.length;i++){
  var currentUserObj = userArray[i];
  var currentElement = document.createElement("p");
  currentElement.innerHTML = currentUserObj.firstName + "<br>"+
      currentUserObj.secondName + "<br>"+currentUserObj.dateOfBirth;
  userContainer.appendChild(currentElement);
  var horzLine = document.createElement("hr");
  currentElement.appendChild(horzLine);
}

