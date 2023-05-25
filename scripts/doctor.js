let form= document.getElementById("addApp");

form.onsubmit= async (event)=>{
event.preventDefault();

let name= form.name.value;
let image= form.image.value;
let specialization= form.spec.value;
let experience= +form.exp.value;
let location= form.loc.value;
let date= form.date.value;
let slots= +form.slots.value;
let fee= +form.fees.value;

let obj={name,image,specialization,experience,location,date,slots,fee};

let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/appointments`, {
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }

   });
    let data= await res.json();
    console.log(data)

}

async function getApp(){
    let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/appointments`)
    let  appData= await res.json();

    appendData(appData)
}
getApp();
let mainDiv= document.getElementById("mainDiv")

function appendData(myData){
mainDiv.innerHTML=null;

myData.forEach((el)=>{

    let row= document.createElement("tr");

    let name= document.createElement("td");
    name.textContent=el.name;
    let specialization= document.createElement("td");
    specialization.textContent=el.specialization;
    let experience= document.createElement("td");
    experience.textContent=el.experience;
    let location= document.createElement("td");
    location.textContent=el.location;
    let slots= document.createElement("td");
    slots.textContent=el.slots;
    let edit= document.createElement("button");
    edit.innerText="Edit";

    let deleteBtn= document.createElement("button");
  deleteBtn.setAttribute("data-id", el.id)
  deleteBtn.className="card-button";
  deleteBtn.innerText="Delete";

  deleteBtn.onclick= async()=>{
    let bookId= el.id;
    let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/appointments/${bookId}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    });
    let data= await res.json();
    getApp();
  }

  let appointment= document.createElement("button");
  appointment.innerText="Appointment";

    row.append(name,specialization,experience,location,slots,edit,deleteBtn,appointment)

    mainDiv.append(row)
})
}