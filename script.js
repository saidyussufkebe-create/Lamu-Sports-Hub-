const teams = [
    { name:"Utawala FC", mp:5, w:4, d:1, l:0, gf:10, ga:3, players:["Ali Hassan","Mohamed Yusuf","Said Ahmed"] },
    { name:"Lamu United", mp:5, w:3, d:1, l:1, gf:8, ga:5, players:["Abdi Omar","Salim Noor","Hamza Ali"] },
    { name:"Shela Stars", mp:5, w:1, d:2, l:2, gf:4, ga:7, players:["Khamis Ali","Rashid Suleiman","Bilal Said"] }
];

function calculateGD(t){return t.gf - t.ga;}
function calculatePts(t){return t.w*3+t.d;}

function loadStandings(){
    const tableBody = document.getElementById("tableBody"); tableBody.innerHTML="";
    teams.sort((a,b)=>calculatePts(b)-calculatePts(a));
    teams.forEach((t,i)=>tableBody.innerHTML+=`<tr><td>${i+1}</td><td>${t.name}</td><td>${t.mp}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td>${calculateGD(t)}</td><td>${calculatePts(t)}</td></tr>`);
}

function loadTeams(){
    const c=document.getElementById("teamsContainer"); c.innerHTML="";
    teams.forEach(t=>c.innerHTML+=`<div class="team-card" onclick="showTeamDetails('${t.name}')"><div class="team-logo"></div><h3>${t.name}</h3></div>`);
}

function showTeamDetails(name){
    const t=teams.find(x=>x.name===name);
    document.getElementById("teamDetails").innerHTML=`<h2>${t.name}</h2><p><strong>Played:</strong> ${t.mp}</p><p><strong>Wins:</strong> ${t.w}</p><p><strong>Players:</strong></p><ul>${t.players.map(p=>`<li>${p}</li>`).join("")}</ul>`;
    document.getElementById("teamModal").style.display="block";
}

function closeModal(){document.getElementById("teamModal").style.display="none";}
function showSection(id){document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active");}

loadStandings(); loadTeams();
