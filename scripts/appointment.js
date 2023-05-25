let appData;
let page=1;
async function getApp(appData){
    let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/appointments?_page=${page}&_limit=4`)
     appData= await res.json();

    appendData(appData)
}
getApp(appData);

let prev= document.getElementById("prev");
let next= document.getElementById("next");

prev.addEventListener("click", function prevPage(){
 page--;
 getApp(appData);

})
next.addEventListener("click", function nextPage(){
 page++;
 getApp(appData);

})

let mainDiv= document.getElementById("container");

function appendData(myData){
mainDiv.innerHTML=null;

myData.forEach((el, index)=>{
    let card= document.createElement("div");

    let image= document.createElement("img");
    image.src= el.image

    let name= document.createElement("h3");
    name.textContent=el.name;
    let specialization= document.createElement("p");
    specialization.textContent=`specialization: ${el.specialization}`;
    let experience= document.createElement("p");
    experience.textContent=`experience: ${el.experience}`;
    let location= document.createElement("p");
    location.textContent=`location: ${el.location}`;
    let date= document.createElement("p");
    date.textContent=`date: ${el.date}`;
    let slots= document.createElement("p");
    slots.textContent=`slots: ${el.slots}`;
    let fee= document.createElement("p");
    fee.textContent=`fee: ${el.fee}`;

    let bookBtn= document.createElement("button");
    bookBtn.innerText="Book Now";

    card.append(image,name,specialization,experience,location,date,slots,fee,bookBtn)
    mainDiv.append(card);
})

}

function mySPChange(){
   
let mySp= document.getElementById("mySp").value;


    if(mySp==""){
        getApp(appData);

    } 
    else if(mySp!="" ){

        let getData2=async(appData)=>{
            apiUrl=`https://pear-brave-harp-seal.cyclic.app/appointments?specialization=${mySp}`
            
                try {
                    let res= await fetch(apiUrl);
        
            appData=await res.json();

                    appendData(appData)
                } catch (error) {
                    console.log("Error while fetching data");
                }
            }
            
            getData2(appData);

    }
}

async function mysort(){
    try {
        let res= await fetch(`https://pear-brave-harp-seal.cyclic.app/appointments?_sort=date&_order=asc`);

    appData=await res.json();

        appendData(appData)
    } catch (error) {
        console.log("Error while fetching data");
    }
}

