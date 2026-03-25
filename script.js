// Weekly visitors chart

const visitChart=document.getElementById("visitChart");

if(visitChart){

new Chart(visitChart,{

type:'bar',

data:{
labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets:[{
label:'Visitors',
data:[18,25,14,22,30,27,20],
backgroundColor:'#1e88e5'
}]
}

});

}


// Monthly patient growth

const patientChart=document.getElementById("patientChart");

if(patientChart){

new Chart(patientChart,{

type:'line',

data:{
labels:['Jan','Feb','Mar','Apr','May','Jun'],
datasets:[{
label:'Patients',
data:[120,150,180,210,260,300],
borderColor:'#42a5f5',
backgroundColor:'rgba(66,165,245,0.3)',
fill:true
}]
}

});

}


// Patient search

function searchPatient(){

let input=document.getElementById("searchInput").value.toUpperCase();

let rows=document.querySelectorAll("table tr");

rows.forEach((row,index)=>{

if(index===0)return;

let id=row.cells[0].textContent;

row.style.display=id.includes(input)?"":"none";

});

}