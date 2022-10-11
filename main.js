//Created By Felje...

var interval = setInterval(time,/*Set Interval Time*/0000);

function am(){
var ampm_M = document.getElementById("am_pm_js").innerHTML = "AM";
}

function pm(){
var ampm_N = document.getElementById("am_pm_js").innerHTML = "PM";
}


function time(){
var time0 = new Date();
var h = time0.getHours();
var m = time0.getMinutes();
var s = time0.getSeconds();
var dy = time0.getDay();

 if(dy==1){
var day1 = document.getElementById("d_js").innerHTML = "MONDAY";
}
 if(dy==2){
var day2 = document.getElementById("d_js").innerHTML = "TUESDAY";
}
 if(dy==3){
var day3 = document.getElementById("d_js").innerHTML = "WEDNESDAY";
}
 if(dy==4){
var day4 = document.getElementById("d_js").innerHTML = "THURSDAY";
}
 if(dy==5){
var day5 = document.getElementById("d_js").innerHTML = "FRIDAY";
}
 if(dy==6){
var day6 = document.getElementById("d_js").innerHTML =
"SATURDAY";
}
 if(dy==0){
var day0 = document.getElementById("d_js").innerHTML =
"SUNDAY";
}

if(h==12){
pm();
}
else if(h==13){
var h = 1;
pm();
}
else if(h==14){
var h = 2;
pm();
}
else if(h==15){
var h = 3;
pm();
}
else if(h==16){
var h = 4;
pm();
}
else if(h==17){
var h = 5;
pm();
}
else if(h==18){
var h = 6;
pm();
}
else if(h==19){
var h = 7;
pm();
}
else if(h==20){
var h = 8;
pm();
}
else if(h==21){
var h = 9;
pm();
}
else if(h==22){
var h = 10;
pm();
}
else if(h==23){
var h = 11;
pm();
}
else if(h==0){
var h = 12;
am();
}

var hours = document.getElementById("time_h_js").innerHTML = h+":";
var minutes = document.getElementById("time_m_js").innerHTML = m+":";
var seconds = document.getElementById("time_s_js").innerHTML = s+".";

}