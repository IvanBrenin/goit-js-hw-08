
import player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe')
const vimeoPlayer = new player(iframe)


vimeoPlayer.on('timeupdate', throttle(videoTimeUpdate, 1000));

const currentTime = Number(localStorage.getItem("videoplayer-current-time"));

vimeoPlayer.setCurrentTime(currentTime).then(function(seconds) {
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          
            break;
        default:
     
            break;
    }
});

function videoTimeUpdate(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)
}