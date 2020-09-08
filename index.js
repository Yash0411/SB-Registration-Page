

var counterskill = 1;
function addskill(divName){
    var newdiv = document.createElement('div');
    var newlink = document.createElement('div');
    newdiv.innerHTML = "Skill " + (counterskill + 1) + " <input type='text' name='skills[]'>";
    newlink.innerHTML = " Link To the Project " + " <input type='text' name='skilllinks[]'><br><br>";
    document.getElementById(divName).appendChild(newdiv);
    document.getElementById(divName).appendChild(newlink);
    counterskill++;    
}

var counterlanguage = 1;
function addlanguage(divName){
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Language " + (counterlanguage + 1) + " : <input type='text' name='languages[]'>";
    document.getElementById(divName).appendChild(newdiv);
    counterlanguage++;    
}

/*function getgit() {
    var l ={};
    fetch("https://api.github.com/users/bhavansh")
        .then(response=>response.json())
        .then(response=>{
            l["metadata"] = response;
            console.log(l)
        })
    
    
    console.log(l)
}

function loglang(){
    skillarr = [];
    var skill = document.getElementsByName('languages[]'); 
    for (var i = 0; i < skill.length; i++) { 
        skillarr.push(skill[i].value)     
    }
    console.log(skillarr)
}

function logskills(){
    skillarr = [];
    projectsforskills = []
    var skill = document.getElementsByName('skills[]'); 
    var link = document.getElementsByName('skilllinks[]'); 
    for (var i = 0; i < skill.length; i++) { 
        skillarr.push(skill[i].value)    
        projectsforskills.push(link[i].value)    
    }
    console.log(skillarr,skillarr)
}*/


async function postData(url, data) {
    // Default options are marked with *
    const obj = data;
  
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: body // body data type must match "Content-Type" header
      body: obj,
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }




const registrationform = document.getElementById("registrationform")

registrationform.addEventListener('submit', function(e) {
    e.preventDefault();

    skillarr = [];
    projectsforskills = []
    var skill = document.getElementsByName('skills[]'); 
    var link = document.getElementsByName('skilllinks[]'); 
    for (var i = 0; i < skill.length; i++) { 
        skillarr.push(skill[i].value)    
        projectsforskills.push(link[i].value)    
    }

    languagearr = []
    var languages = document.getElementsByName('languages[]'); 
    for (var i = 0; i < languages.length; i++) { 
        languagearr.push(languages[i].value)      
    }
    

    const use1r = new FormData(this);

    var user = {
        "email" : this.email.value,
        "password" : this.pass.value,
        "personal" : {
            "name" : this.name.value,
            "college" : this.college.value,
            "deptartment" : this.college.value,
            "year" : this.year.value,
            "division" : this.division.value,
            "rollno" : this.rollno.value,
        },
        "social": {
            "phone": this.phone.value,
            "linkedin": this.linkden.value,
            "github":this.github.value,
            "personalwebsite": this.personalsite.value,
            "resume": this.resume.value,
            "iswhatsaap": this.iswhatsapp.value
        }, 
        "skills":{
            "skills" : skillarr,
            "projectsforskills" : projectsforskills,
            "topskill": this.topskill.value,
            "primaryskill" : this.primaryskill.value,
            "secondaryskill" : this.secondaryskill.value,
            "cgpa": this.cgpa.value
        },
        "rating":this.rating.value,
        "optionals": {
            "introduction": this.introduction.value,
            "gender": this.gender.value,
            "age" : this.age.value,
            "mother_tongue": this.mothertongue.value,
            "languages_known" : languagearr
        },
        "metaData":{
        }
    };


    githublink = `https://api.github.com/users/${this.github.value.substr(this.github.value.lastIndexOf('/') + 1)}`
 
    fetch(githublink)
        .then(response=>response.json())
        .then(response=>{
            user["metaData"]["github_metadata_object"] = response;
        })
        .then((response) => {

            let url = "https://skboard.herokuapp.com/api/register/student";

            const res = postData(url, user);
            console.log(res);
           
        })
        .catch(console.log("Failed to get git data"))

})



/*function call(){
    fetch("https://skboard.herokuapp.com/api/student/all")
        .then(response=>response.json())
        .then(response => renderdata(response))
}

function add() {
    fetch("http://poultryerp.herokuapp.com/costumers",
{
    method:'POST',
    body:JSON.stringify({"cat": "Vendor",
    "name": "Costumer",
    "addr": "Address",
    "phno": "PhNo",
    "warehousesno": 2,
    "area": "234sft",
    "warehouses": [
      "Warehouse 1",
      "Warehouse 1"
    ],
    "totalamt": 0,
    "notranx": 0}),
    headers: {
            'Content-Type':'application/json'
    },
    credentials:'same-origin'
})

}*/

//init();
//https://skboard.herokuapp.com/api/student/all