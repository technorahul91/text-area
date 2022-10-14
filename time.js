
setInterval(() => {
    const time = document.querySelector("#time")
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }

    if (sec < 10) {
        sec = `0${sec}`;
    }

    time.textContent =  `${hours}:${mins}:${sec}`  ;
}

)

export default setInterval;
