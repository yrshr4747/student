const API = "http://localhost:3000/api"

async function login(){

try{

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await fetch(API + "/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password})

})

const data = await res.json()

if(data.role === "faculty"){

window.location = "faculty.html"

}

else if(data.role === "student"){

window.location = "student.html"

}

else{

alert("Invalid login")

}

}

catch(err){

console.error(err)
alert("Login failed")

}

}



async function registerUser(){

try{

const username = document.getElementById("reg_username").value
const password = document.getElementById("reg_password").value
const role = document.getElementById("reg_role").value

const res = await fetch(API + "/register",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password,role})

})

const data = await res.json()

alert(data.message)

window.location = "login.html"

}

catch(err){

console.error(err)
alert("Registration failed")

}

}



async function createAssignment(){

try{

const title = document.getElementById("title").value
const course = document.getElementById("course").value
const due_date = document.getElementById("due_date").value
const description = document.getElementById("description").value

const res = await fetch(API + "/assignment/create",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({title,course,due_date,description})

})

const data = await res.json()

alert(data.message)

}

catch(err){

console.error(err)
alert("Failed to create assignment")

}

}



async function loadAssignments(){

try{

const res = await fetch(API + "/assignments")

const data = await res.json()

let output = ""

data.forEach(a => {

output += `<p>${a.title} - ${a.course}</p>`

})

document.getElementById("assignments").innerHTML = output

}

catch(err){

console.error(err)
alert("Failed to load assignments")

}

}



async function submitAssignment(){

try{

const student_name = document.getElementById("student_name").value
const assignment_title = document.getElementById("assignment_title").value
const answer = document.getElementById("answer").value

const res = await fetch(API + "/submit",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

student_name,
assignment_title,
answer,
submission_date:new Date(),
status:"Submitted",
marks:0

})

})

const data = await res.json()

alert(data.message)

}

catch(err){

console.error(err)
alert("Submission failed")

}

}



async function viewSubmissions(){

try{

const res = await fetch(API + "/submissions")

const data = await res.json()

let output = ""

data.forEach(s => {

output += `<p>${s.student_name} - ${s.assignment_title} - ${s.answer}</p>`

})

document.getElementById("submissions").innerHTML = output

}

catch(err){

console.error(err)
alert("Failed to load submissions")

}

}