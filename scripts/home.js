let submit= document.getElementById("submit");
let SignUp_form= document.getElementsByClassName("SignUp_form");
submit.addEventListener("click", async function signup(event){
    event.preventDefault();

    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let isDoctor=document.getElementById("isDoctor").checked;

    let obj={username,email,password,isDoctor};

   let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/users`, {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }

   });
    let data= await res.json();
    console.log(data)
});


let lSubmit= document.getElementById("lSubmit");


lSubmit.addEventListener("click", async function getData(event){
    event.preventDefault();
    let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/users`)
  let  userData= await res.json();

  let flag= false;

  let lEmail= document.getElementById("lEmail").value;
let lPass= document.getElementById("lPass").value;

  for(let i=0;i<=userData.length-1;i++){
    if(userData[i].email==lEmail){
        flag=true;
        if(userData[i].password==lPass && userData[i].isDoctor==false){
            window.alert('Login Succesfully');
            window.location.href='appointment.html'
        }else if(userData[i].password==lPass && userData[i].isDoctor==true){
            window.alert('Login Succesfully');
            window.location.href='doctor.html'
        }
        else{
            window.alert('Login Failed'); 
        }
    }
    
  }
  if(flag==false){
    window.alert('Wrong Email'); 
  }

  lEmail.value="";
  lPass.value="";

})