function getgit() {
    var l ={};
    fetch("https://api.github.com/users/bhavansh")
        .then(response=>response.json())
        .then(response=>{
            l["metadata"] = response;
            console.log(l)
        })
    
    
    console.log(l)
}

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

/*function loglang(){
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

function adduser(use1r){   

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
    
    
    var user = {
        email : use1r.email.value,
        password : use1r.pass.value,
        Personal : {
            name : use1r.name.value,
            college : use1r.college.value,
            deptartment : use1r.college.value,
            year : use1r.year.value,
            division : use1r.division.value,
            rollno : use1r.rollno.value,
        },
        social: {
            phone: use1r.phone.value,
            linkedin: use1r.linkden.value,
            github:use1r.github.value,
            personalwebsite: use1r.personalsite.value,
            resume: use1r.resume.value,
            iswhatsaap: use1r.iswhatsapp.value
        }, 
        skills:{
            skills : skillarr,
            projectsforskills : projectsforskills,
            topskill: use1r.topskill.value,
            primaryskill : use1r.primaryskill.value,
            secondaryskill : use1r.secondaryskill.value,
            cgpa: use1r.cgpa.value
        },
        rating:4.5,
        Optionals: {
            introduction: use1r.introduction.value,
            gender: use1r.gender.value,
            age : use1r.age.value,
            mother_tongue: use1r.mothertongue.value,
            languages_known : languagearr
        },
    };

    githublink = `https://api.github.com/users/${use1r.github.value.substr(use1r.github.value.lastIndexOf('/') + 1)}`
 
    fetch(githublink)
        .then(response=>response.json())
        .then(response=>{
            user["metaData"] = response;
            alert(JSON.stringify(user))
        })
        .then((response) => {
            fetch("https://skboard.herokuapp.com/api/register/student",
            {
                method:'POST',
                body:JSON.stringify(user),
                headers: {
                        'Content-Type':'application/json'
                },
                credentials:'same-origin'
            })
            .then(alert(JSON.stringify(user)))
            .then(console.log(user))
            .catch(alert("Falied To post"))
        })
        .catch(console.log("Failed to get git data"))
    
    alert(JSON.stringify(user));
       
    
}



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