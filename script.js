const fullnameInput = document.getElementById("fullname");
const phoneInput = document.getElementById("phone");
const saveBtn = document.getElementById("saveBtn");
const listPeople = document.getElementById("listPeople");
const searchInput = document.getElementById("search");

// initial people
var people = [];

//events
saveBtn.addEventListener("click",function(){
    if(fullnameInput.value === "" || phoneInput.value === ""){
        alert("Ad ve Telefon alanları zorunludur");
        return;
    }

    const newPerson = {
        fullname : fullnameInput.value,
        phone : phoneInput.value,
    };
    people.push(newPerson);
    listPeopleFunc(people);
    fullnameInput.value = "";
    phoneInput.value = "";

});
searchInput.addEventListener("keyup",function(event){
    var tempArray = people.filter((item)=>item.fullname.includes(event.target.value));
    listPeopleFunc(tempArray);
});

// function 

function listPeopleFunc(parametre){

   //  <div class="content">
   // <h3>Ahmet Çelik</h3>
   // <p>05555555555</p>
   // </div>
    listPeople.innerHTML = "";
    if (parametre.length === 0){
        listPeople.innerHTML = listPeople.innerHTML =
        "<p style='text-align:center;'>Gösterilecek Kayıt Yok</p>";
        
    } else{
        for (i = 0; i<parametre.length;i++){
            const div = document.createElement("div");
            div.classList.add("content");
            const h3 = document.createElement("h3");
            h3.innerText = parametre[i].fullname;
            const p = document.createElement("p");
            p.innerText = parametre[i].phone;
            div.appendChild(h3);
            div.appendChild(p);
            listPeople.appendChild(div);
           }
    }

}