/*
    Current case:
    1  = First question
    2  = More fun?
    3  = Another trip?
    4  = Destination
    5  = Not this time
    6  = Explore more
    7  = Redirect to image
    8  = Case 1 -> No / Maybe
    9  = Case 2 -> No
    10 = Case 3 -> No
*/

const message = document.getElementById("message");
const options = document.getElementById("options");

/* Change this to the exact filename of your uploaded image */
const IMAGE_FILE = "surprise.jpeg";


/* =========================
   Helper function
   ========================= */

function showCase(text, buttons) {

    message.innerHTML = text;
    options.innerHTML = "";

    buttons.forEach(button => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.textContent = button.text;
        newButton.onclick = button.action;
        options.appendChild(newButton);
    });

    /* Re-trigger the fade-in animation on every new screen */
    [message, options].forEach(element => {
        element.classList.remove("fade");
        void element.offsetWidth;
        element.classList.add("fade");
    });
}


/* =========================
   CASE 1
   ========================= */

function case1() {
    showCase(
        "Are you going to enjoy your trip?",
        [
            { text: "Yes",   action: () => case2() },
            { text: "No",    action: () => case8() },
            { text: "Maybe", action: () => case8() }
        ]
    );
}


/* =========================
   CASE 2
   ========================= */

function case2() {
    showCase(
        "Would you like to have more fun?",
        [
            { text: "Yes", action: () => case3() },
            { text: "No",  action: () => case9() }
        ]
    );
}


/* =========================
   CASE 3
   ========================= */

function case3() {
    showCase(
        "Are you ready for another trip?",
        [
            { text: "Yes", action: () => case4() },
            { text: "No",  action: () => case10() }
        ]
    );
}


/* =========================
   CASE 4
   ========================= */

function case4() {
    showCase(
        "Any idea????",
        [
            { text: "Amsterdam",        action: () => case5() },
            { text: "Prague",           action: () => case5() },
            { text: "Barcelona",        action: () => case5() },
            { text: "Berlin",           action: () => case5() },
            { text: "Not in this list", action: () => case6() }
        ]
    );
}


/* =========================
   CASE 5
   ========================= */

function case5() {
    showCase(
        "Not for this time... :(<br><br>Do you want to try one more time?",
        [
            { text: "Yes", action: () => case4() }
        ]
    );
}


/* =========================
   CASE 6
   ========================= */

function case6() {
    showCase(
        "I knew that you also wanted this.<br><br>Do you want to explore more?",
        [
            { text: "Yes", action: () => case7() }
        ]
    );
}


/* =========================
   CASE 7
   ========================= */

function case7() {
    window.location.href = IMAGE_FILE;
}


/* =========================
   CASE 8
   ========================= */

function case8() {
    showCase(
        "I am sure you are going to enjoy it.<br><br>Do you want to try again?",
        [
            { text: "Yes", action: () => case1() }
        ]
    );
}


/* =========================
   CASE 9
   ========================= */

function case9() {
    showCase(
        "I am sure you want to have more fun.<br><br>Do you want to try again?",
        [
            { text: "Yes", action: () => case2() }
        ]
    );
}


/* =========================
   CASE 10
   ========================= */

function case10() {
    showCase(
        "I am sure you want to have one more trip.<br><br>Do you want to try again?",
        [
            { text: "Yes", action: () => case3() }
        ]
    );
}


/* =========================
   START
   ========================= */

case1();