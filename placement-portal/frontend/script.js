const API="http://localhost:3000/api"


async function registerStudent(){

const name=document.getElementById("name").value
const roll_no=document.getElementById("roll_no").value
const username=document.getElementById("username").value
const password=document.getElementById("password").value
const department=document.getElementById("department").value
const cgpa=document.getElementById("cgpa").value
const skills=document.getElementById("skills").value

const res=await fetch(API+"/student/register",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({
name,
roll_no,
username,
password,
department,
cgpa,
skills
})

})

const data=await res.json()

alert(data.message)

}



async function loadCompanies(){

const res=await fetch(API+"/companies")

const data=await res.json()

let options=""

data.forEach(c=>{
options+=`<option value="${c.company_name}">
${c.company_name} - ${c.role}
</option>`
})

document.getElementById("companyList").innerHTML=options

}



async function applyJob(){

const student_name=document.getElementById("student_name").value
const company=document.getElementById("companyList").value

const res=await fetch(API+"/apply",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({

student_name,
company,
status:"Applied",
application_date:new Date()

})

})

const data=await res.json()

alert(data.message)

}



async function addCompany(){

const company_name=document.getElementById("company_name").value
const role=document.getElementById("role").value
const min_cgpa=document.getElementById("min_cgpa").value
const package=document.getElementById("package").value

const res=await fetch(API+"/company/add",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
company_name,
role,
min_cgpa,
package
})

})

const data=await res.json()

alert(data.message)

}



async function login(){

const username=document.getElementById("username").value
const password=document.getElementById("password").value

const res=await fetch(API+"/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password})

})

const data=await res.json()

if(data.role==="admin"){
window.location="admin.html"
}

else if(data.role==="student"){
window.location="companies.html"
}

else{
alert("Invalid credentials")
}

}