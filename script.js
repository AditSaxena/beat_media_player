
const videobtn = document.querySelector("#videobtn");
const videoInput = document.querySelector("#videoInput");
const main = document.querySelector("#main")



const videoBtnHandler=()=>{
    videoInput.click();
    console.log("Open button clicked");
}
videobtn.addEventListener("click", videoBtnHandler);

const acceptInputHandler = (obj) => {
    console.log("File selected");
    // console.log("obj",obj.target.files);
    const selectedVideo = obj.target.files[0];
    //src -> base64
    const link = URL.createObjectURL(selectedVideo);
    
    const videoElement = document.createElement("video");
    videoElement.src=link;
    videoElement.setAttribute("class", "video");
    videoElement.play();
    videoElement.controls="true";
    videoElement.volume = 0.3;
    //videoElement.muted=true;
    main.appendChild(videoElement);
}



videoInput.addEventListener("change", acceptInputHandler);


/**** volume and speed ****/ 
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector(".toast");

const speedUpHandler = ()=>{
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }

    if(videoElement.playbackRate > 3){
        return;
    }

    const increasedSpeed = videoElement.playbackRate + 0.5;
    console.log(increasedSpeed);
    videoElement.playbackRate = increasedSpeed;
    //toast show
    showToast(increasedSpeed+"x");
    
}

const speedDownHandler = ()=>{
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.playbackRate <= 0){
        return;
    }
    const decreasedSpeed = videoElement.playbackRate - 0.5;
    console.log(decreasedSpeed);
    videoElement.playbackRate = decreasedSpeed;
    showToast(decreasedSpeed+"x");
}


const volumeUpHandler = ()=>{
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume >= 0.99){
        return;
    }

    const increasedVolume = videoElement.volume + 0.1;
    console.log("Increased Volume: ",increasedVolume);
    videoElement.volume = increasedVolume;
    showToast(increasedVolume*100+"%");
}

const volumeDownHandler = ()=>{
    const videoElement = document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume <= 0.1){
        videoElement.volume = 0;
        return;
    }

    const decreasedVolume = videoElement.volume - 0.1;
    console.log("Decreased Volume: ",decreasedVolume);
    videoElement.volume = decreasedVolume;
    showToast(decreasedVolume*100+"%");
}


function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(()=> {
        toast.style.display = "none";
    }, 1000);
}
//identify on which event logic should trigger
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownHandler);
volumeUp.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);





/*********** controls ************/






const fullScreenHandler = ()=> {
    
}

const fullScreenElem = document.querySelector("#fullScreen");
fullScreenElem.addEventListener("click", fullScreenHandler);