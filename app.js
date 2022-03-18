import Alert from "./src/alert.js";
import Store from "./src/store.js";
const allStaffFrom=document.getElementById("allStaffFrom");
const sms=document.querySelector(".allert");
const stafflist=document.getElementById("staff-list");
allStaffFrom.addEventListener("submit",function(e){
e.preventDefault();
let from_data=new FormData(e.target)
let data=Object.fromEntries(from_data.entries());
let { name ,cell ,location , photo}=data
if(name=="" || cell=="" || location=="" ){
   sms.innerHTML=Alert.danger("All frield are required");

}
else{
    Store.set("staff",data);
    allStaffFrom.reset();
    getAllStaffData();
}

});
getAllStaffData();
function getAllStaffData(){
    let list="";
let data=Store.get("staff");
data.map((data, index)=>{
    let {name,cell,location,photo}=data
list +=`
<tr>
<td scope="row">${index + 1}</td>
<td>${name}</td>
<td>${cell}</td>
<td>${location}</td>
<td>
  <img
    class="img-fluid rounded-circle"
    src="${photo}"
    style="width: 50px; height: 50px; object-fit: cover"
    alt=""
  />
</td>
<td>
  <button class="btn btn-primary btn-sm"  onclick="habijabi(${index}) "><i class="fa fa-eye"></i></button>
  <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i></button>
  <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
</td>
</tr>

`;

});
stafflist.innerHTML=list;
}
/**
 * veiew
 */
 function habijabi(id){
  console.log(id);

}