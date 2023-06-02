var body = document.getElementById("body");
var html = document.getElementById("html");

let darkMode = localStorage.getItem("darkMode");
const nightswitch = document.querySelector(".night-switch");
console.log(darkMode)

var light ="#eee"; //light mode for the html tag
var dark ="#092A41";//dark mode for the html tag

const enabledarkMode = () => {
    localStorage.setItem("darkMode", "on");
    html.style.background = dark;
    document.body.classList.add("dark-mode");
};

const disabledarkMode = () => {
    localStorage.setItem("darkMode", "off");
    html.style.background = light;
    document.body.classList.remove("dark-mode");
};

if (darkMode === "on"){
    enabledarkMode();
}

nightswitch.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "on"){
        enabledarkMode();
        console.log("Dark mode is",darkMode+".");
    } else{
        disabledarkMode();
        console.log("Dark mode is",darkMode+".");
    }
});



/*
const nightswitch = document.querySelector(".night-switch");
nightswitch.onclick = function(e){
body.classList.toggle("dark-mode");
}
*/

var math = $(".math");
var result = document.getElementById("result0");
var btns = $(".btns");

btns[0].onclick = function(){ //AC
console.log(btns[0].innerHTML);
    math[0].innerHTML = 0;
    result.innerHTML = 0;
}

btns[1].onclick = function(){ //C
    console.log(btns[1].innerHTML);
        math[0].innerHTML = 0;
        result.innerHTML = 0;
    }

    btns[2].onclick = function(){ //-

        if(result.innerHTML.indexOf(btns[2].value) == -1) {
        console.log(btns[2].value);
        if ( result.innerHTML == "0"){
            math[0].innerHTML = null;
            result.innerHTML = null;
        }
            math[0].innerHTML+=(btns[2].value);
            //result.innerHTML+=(btns[2].value);
            result.innerHTML = (btns[2].value)+result.innerHTML;
        }
    }


    btns[4].onclick = function(){ //7
        console.log(btns[4].innerHTML);
        if ( result.innerHTML == "0"){
            math[0].innerHTML = null;
            result.innerHTML = null;
        }
            math[0].innerHTML += 7;
            result.innerHTML += 7;
        }
        btns[5].onclick = function(){ //8
            console.log(btns[5].innerHTML);
            if ( result.innerHTML == "0"){
                math[0].innerHTML = null;
                result.innerHTML = null;
            }
                math[0].innerHTML += 8;
                result.innerHTML += 8;
            }
            btns[6].onclick = function(){ //9
                console.log(btns[6].innerHTML);
                if ( result.innerHTML == "0"){
                    math[0].innerHTML = null;
                    result.innerHTML = null;
                }
                    math[0].innerHTML += 9;
                    result.innerHTML += 9;
                }
                btns[8].onclick = function(){ //4
                    console.log(btns[8].innerHTML);
                    if ( result.innerHTML == "0"){
                        math[0].innerHTML = null;
                        result.innerHTML = null;
                    }
                        math[0].innerHTML += 4;
                        result.innerHTML += 4;
                    }
                    btns[9].onclick = function(){ //5
                        console.log(btns[9].innerHTML);
                        if ( result.innerHTML == "0"){
                            math[0].innerHTML = null;
                            result.innerHTML = null;
                        }
                            math[0].innerHTML += 5;
                            result.innerHTML += 5;
                        }
                        btns[10].onclick = function(){ //6
                            console.log(btns[10].innerHTML);
                            if ( result.innerHTML == "0"){
                                math[0].innerHTML = null;
                                result.innerHTML = null;
                            }
                                math[0].innerHTML += 6;
                                result.innerHTML += 6;
                            }
                            btns[12].onclick = function(){ //1
                                console.log(btns[12].innerHTML);
                                if ( result.innerHTML == "0"){
                                    math[0].innerHTML = null;
                                    result.innerHTML = null;
                                }
                                    math[0].innerHTML += 1;
                                    result.innerHTML += 1;
                                }
                                btns[13].onclick = function(){ //2
                                    console.log(btns[13].innerHTML);
                                    if ( result.innerHTML == "0"){
                                        math[0].innerHTML = null;
                                        result.innerHTML = null;
                                    }
                                        math[0].innerHTML += 2;
                                        result.innerHTML += 2;
                                    }
                                    btns[14].onclick = function(){ //3
                                        console.log(btns[14].innerHTML);
                                        if ( result.innerHTML == "0"){
                                            math[0].innerHTML = null;
                                            result.innerHTML = null;
                                        }
                                            math[0].innerHTML += 3;
                                            result.innerHTML += 3;
                                        }
                                        btns[17].onclick = function(){ //.
                                            console.log(result.innerHTML)
                                            dot = ".";
                                             if(result.innerHTML.indexOf(dot) == -1) {
                                                console.log(btns[17].innerHTML);
                                                math[0].innerHTML += ".";
                                                result.innerHTML += ".";
                                            }
                                        }


            btns[16].onclick = function(){ //0
                console.log(btns[16].innerHTML);
                    math[0].innerHTML += 0;
                    result.innerHTML += 0;
                    result.innerHTML =(result.innerHTML.substring(0,9));
                }
    




    btns[7].onclick = function(){ //    /
        if(math[0].innerHTML.includes("/") == false) {
        math[0].innerHTML += "/";
        btns[7].value = "/";
            console.log(btns[7].value);
 return result.innerHTML; 
        }   }

        btns[7].onblur = function(){ //   /
            result.innerHTML = ""
        }

            
        btns[11].onclick = function(){ //    *
            math[0].innerHTML += "*";
            btns[11].value = "*";
                console.log(btns[11].value);
     return result.innerHTML; 
            }   
    
            btns[11].onblur = function(){ //   *
                result.innerHTML = ""
            }



            btns[15].onclick = function(){ //    -
                math[0].innerHTML += "-";
                btns[15].value = "-";
                    console.log(btns[15].value);
         return result.innerHTML; 
                }   
        
                btns[15].onblur = function(){ //   -
                    result.innerHTML = ""
                }

                btns[19].onclick = function(){ //    +
                    math[0].innerHTML += "+";
                    btns[19].value = "+";
                        console.log(btns[15].value);
             return result.innerHTML; 
                    }   
            
                    btns[19].onblur = function(){ //   +
                        result.innerHTML = ""
                    }
    









            btns[18].onclick = function(){ //    =
                btns[18].value = "=";
                console.log(btns[18].value);
                result.innerHTML = eval(math[0].innerHTML);
                result.innerHTML =(result.innerHTML.substring(0,9));

                    return result.innerHTML;
                }    


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["first", "2nd", "3rd", "4th", "5th",'6th', '7th', "8th", "9th", "10th","11th" ,"12th", "13th" ,"14th", "15th","16th" ,"17th", "18th" ,"19th", "20th","21st" ,"22nd" ,"23rd", "24th", "25th","26th" ,"27th" ,"28th", "29th", "30th"]
const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDate()];
let numberDay = d.getDate();
let hr = d.getHours();


if (hr < 12) {
    text[0].innerHTML = "Good morning. ";
}else if (hr > 18) {
    text[0].innerHTML = "Good night. ";
}
else{
    text[0].innerHTML = "Good afternoon. ";
}


if (Math.log(Math.E)**0 == 1) {
    text[0].innerHTML += "It's the "+days[numberDay-1]+" of "+month+". ";
}

