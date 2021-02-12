class Game{
    teams: Array<Team>=[];
    currentTeam:Team;
    constructor()
    {

        for(let index=0; index<2;index++)

        {

            this.teams.push(new Team(index))

        }

        this.currentTeam= this.teams[0];

    }

 

}

 

class Team

{

    id: number;

    players:Array<Player>=[];

    score:number;

    currentPlayer: Player;

 

    constructor(id:number)

    {

        this.id=id;

        for( let index=0;index<10;index++)

        {

            this.players.push(new Player(index,this))

        }

        this.currentPlayer= this.players[0];

    } 

    changePlayer(){

        this.currentPlayer=this.players[this.currentPlayer.id+1]

    }

}

 

class Player{

    id: number;

    score: number=0;

    balls: number=0;

    ballScore: Array<number>=[0,0,0,0,0,0]

    belongsToTeam:Team;

    constructor(id: number, team:Team)

    {   this.id=id;

        this.belongsToTeam=team;

    }

    ballhit()

    {

        let ranRun = Math.floor(Math.random()*7);

        if (ranRun==0||this.balls==7){

            this.belongsToTeam.changePlayer()

            console.log("Player Changed")

        }

        else{

        console.log(ranRun)

        this.ballScore[this.balls]= ranRun;

        this.score=this.score+ ranRun;

        this.balls++

        }

    }

}

let ind:string=null;
function tablefill()
{
    for(let a=1;a< 3;a++)
    { ind=String(a);
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
}

let game= new Game();

document.getElementById("create-game").addEventListener("click",() => {

   // game= new Game();
    tablefill();
    console.log(game)

})

 

document.getElementById("team1-hit").addEventListener("click",()=>{

    game.currentTeam.currentPlayer.ballhit();

    console.log(game)

})

document.getElementById("team2-hit").addEventListener("click",()=>{

    game.currentTeam.currentPlayer.ballhit();

    console.log(game)

})