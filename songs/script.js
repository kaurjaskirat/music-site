console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Ae Dil Hai Mushkil", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tum Hi Ho", filePath: "songs/2.mp3", coverPath: "covers/2.webp"},
    {songName: "Agar Tum Saath Ho", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Humdard", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kesariya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mast Magan", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Shayad", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tujhe Kitna Chahne", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Zaalima", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tera Yaar Hoon Main", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Ankhiyan", filePath: "11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Dilbar", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Hauli Hauli", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Morni Banke", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Kala Chashma", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Garmi", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "La La La", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Mai Tera Boyfriend", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Mile Ho Tum Humko", filePath: "songs/19.mp3", coverPath: "covers/19.jpeg"},
    {songName: "O Saki Saki", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Kar Gayi Chull", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "DJ Wale Babu", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Garmi", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Jugnu", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "Paani Paani", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Proper Patola", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Saturday Saturday", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "She Move It Like", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Mercy", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Tareefan", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})