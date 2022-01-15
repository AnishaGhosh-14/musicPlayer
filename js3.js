

function hide()
{
    let arrow = document.getElementById('arrow');
    let slide = document.getElementById('slidebar');

    if(slide.style.display!='none'){
        slide.style.display='none';

    }
    
    else{

        
{
    
    slide.style.display='block';}}}

let songIndex=0;
let audioElement= new Audio('songs3/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myprogressBar');
let masterSongName= document.getElementById('masterSongName');
let gif = document.getElementById('gif');
gif.style.opacity=0;
let songs3=[ 
 { SongName:"Abhi Kuch Dino se - Mohit Chauhan", filePath:"songs3/1.mp3"},
 { SongName:"Back To You - Selena Gomez", filePath:"songs3/2.mp3"},
 { SongName:"Photograph - Ed Sheeran", filePath:"songs3/3.mp3"},
{ SongName:"What If I Told you - Johnny Orlando , Mackenzie Ziegler" ,filePath:"songs3/4.mp3"}, 
{ SongName:"Anjaana Anjaani - Nikhil D'Souza & Monali" ,filePath: "songs3/5.mp3"},

 ] 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
       console.log('timeupdate');

       //update seekbar

       progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
      myprogressBar.value=(progress);
     
})
 myprogressBar.addEventListener('change' ,()=>{
     audioElement.currentTime =myprogressBar.value * audioElement.duration/100;
 })


 const makeAllPlays=()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
     });
 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src= `songs3/${songIndex}.mp3`;
     masterSongName.innerHTML= songs3[songIndex-1].SongName
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle')
      masterPlay.classList.add('fa-pause-circle');

 })
})

document.getElementById('next').addEventListener('click' ,()=>{
if(songIndex>=5){
    songIndex=1;
}
//    if(progress==100)
//    {
//      songIndex+1
//    }
else{
    songIndex+=1;
}
audioElement.src= `songs3/${songIndex}.mp3`;
masterSongName.innerHTML= songs3[songIndex-1].SongName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' ,()=>{
if(songIndex<=1){
    songIndex=5;
}
else{
    songIndex-=1;
}
audioElement.src= `songs3/${songIndex}.mp3`;
masterSongName.innerHTML= songs3[songIndex-1].SongName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle');

})
console.log('helooo');
songIndex=1;
audioElement.addEventListener('ended' ,()=>{
console.log('helooo');
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
if(progress==100)
{
    songIndex+=1;
}
if(songIndex>=4)
{
    songIndex=1
}

console.log(songIndex);
audioElement.src= `songs3/${songIndex}.mp3`;
masterSongName.innerHTML= songs3[songIndex-1].SongName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle')
masterPlay.classList.add('fa-pause-circle');

})

