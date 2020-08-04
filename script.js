function randomNumber() {
    var min = 1000;
    var max = 9999;
    screenOne.value = Math.floor(Math.random() * (max - min + 1)) + min;
}

function SubmitPinMatch() {
    if (screenOne.value === screen2.value) {
        document.getElementById("notifyForRight").style.display = "block";
    } else {
        document.getElementById("notifyForWrong").style.display = "block";
    }
}

// <--remarks-->
// for bonus marks
// 1. back delete button done
// 2. C clear button done
// 3. favicon image done 