const e = new Audio('static/sounds/8397__speedy__clean-e-str-pluck.wav')

function eSound() {
    e.currentTime = 0;
    e.play();
}

const a = new Audio('static/sounds/8383__speedy__clean-a-str-pluck.wav')

function aSound() {
    a.currentTime = 0;
    a.play();
}

const d = new Audio('static/sounds/8389__speedy__clean-d-str-pluck.wav')

function dSound() {
    d.currentTime = 0;
    d.play();
}


const g = new Audio('static/sounds/8403__speedy__clean-g-str-pluck.wav')

function gSound() {
    g.currentTime = 0;
    g.play();
}

const b = new Audio('static/sounds/8386__speedy__clean-b-str-pluck.wav')

function bSound() {
    b.currentTime = 0;
    b.play();
}

const e1 = new Audio('static/sounds/8394__speedy__clean-e1st-str-pluck.wav')

function e1Sound() {
    e1.currentTime = 0;
    e1.play();
}


e.volume = 0.2
a.volume = 0.2
d.volume = 0.2
g.volume = 0.2
b.volume = 0.2
e1.volume = 0.2


var input = document.querySelectorAll('input');
for (var i = 0; i < input.length; i++){
  input[i].addEventListener("input", function(){

// Variable Setup

    var neckRed = document.getElementById('neck-red').value;
    var neckGreen = document.getElementById('neck-green').value;
    var neckBlue = document.getElementById('neck-blue').value;

    var bodyRed = document.getElementById('body-red').value;
    var bodyGreen = document.getElementById('body-green').value;
    var bodyBlue = document.getElementById('body-blue').value;

    var pickguardRed = document.getElementById('pickguard-red').value;
    var pickguardGreen = document.getElementById('pickguard-green').value;
    var pickguardBlue = document.getElementById('pickguard-blue').value;

    var stringRed = document.getElementById('string-red').value;
    var stringGreen = document.getElementById('string-green').value;
    var stringBlue = document.getElementById('string-blue').value;

    var ringRed = document.getElementById('ring-red').value;
    var ringGreen = document.getElementById('ring-green').value;
    var ringBlue = document.getElementById('ring-blue').value;

    var holeRed = document.getElementById('hole-red').value;
    var holeGreen = document.getElementById('hole-green').value;
    var holeBlue = document.getElementById('hole-blue').value;

    localStorage.setItem('neck-r', document.getElementById('neck-red').value);
    localStorage.setItem('neck-g', document.getElementById('neck-green').value);
    localStorage.setItem('neck-b', document.getElementById('neck-blue').value);

    localStorage.setItem('body-r', document.getElementById('body-red').value);
    localStorage.setItem('body-g', document.getElementById('body-green').value);
    localStorage.setItem('body-b', document.getElementById('body-blue').value);

    localStorage.setItem('pickguard-r', document.getElementById('pickguard-red').value);
    localStorage.setItem('pickguard-g', document.getElementById('pickguard-green').value);
    localStorage.setItem('pickguard-b', document.getElementById('pickguard-blue').value);

    localStorage.setItem('string-r', document.getElementById('string-red').value);
    localStorage.setItem('string-g', document.getElementById('string-green').value);
    localStorage.setItem('string-b', document.getElementById('string-blue').value);

    localStorage.setItem('ring-r', document.getElementById('ring-red').value);
    localStorage.setItem('ring-g', document.getElementById('ring-green').value);
    localStorage.setItem('ring-b', document.getElementById('ring-blue').value);

    localStorage.setItem('hole-r', document.getElementById('hole-red').value);
    localStorage.setItem('hole-g', document.getElementById('hole-green').value);
    localStorage.setItem('hole-b', document.getElementById('hole-blue').value);


//Color selector Function

    var neckColor = document.getElementById('neck');
    var neckColorBody = document.getElementById('neck-body')
    neckColor.style.backgroundColor = "rgb(" + neckRed + "," + neckGreen + "," + neckBlue + ")";
    neckColorBody.style.backgroundColor = "rgb(" + neckRed + "," + neckGreen + "," + neckBlue + ")";

    var bodyColor = document.getElementById('gbody')
    bodyColor.style.backgroundColor = "rgb(" + bodyRed + "," + bodyGreen + "," + bodyBlue + ")";

    var pickguardColor = document.getElementById('pickguard')
    pickguardColor.style.backgroundColor = "rgb(" + pickguardRed + "," + pickguardGreen + "," + pickguardBlue + ")";

    var stringColor1 = document.getElementById('chord1')
    var stringColor2 = document.getElementById('chord2')
    var stringColor3 = document.getElementById('chord3')
    var stringColor4 = document.getElementById('chord4')
    var stringColor5 = document.getElementById('chord5')
    var stringColor6 = document.getElementById('chord6')
    stringColor1.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";
    stringColor2.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";
    stringColor3.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";
    stringColor4.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";
    stringColor5.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";
    stringColor6.style.backgroundColor = "rgb(" + stringRed + "," + stringGreen + "," + stringBlue + ")";


    var ringColor = document.getElementById('ring')
    ringColor.style.backgroundColor = "rgb(" + ringRed + "," + ringGreen + "," + ringBlue + ")";

    var holeColor = document.getElementById('hole')
    holeColor.style.backgroundColor = "rgb(" + holeRed + "," + holeGreen + "," + holeBlue + ")";

    localStorage.setItem('neck-color', neckColor.style.backgroundColor);
    localStorage.setItem('body-color', bodyColor.style.backgroundColor);
    localStorage.setItem('pickguard-color', pickguardColor.style.backgroundColor);
    localStorage.setItem('string1-color', stringColor1.style.backgroundColor);
    localStorage.setItem('string2-color', stringColor2.style.backgroundColor);
    localStorage.setItem('string3-color', stringColor3.style.backgroundColor);
    localStorage.setItem('string4-color', stringColor4.style.backgroundColor);
    localStorage.setItem('string5-color', stringColor5.style.backgroundColor);
    localStorage.setItem('string6-color', stringColor6.style.backgroundColor);
    localStorage.setItem('ring-color', ringColor.style.backgroundColor);
    localStorage.setItem('hole-color', holeColor.style.backgroundColor);
    
    
  })
}

//Function to save colors on desktop

 window.onload = function Colors(){
    if (localStorage.getItem('ring-color')) {
      document.getElementById('ring').style.backgroundColor = localStorage.getItem('ring-color')
      document.getElementById('ring-red').value = localStorage.getItem('ring-r');
      document.getElementById('ring-green').value = localStorage.getItem('ring-g');
      document.getElementById('ring-blue').value = localStorage.getItem('ring-b');
    }else{
        document.getElementById('ring').style.backgroundColor =  "lightgray";
        localStorage.setItem('ring-color', "lightgray");
    }
    if (localStorage.getItem('hole-color')) {
      document.getElementById('hole').style.backgroundColor = localStorage.getItem('hole-color');
      document.getElementById('hole-red').value = localStorage.getItem('hole-r');
      document.getElementById('hole-green').value = localStorage.getItem('hole-g');
      document.getElementById('hole-blue').value = localStorage.getItem('hole-b');
    }else{
        document.getElementById('hole').style.backgroundColor =  "#272727";
        localStorage.setItem('hole-color', "#272727");
    }
    if (localStorage.getItem('string1-color')) {
      document.getElementById('chord1').style.backgroundColor = localStorage.getItem('string1-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord1').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('string2-color')) {
      document.getElementById('chord2').style.backgroundColor = localStorage.getItem('string2-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord2').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('string3-color')) {
      document.getElementById('chord3').style.backgroundColor = localStorage.getItem('string3-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord3').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('string4-color')) {
      document.getElementById('chord4').style.backgroundColor = localStorage.getItem('string4-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord4').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('string5-color')) {
      document.getElementById('chord5').style.backgroundColor = localStorage.getItem('string5-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord5').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('string6-color')) {
      document.getElementById('chord6').style.backgroundColor = localStorage.getItem('string6-color');
      document.getElementById('string-red').value = localStorage.getItem('string-r');
      document.getElementById('string-green').value = localStorage.getItem('string-g');
      document.getElementById('string-blue').value = localStorage.getItem('string-b');
    }else{
      document.getElementById('chord6').style.backgroundColor =  "darkgray";
      localStorage.setItem('string-color', "darkgray");
    }
    if (localStorage.getItem('neck-color')) {
      document.getElementById('neck').style.backgroundColor = localStorage.getItem('neck-color');
      document.getElementById('neck-body').style.backgroundColor = localStorage.getItem('neck-color');
      document.getElementById('neck-red').value = localStorage.getItem('neck-r');
      document.getElementById('neck-green').value = localStorage.getItem('neck-g');
      document.getElementById('neck-blue').value = localStorage.getItem('neck-b');
    }else{
      document.getElementById('neck').style.backgroundColor =  "black";
      localStorage.setItem('neck-color', "black");
    }
    if (localStorage.getItem('body-color')) {
      document.getElementById('gbody').style.backgroundColor = localStorage.getItem('body-color');
      document.getElementById('body-red').value = localStorage.getItem('body-r');
      document.getElementById('body-green').value = localStorage.getItem('body-g');
      document.getElementById('body-blue').value = localStorage.getItem('body-b');
    }else{
      document.getElementById('gbody').style.backgroundColor =  "tan";
      localStorage.setItem('body-color', "tan");
    }
    if (localStorage.getItem('pickguard-color')) {
      document.getElementById('pickguard').style.backgroundColor = localStorage.getItem('pickguard-color');
      document.getElementById('pickguard-red').value = localStorage.getItem('pickguard-r');
      document.getElementById('pickguard-green').value = localStorage.getItem('pickguard-g');
      document.getElementById('pickguard-blue').value = localStorage.getItem('pickguard-b');
    }else{
      document.getElementById('pickguard').style.backgroundColor =  "#30090A";
      localStorage.setItem('pickguard-color', "#30090A");
    }
  }

  //Desktop Reset

  function reset() {
    document.getElementById('pickguard-red').value = '48';
    document.getElementById('pickguard-green').value = '9';
    document.getElementById('pickguard-blue').value = '10';

    localStorage.setItem('pickguard-r', '48')
    localStorage.setItem('pickguard-g', '9')
    localStorage.setItem('pickguard-b', '10')


    document.getElementById('body-red').value = '210';
    document.getElementById('body-green').value = '180';
    document.getElementById('body-blue').value = '140';

    localStorage.setItem('body-r', '210')
    localStorage.setItem('body-g', '180')
    localStorage.setItem('body-b', '140')


    document.getElementById('neck-red').value = '0';
    document.getElementById('neck-green').value = '0';
    document.getElementById('neck-blue').value = '0';

    localStorage.setItem('neck-r', '0')
    localStorage.setItem('neck-g', '0')
    localStorage.setItem('neck-b', '0')


    document.getElementById('string-red').value = '169';
    document.getElementById('string-green').value = '169';
    document.getElementById('string-blue').value = '169';


    document.getElementById('ring-red').value = '211';
    document.getElementById('ring-green').value = '211';
    document.getElementById('ring-blue').value = '211';

    localStorage.setItem('ring-r', '211')
    localStorage.setItem('ring-g', '211')
    localStorage.setItem('ring-b', '211')


    document.getElementById('hole-red').value = '39';
    document.getElementById('hole-green').value = '39';
    document.getElementById('hole-blue').value = '39';

    localStorage.setItem('hole-r', '39')
    localStorage.setItem('hole-g', '39')
    localStorage.setItem('hole-b', '39')

    document.getElementById('pickguard').style.backgroundColor =  "#30090A";
    localStorage.setItem('pickguard-color', "#30090A");

    document.getElementById('gbody').style.backgroundColor =  "tan";
    localStorage.setItem('body-color', "tan");

    document.getElementById('neck').style.backgroundColor =  "black";
    document.getElementById('neck-body').style.backgroundColor =  "black";
    localStorage.setItem('neck-color', "black");

    document.getElementById('chord1').style.backgroundColor =  "darkgray";
    document.getElementById('chord2').style.backgroundColor =  "darkgray";
    document.getElementById('chord3').style.backgroundColor =  "darkgray";
    document.getElementById('chord4').style.backgroundColor =  "darkgray";
    document.getElementById('chord5').style.backgroundColor =  "darkgray";
    document.getElementById('chord6').style.backgroundColor =  "darkgray";

    localStorage.setItem('string1-color', 'darkgray')
    localStorage.setItem('string2-color', 'darkgray')
    localStorage.setItem('string3-color', 'darkgray')
    localStorage.setItem('string4-color', 'darkgray')
    localStorage.setItem('string5-color', 'darkgray')
    localStorage.setItem('string6-color', 'darkgray')

    localStorage.setItem('string-r', '169')
    localStorage.setItem('string-g', '169')
    localStorage.setItem('string-b', '169')
    localStorage.setItem('string-color', "darkgray");

    document.getElementById('hole').style.backgroundColor =  "#272727";
    localStorage.setItem('hole-color', "#272727");

    document.getElementById('ring').style.backgroundColor =  "lightgray";
    localStorage.setItem('ring-color', "lightgray");
  }




//Mobile

var mobile = new Audio("static/sounds/14779_1460060680.mp3")

var mobileSound = document.getElementById('sound').addEventListener("click", function() {
    mobile.currentTime = 0.5;
    mobile.play();
})


function menu() {
  document.getElementById('menu').style.display = "inline"
}

function closeMenu() {
  document.getElementById('menu').style.display = "none"
}

var mInput = document.querySelectorAll('input');
for (var i = 0; i < mInput.length; i++){
  mInput[i].addEventListener("input", function(){

// Variable Setup

    var mNeckRed = document.getElementById('m-neck-red').value;
    var mNeckGreen = document.getElementById('m-neck-green').value;
    var mNeckBlue = document.getElementById('m-neck-blue').value;

    var mBodyRed = document.getElementById('m-body-red').value;
    var mBodyGreen = document.getElementById('m-body-green').value;
    var mBodyBlue = document.getElementById('m-body-blue').value;

    var backgroundRed = document.getElementById('m-background-red').value;
    var backgroundGreen = document.getElementById('m-background-green').value;
    var backgroundBlue = document.getElementById('m-background-blue').value;

    var mStringRed = document.getElementById('m-string-red').value;
    var mStringGreen = document.getElementById('m-string-green').value;
    var mStringBlue = document.getElementById('m-string-blue').value;

    var mRingRed = document.getElementById('m-ring-red').value;
    var mRingGreen = document.getElementById('m-ring-green').value;
    var mRingBlue = document.getElementById('m-ring-blue').value;

    var mHoleRed = document.getElementById('m-hole-red').value;
    var mHoleGreen = document.getElementById('m-hole-green').value;
    var mHoleBlue = document.getElementById('m-hole-blue').value;

    localStorage.setItem('m-neck-r', document.getElementById('m-neck-red').value);
    localStorage.setItem('m-neck-g', document.getElementById('m-neck-green').value);
    localStorage.setItem('m-neck-b', document.getElementById('m-neck-blue').value);

    localStorage.setItem('m-body-r', document.getElementById('m-body-red').value);
    localStorage.setItem('m-body-g', document.getElementById('m-body-green').value);
    localStorage.setItem('m-body-b', document.getElementById('m-body-blue').value);

    localStorage.setItem('background-r', document.getElementById('m-background-red').value);
    localStorage.setItem('background-g', document.getElementById('m-background-green').value);
    localStorage.setItem('background-b', document.getElementById('m-background-blue').value);

    localStorage.setItem('m-string-r', document.getElementById('m-string-red').value);
    localStorage.setItem('m-string-g', document.getElementById('m-string-green').value);
    localStorage.setItem('m-string-b', document.getElementById('m-string-blue').value);

    localStorage.setItem('m-ring-r', document.getElementById('m-ring-red').value);
    localStorage.setItem('m-ring-g', document.getElementById('m-ring-green').value);
    localStorage.setItem('m-ring-b', document.getElementById('m-ring-blue').value);

    localStorage.setItem('m-hole-r', document.getElementById('m-hole-red').value);
    localStorage.setItem('m-hole-g', document.getElementById('m-hole-green').value);
    localStorage.setItem('m-hole-b', document.getElementById('m-hole-blue').value);


//Color selector Function

    var mNeckColor = document.getElementById('m-neck');
    var mNeckColorBody = document.getElementById('m-neck-body')
    mNeckColor.style.backgroundColor = "rgb(" + mNeckRed + "," + mNeckGreen + "," + mNeckBlue + ")";
    mNeckColorBody.style.backgroundColor = "rgb(" + mNeckRed + "," + mNeckGreen + "," + mNeckBlue + ")";

    var mBodyColor = document.getElementById('m-gbody')
    mBodyColor.style.backgroundColor = "rgb(" + mBodyRed + "," + mBodyGreen + "," + mBodyBlue + ")";

    var mBackgroundColor = document.getElementById('m-body')
    mBackgroundColor.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";

    var mStringColor1 = document.getElementById('m-string1')
    var mStringColor2 = document.getElementById('m-string2')
    var mStringColor3 = document.getElementById('m-string3')
    var mStringColor4 = document.getElementById('m-string4')
    var mStringColor5 = document.getElementById('m-string5')
    var mStringColor6 = document.getElementById('m-string6')
    mStringColor1.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";
    mStringColor2.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";
    mStringColor3.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";
    mStringColor4.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";
    mStringColor5.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";
    mStringColor6.style.backgroundColor = "rgb(" + mStringRed + "," + mStringGreen + "," + mStringBlue + ")";


    var mRingColor = document.getElementById('m-ring')
    mRingColor.style.backgroundColor = "rgb(" + mRingRed + "," + mRingGreen + "," + mRingBlue + ")";

    var mHoleColor = document.getElementById('m-hole')
    mHoleColor.style.backgroundColor = "rgb(" + mHoleRed + "," + mHoleGreen + "," + mHoleBlue + ")";

    localStorage.setItem('m-neck-color', mNeckColor.style.backgroundColor);
    localStorage.setItem('m-body-color', mBodyColor.style.backgroundColor);
    localStorage.setItem('m-background-color', mBackgroundColor.style.backgroundColor);
    localStorage.setItem('m-string1-color', mStringColor1.style.backgroundColor);
    localStorage.setItem('m-string2-color', mStringColor2.style.backgroundColor);
    localStorage.setItem('m-string3-color', mStringColor3.style.backgroundColor);
    localStorage.setItem('m-string4-color', mStringColor4.style.backgroundColor);
    localStorage.setItem('m-string5-color', mStringColor5.style.backgroundColor);
    localStorage.setItem('m-string6-color', mStringColor6.style.backgroundColor);
    localStorage.setItem('m-ring-color', mRingColor.style.backgroundColor);
    localStorage.setItem('m-hole-color', mHoleColor.style.backgroundColor);
  })
}

//Svae Colors Mobile

 document.body.onload = function mColors(){
    if (localStorage.getItem('m-ring-color')) {
      document.getElementById('m-ring').style.backgroundColor = localStorage.getItem('m-ring-color')
      document.getElementById('m-ring-red').value = localStorage.getItem('m-ring-r');
      document.getElementById('m-ring-green').value = localStorage.getItem('m-ring-g');
      document.getElementById('m-ring-blue').value = localStorage.getItem('m-ring-b');
    }else{
        document.getElementById('m-ring').style.backgroundColor =  "lightgray";
        localStorage.setItem('ring-color', "lightgray");
    }
    if (localStorage.getItem('m-hole-color')) {
      document.getElementById('m-hole').style.backgroundColor = localStorage.getItem('m-hole-color');
      document.getElementById('m-hole-red').value = localStorage.getItem('m-hole-r');
      document.getElementById('m-hole-green').value = localStorage.getItem('m-hole-g');
      document.getElementById('m-hole-blue').value = localStorage.getItem('m-hole-b');
    }else{
        document.getElementById('m-hole').style.backgroundColor =  "#272727";
        localStorage.setItem('m-hole-color', "#272727");
    }
    if (localStorage.getItem('m-string1-color')) {
      document.getElementById('m-string1').style.backgroundColor = localStorage.getItem('m-string1-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string1').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-string2-color')) {
      document.getElementById('m-string2').style.backgroundColor = localStorage.getItem('m-string2-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string2').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-string3-color')) {
      document.getElementById('m-string3').style.backgroundColor = localStorage.getItem('m-string3-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string3').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-string4-color')) {
      document.getElementById('m-string4').style.backgroundColor = localStorage.getItem('m-string4-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string4').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-string5-color')) {
      document.getElementById('m-string5').style.backgroundColor = localStorage.getItem('m-string5-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string5').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-string6-color')) {
      document.getElementById('m-string6').style.backgroundColor = localStorage.getItem('m-string6-color');
      document.getElementById('m-string-red').value = localStorage.getItem('m-string-r');
      document.getElementById('m-string-green').value = localStorage.getItem('m-string-g');
      document.getElementById('m-string-blue').value = localStorage.getItem('m-string-b');
    }else{
      document.getElementById('m-string6').style.backgroundColor =  "darkgray";
      localStorage.setItem('m-string-color', "darkgray");
    }
    if (localStorage.getItem('m-neck-color')) {
      document.getElementById('m-neck').style.backgroundColor = localStorage.getItem('m-neck-color');
      document.getElementById('m-neck-body').style.backgroundColor = localStorage.getItem('m-neck-color');
      document.getElementById('m-neck-red').value = localStorage.getItem('m-neck-r');
      document.getElementById('m-neck-green').value = localStorage.getItem('m-neck-g');
      document.getElementById('m-neck-blue').value = localStorage.getItem('m-neck-b');
    }else{
      document.getElementById('m-neck').style.backgroundColor =  "black";
      localStorage.setItem('m-neck-color', "black");
    }
    if (localStorage.getItem('m-body-color')) {
      document.getElementById('m-gbody').style.backgroundColor = localStorage.getItem('m-body-color');
      document.getElementById('m-body-red').value = localStorage.getItem('m-body-r');
      document.getElementById('m-body-green').value = localStorage.getItem('m-body-g');
      document.getElementById('m-body-blue').value = localStorage.getItem('m-body-b');
    }else{
      document.getElementById('m-gbody').style.backgroundColor =  "tan";
      localStorage.setItem('m-body-color', "tan");
    }
    if (localStorage.getItem('m-background-color')) {
      document.getElementById('m-body').style.backgroundColor = localStorage.getItem('m-background-color');
      document.getElementById('m-background-red').value = localStorage.getItem('background-r');
      document.getElementById('m-background-green').value = localStorage.getItem('background-g');
      document.getElementById('m-background-blue').value = localStorage.getItem('background-b');
    }else{
      document.getElementById('m-body').style.backgroundColor =  "grey";
      localStorage.setItem('m-background-color', "grey");
    }
  }

  function mReset() {
    document.getElementById('m-background-red').value = '128';
    document.getElementById('m-background-green').value = '128';
    document.getElementById('m-background-blue').value = '128';

    localStorage.setItem('background-r', '128')
    localStorage.setItem('background-g', '128')
    localStorage.setItem('background-b', '128')


    document.getElementById('m-body-red').value = '210';
    document.getElementById('m-body-green').value = '180';
    document.getElementById('m-body-blue').value = '140';

    localStorage.setItem('m-body-r', '210')
    localStorage.setItem('m-body-g', '180')
    localStorage.setItem('m-body-b', '140')


    document.getElementById('m-neck-red').value = '0';
    document.getElementById('m-neck-green').value = '0';
    document.getElementById('m-neck-blue').value = '0';

    localStorage.setItem('m-neck-r', '0')
    localStorage.setItem('m-neck-g', '0')
    localStorage.setItem('m-neck-b', '0')


    document.getElementById('m-string-red').value = '169';
    document.getElementById('m-string-green').value = '169';
    document.getElementById('m-string-blue').value = '169';


    document.getElementById('m-ring-red').value = '211';
    document.getElementById('m-ring-green').value = '211';
    document.getElementById('m-ring-blue').value = '211';

    localStorage.setItem('m-ring-r', '211')
    localStorage.setItem('m-ring-g', '211')
    localStorage.setItem('m-ring-b', '211')


    document.getElementById('m-hole-red').value = '39';
    document.getElementById('m-hole-green').value = '39';
    document.getElementById('m-hole-blue').value = '39';

    localStorage.setItem('m-hole-r', '39')
    localStorage.setItem('m-hole-g', '39')
    localStorage.setItem('m-hole-b', '39')

    document.getElementById('m-body').style.backgroundColor =  "grey";
    localStorage.setItem('m-background-color', "grey");

    document.getElementById('m-gbody').style.backgroundColor =  "tan";
    localStorage.setItem('m-body-color', "tan");

    document.getElementById('m-neck').style.backgroundColor =  "black";
    document.getElementById('m-neck-body').style.backgroundColor =  "black";
    localStorage.setItem('m-neck-color', "black");

    document.getElementById('m-string1').style.backgroundColor =  "darkgray";
    document.getElementById('m-string2').style.backgroundColor =  "darkgray";
    document.getElementById('m-string3').style.backgroundColor =  "darkgray";
    document.getElementById('m-string4').style.backgroundColor =  "darkgray";
    document.getElementById('m-string5').style.backgroundColor =  "darkgray";
    document.getElementById('m-string6').style.backgroundColor =  "darkgray";

    localStorage.setItem('m-string1-color', 'darkgray')
    localStorage.setItem('m-string2-color', 'darkgray')
    localStorage.setItem('m-string3-color', 'darkgray')
    localStorage.setItem('m-string4-color', 'darkgray')
    localStorage.setItem('m-string5-color', 'darkgray')
    localStorage.setItem('m-string6-color', 'darkgray')

    localStorage.setItem('m-string-r', '169')
    localStorage.setItem('m-string-g', '169')
    localStorage.setItem('m-string-b', '169')
    localStorage.setItem('m-string-color', "darkgray");

    document.getElementById('m-hole').style.backgroundColor =  "#272727";
    localStorage.setItem('m-hole-color', "#272727");

    document.getElementById('m-ring').style.backgroundColor =  "lightgray";
    localStorage.setItem('m-ring-color', "lightgray");
  }
