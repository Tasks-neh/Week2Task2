class Game {
    constructor() {
        this.teams = [];
        for (let index = 0; index < 2; index++) {
            this.teams.push(new Team(index));
        }
        this.currentTeam = this.teams[0];

    }
    changeTeam(){
        this.currentTeam=this.teams[this.currentTeam.id+1]
    }
}
let table
class Team {
    constructor(id) {
        this.players = [];
        this.id = id;
        for (let index = 0; index < 10; index++) {
            this.players.push(new Player(index, this));
        }
        this.currentPlayer = this.players[0];
    }
    changePlayer() {
        
        this.currentPlayer = this.players[this.currentPlayer.id + 1];
    }
}
class Player {
    constructor(id, team) {
        this.score = 0;
        this.balls = 0;
        this.ballScore = [0, 0, 0, 0, 0, 0];
        this.id = id;
        this.belongsToTeam = team;
    }
    ballhit() {
        let ranRun = Math.floor(Math.random() * 7);
        if (ranRun == 0 || this.balls == 6) {
            if(ranRun==0)
            {table.rows[this.id+1].cells[this.balls+1].innerHTML=ranRun;}
           if(this.id+1==10){
game.changeTeam();}
            this.belongsToTeam.changePlayer();
            console.log("Player Changed");
            
        }
        else {
            console.log(ranRun);
            table.rows[this.id+1].cells[this.balls+1].innerHTML=ranRun;
            this.ballScore[this.balls] = ranRun;
            this.score = this.score + ranRun;
            this.balls++;
        }
    }
}

let ind
/*
function tablefill()
{
    for(let a=1;a< 3;a++)
    {
        for(let i=0;i<10;i++){
            ind+=String(i);
            for( let j=0;j<7;j++){
                let chd=document.createAttribute("id",ind+""+j);
                chd.innerHTML="";
                document.getElementById(ind).appendChild(chd)
            }
            ind=String(a);
        }
    }
}*/
let game= new Game();
document.getElementById("create-game").addEventListener("click", () => {
    //game 
   // tablefill();
    console.log(game);
});
/*var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("timer").value =60 - timeleft;
  timeleft -= 1;
}, 1000);
*/

var timer=60;
setInterval(()=>{
this.timer--;
document.getElementById("timer").innerHTML=this.timer;
if(timer<0)
   timer=60;
},1000)



document.getElementById("gen").addEventListener("click", () => {
  let tm1=0;
  let ma1x=0;
  let nam1e = "";
   for(let i=0;i<10;i++)
   {
       tm1  = tm1+ game.team[0].players[i].score;
       if(ma1x< game.team[0].players[i].score)                   
        {
            ma1x =  game.team[0].players[i].score;
            nam1e =  "Player" + game.team[0].players[i].id;
        }
    }
  let tm2=0;
  let ma2x=0;
  let nam2e = "";

   for(let i=0;i<10;i++)
   {
       tm2  = tm2+ game.team[1].players[i].score;
       if(max< game.team[1].players[i].score)                   
       {
           ma2x =  game.team[1].players[i].score;
           nam2e =  "Player" + game.team[1].players[i].id;
        }
   }

   if(tm1>tm2)
   {
       document.getElementById('team_name').innerHTML="Team1";
       document.getElementById('maxplay').innerHTML =ma1x;
   }
    else
    {
    document.getElementById('team_name').innerHTML="Team2";
    document.getElementById('maxplay').innerHTML =ma2x;
    }
});

document.getElementById("team1-hit").addEventListener("click", () => {
    table = "";
    table = document.getElementById('table1');
    game.currentTeam.currentPlayer.ballhit();
    
    console.log(game);
});
document.getElementById("team2-hit").addEventListener("click", () => {
    table = "";
    table = document.getElementById('table2');
    game.currentTeam.currentPlayer.ballhit();
    
    console.log(game);
});