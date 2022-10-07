var maxNum=500;
function textCount(textField, showCount){
    if (textField.value.length >maxNum){
        textField.value=textField.value.substring(0 , maxNum);
    }
    else
    {
        showCount.value=maxNum-textField.value.length;
    }
    return textCount();
}