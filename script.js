// DARK MODE

document.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});


// TASK MANAGER

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function renderTasks(){

const list =
document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

li.className=
"list-group-item";

li.innerHTML=
`${task}
<button
class="btn btn-sm btn-danger"
onclick="deleteTask(${index})">
Delete
</button>`;

list.appendChild(li);

});

}

function addTask(){

const input =
document.getElementById("taskInput");

if(input.value==="") return;

tasks.push(input.value);

saveTasks();

renderTasks();

input.value="";

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

renderTasks();


// ATTENDANCE

function calculateAttendance(){

const attended =
Number(document.getElementById("attended").value);

const total =
Number(document.getElementById("total").value);

let percent =
(attended/total)*100;

document.getElementById(
"attendanceResult"
).innerHTML=
`Attendance: ${percent.toFixed(2)}%`;

}


// TIMER

let time=1500;

let interval;

function startTimer(){

clearInterval(interval);

interval=setInterval(()=>{

let minutes=
Math.floor(time/60);

let seconds=
time%60;

document.getElementById("timer")
.innerHTML=
`${minutes}:${seconds<10?"0":""}${seconds}`;

time--;

if(time<0){

clearInterval(interval);

alert("Session Complete!");

}

},1000);

}

function resetTimer(){

clearInterval(interval);

time=1500;

document.getElementById("timer")
.innerHTML="25:00";

}


// QUOTES

const quotes=[

"Success is built daily.",

"Small progress is progress.",

"Stay consistent.",

"Dream. Plan. Execute.",

"One chapter at a time."

];

function newQuote(){

let random=
Math.floor(Math.random()*quotes.length);

document.getElementById("quote")
.innerHTML=
quotes[random];

}


// WEATHER API

async function getWeather(){

let city=
document.getElementById("city").value;

try{

const response=
await fetch(
`https://wttr.in/${city}?format=j1`
);

const data=
await response.json();

document.getElementById(
"weatherResult"
).innerHTML=
`${city}: ${data.current_condition[0].temp_C}°C`;

}
catch{

document.getElementById(
"weatherResult"
).innerHTML=
"City not found";

}

}


// PROGRESS TRACKER

document.getElementById(
"progressBar"
).addEventListener("input",function(){

document.getElementById(
"progressText"
).innerHTML=
this.value+"%";

});