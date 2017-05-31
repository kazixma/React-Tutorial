export default class HighscoreStorage{
    highscore = [];

    add(name,score){
        this.highscore.push({name,score})
        this.highscore.sort((a,b)=>{

            return b.score - a.score;
        });

    }

    cap(limit){


    }


}