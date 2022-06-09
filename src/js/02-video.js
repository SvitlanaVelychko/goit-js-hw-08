import throttle from "lodash.throttle";
import Vimeo from "@vimeo/player";

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);
player.on('timeupdate', throttle(onVideoCurrentTime, 1000));

const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
player.setCurrentTime(currentTime);

function onVideoCurrentTime(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}