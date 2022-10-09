var maxNum = 500;
function textCount(textField, showCount) {
    if (textField.value.length > maxNum) {
        textField.value = textField.value.substring(0, maxNum);
    }
    else {
        showCount.value = maxNum - textField.value.length;
    }
    return textCount();
}


/*
setTimeout(function () {
    window.location.reload(1);
}, 1000);

*/



setInterval(()=>{
    const time=document.querySelector("#time")
    let date= new Date();
    let hours= date.getHours();
    let mins= date.getMinutes();
    let sec=date.getSeconds();
    if (hours<10){
        hours="0"+ hours;
    }

    if (mins<10){
        mins="0"+ mins;
    }

    if (sec<10){
        sec="0"+ sec;
    }




    time.textContent= hours + ":" + mins + ":" +sec;
}

)
