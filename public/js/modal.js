// modal
const modal = document.getElementById("modal");
const modalWindow = document.querySelector(".modal-window");
const btnModal = document.querySelectorAll(".album-box");
const albumImg = document.querySelector(".content-image");
const detailTrack= document.querySelector(".detail-track");
const albumTitle = document.querySelector("p.album-title");
const albumSubTitle = document.querySelector("p.album-sub-title");

const audioAlbumImg = document.querySelector(".audio-album-img");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const audioConatiner = document.getElementById("audio-container");

const modalTrackPlayBtn = document.querySelector(".modalTrack-PlayBtn");
let temp = "temp";
let temp2 = "temp2";

const mainDetailBtn = document.querySelectorAll("button.btn--detail");
for(let i=0; i<mainDetailBtn.length; i++){
  mainDetailBtn[i].addEventListener("click", function(e){
    console.log(e.target.parentNode.parentNode.querySelector("h1"));
    
    document.querySelector("main").style.opacity="0.5";
    audioConatiner.style.opacity = "1";


    modal.style.visibility = "initial";
    modalWindow.setAttribute("style","transform:scale(1,1);");
    audioConatiner.setAttribute("style","visibility:initial; transform:scaleX(1);" )

    for(let i=0; i<btnModal.length; i++){
        if(btnModal[i].getAttribute("name")===e.target.parentNode.parentNode.querySelector("h1").textContent && btnModal[i].className==="album-box"){
            const clickImage = btnModal[i].style.backgroundImage;
        
            albumImg.setAttribute("style", `background-image:${clickImage};`)

            let nameText = btnModal[i].getAttribute("name");
            const albumName = document.querySelector(".al-name");
            albumName.textContent = nameText;

            let singerText = btnModal[i].getAttribute("artist");
            const singer = document.querySelector(".singer");
            singer.textContent = singerText;

            let dateText = btnModal[i].getAttribute("date");
            const date = document.querySelector(".date");
            date.textContent = dateText;

            let infoText = btnModal[i].getAttribute("info");
            const info = document.querySelector(".info");
            info.textContent = infoText;

            let infosubText = btnModal[i].getAttribute("info-sub");
            const infosub = document.querySelector(".info-sub");
            infosub.textContent = infosubText;
            
            detailTrack.textContent="";
            progress.style.width = "0%";
            for(let j=0; j<btnModal[i].getAttribute("track-len"); j++){
                const trackInfo = document.createElement("div");
                trackInfo.setAttribute("class", "track-info");
                trackInfo.setAttribute("singer", singerText);
    
                const trackTitle = document.createElement("div");
                trackTitle.setAttribute("class", "track-title");
                trackTitle.addEventListener("click", function(e){
                    
                    
                    
                    trackTitle.parentNode.children[0].checked = true;
                    temp = trackTitle.textContent;
                    console.log(temp);
                    
                })
                
    
                const trackSinger = document.createElement("div");
                trackSinger.setAttribute("class", "track-singer");
                const trackTime = document.createElement("div");
                trackTime.setAttribute("class", "track-time");
                const trackCheck = document.createElement("div");
                trackCheck.setAttribute("class","track-check");
                const trackCheckBox = document.createElement("input");
                trackCheckBox.setAttribute("class","track-checkBox");
    
                trackCheckBox.setAttribute("type","radio");
                trackCheckBox.setAttribute("name","radio-box");
    
                detailTrack.append(trackInfo);
        
                trackInfo.append(trackCheck);
                trackCheck.append(trackCheckBox);
                trackCheck.append(trackTitle);
    
                trackInfo.append(trackSinger);
                trackInfo.append(trackTime);
                
                const trackCheckBoxAll = document.querySelectorAll("input.track-checkBox");
                trackCheckBoxAll[0].checked = true;
               
                trackCheckBox.addEventListener("click", function(e){
                    temp = btnModal[i].parentNode.children[1].textContent;
                    console.log(temp);
                })
                
                
                
    
                detailTrack.children[j].querySelector(".track-title").textContent=btnModal[i].getAttribute(`track-title${j}`);  
                detailTrack.children[j].querySelector(".track-time").textContent=btnModal[i].getAttribute(`track-time${j}`); 
    
            }
        }
    }

  })
}

for(let i=0; i<btnModal.length; i++){
    btnModal[i].addEventListener("click", function(e) {
        modal.style.display = "flex"
        document.querySelector("main").style.opacity="0.5";
        audioConatiner.style.opacity = "1";

        const clickImage = e.target.style.backgroundImage;
        
        // const img = document.createElement("img");
        albumImg.setAttribute("style", `background-image:${clickImage}; background-size: cover; background-position: center; background-repeat: no-repeat;`)
        // img.src = img.src.substring(32,);
        // img.src = img.src.replace("%22)","");
        // albumImg.append(img);
        

        let nameText = e.target.getAttribute("name");
        const albumName = document.querySelector(".al-name");
        albumName.textContent = nameText;

        let singerText = e.target.getAttribute("artist");
        const singer = document.querySelector(".singer");
        singer.textContent = singerText;

        let dateText = e.target.getAttribute("date");
        const date = document.querySelector(".date");
        date.textContent = dateText;

        let infoText = e.target.getAttribute("info");
        const info = document.querySelector(".info");
        info.textContent = infoText;

        let infosubText = e.target.getAttribute("info-sub");
        const infosub = document.querySelector(".info-sub");
        infosub.textContent = infosubText;
        
        detailTrack.textContent="";
        progress.style.width = "0%";

        modal.style.visibility = "initial";
        modalWindow.setAttribute("style","transform:scale(1,1);");
        audioConatiner.setAttribute("style","visibility:initial; transform:scaleX(1);" )

        for(let j=0; j<e.target.getAttribute("track-len"); j++){
            const trackInfo = document.createElement("div");
            trackInfo.setAttribute("class", "track-info");
            trackInfo.setAttribute("singer", singerText);

            const trackTitle = document.createElement("div");
            trackTitle.setAttribute("class", "track-title");
            trackTitle.addEventListener("click", function(e){
                
                
                
                trackTitle.parentNode.children[0].checked = true;
                temp = trackTitle.textContent;
                console.log(temp);
                
            })
            

            const trackSinger = document.createElement("div");
            trackSinger.setAttribute("class", "track-singer");
            const trackTime = document.createElement("div");
            trackTime.setAttribute("class", "track-time");
            const trackCheck = document.createElement("div");
            trackCheck.setAttribute("class","track-check");
            const trackCheckBox = document.createElement("input");
            trackCheckBox.setAttribute("class","track-checkBox");

            trackCheckBox.setAttribute("type","radio");
            trackCheckBox.setAttribute("name","radio-box");

            detailTrack.append(trackInfo);
    
            trackInfo.append(trackCheck);
            trackCheck.append(trackCheckBox);
            trackCheck.append(trackTitle);

            trackInfo.append(trackSinger);
            trackInfo.append(trackTime);
            
            const trackCheckBoxAll = document.querySelectorAll("input.track-checkBox");
            trackCheckBoxAll[0].checked = true;
           
            trackCheckBox.addEventListener("click", function(e){
                temp = e.target.parentNode.children[1].textContent;
                console.log(temp);
            })
            
            
            

            detailTrack.children[j].querySelector(".track-title").textContent=e.target.getAttribute(`track-title${j}`);  
            detailTrack.children[j].querySelector(".track-time").textContent=e.target.getAttribute(`track-time${j}`); 

        }
    }) 
}



const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", e => {
    modal.style.visibility = "hidden"
    audioConatiner.style.visibility="hidden";

    document.querySelector("main").style.opacity="1";
    
    albumImg.innerHTML="";
    albumTitle.textContent ="";
    albumSubTitle.textContent="";
    audioAlbumImg.style.backgroundImage="";

    if(audioConatiner.contains(document.querySelector("audio"))){
        audioConatiner.querySelector("audio").remove();
    }
    
    audioControl.querySelector("li.play").classList.remove("hidden");
    audioControl.querySelector("li.pause").classList.add("hidden");

    
    modalWindow.setAttribute("style","transform:; transition:0s");
    audioConatiner.setAttribute("style","transform:; transition:0s" );
})


// audio control bar




const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

const audio = document.createElement("audio");

const audioControl = document.querySelector("ul.control")

const audioArr = ["cardio", "groove", "happy", "light", "lily", "limes", "pop", "swing"];

//play
playBtn.addEventListener("click",function(e){
    
    
    if(playBtn.parentNode.parentNode.querySelector("audio")===null){
        console.log("재생x");
    }else{
        audio.play();
        audioControl.querySelector("li.play").classList.add("hidden");
        audioControl.querySelector("li.pause").classList.remove("hidden");
    }
    // audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
    // playBtn.parentNode.parentNode.append(audio);
    // audio.play();

    audio.addEventListener("timeupdate", updateProgress); 
    

   
    

})

//pause
pauseBtn.addEventListener("click", function(){
    audio.pause();
    audioControl.querySelector("li.pause").classList.add("hidden");
    audioControl.querySelector("li.play").classList.remove("hidden");
})
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPer = (currentTime / duration) * 100;
    
    progress.style.width = `${progressPer}%`;
    if(progressPer===100){
        audioControl.querySelector("li.play").classList.remove("hidden");
        audioControl.querySelector("li.pause").classList.add("hidden");
        audio.currentTime = 0;
    }
}

function changeProgress(e){

    const width = document.querySelector("main").clientWidth;
    const offsetx = e.offsetX;
    const duration = audio.duration; //전체길이
    

    audio.currentTime =(offsetx / width) * duration; //현재길이
}

progressContainer.addEventListener("click", changeProgress);


//modalTrackPlayBtn
modalTrackPlayBtn.addEventListener("click", function(e){
   const test =e.target.parentNode.parentNode.querySelector(".detail-track").querySelectorAll(".track-info"); 
   
   audioAlbumImg.style.backgroundImage="";
   temp2 =document.querySelector(".album-title").textContent;
   for(let i=0; i<test.length; i++){
    if(test[i].querySelector(".track-check").querySelector(".track-checkBox").checked){
        
        albumTitle.textContent = test[i].querySelector(".track-check").querySelector(".track-checkBox").parentNode.children[1].textContent;
        albumSubTitle.textContent = test[i].getAttribute("singer");
        temp = test[i].querySelector(".track-check").querySelector(".track-checkBox").parentNode.children[1].textContent;
        
        audioAlbumImg.style.backgroundImage = albumImg.parentNode.parentNode.children[1].children[0].style.backgroundImage;
    }
   }
   
   if(playBtn.parentNode.parentNode.querySelector("audio")===null){
    audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
    playBtn.parentNode.parentNode.append(audio);  
    audio.play();
    
    }else if(temp!=temp2){
        console.log("다름");
        
        //기존 오디오 지워버리고 
        audioConatiner.querySelector("audio").remove();
        audio.setAttribute("src", `./music/${audioArr[Math.floor(Math.random()*8)]}.mp3`);
        playBtn.parentNode.parentNode.append(audio);  
        audio.play();

        //새로 음악 시작
    }
    else if(temp==temp2){
        // console.log("같음");
        
    }else{
        audio.play();
    }
    audio.addEventListener("timeupdate", updateProgress); 
    audioControl.querySelector("li.pause").classList.remove("hidden");
    audioControl.querySelector("li.play").classList.add("hidden");
})
