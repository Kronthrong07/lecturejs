//Control Flow : Condition/Decision/Selection
// ใช้พิสูจน์ตรวจสอบก่อนทำงานใดๆ
// if , if-else , if-else-if , switch-case
//if
let a = 10;
if(a == "10"){
    console.log('wow...')
}
console.log('____________________')
//if-else
let b = 'Sombat';
if(b < 'Sombat'){
    console.log('Hi...')
}else{
    console.log('Hey...')
}
console.log('____________________')
//if-else-if
let scrore = 80;
if(scrore >= 80){
    console.log('A')
}else if(scrore >= 60){
    console.log('B')
}else if(scrore >= 40){
    console.log('C')
}else{
    console.log('F')
}
console.log('____________________')
//switch-case
let day = '5';
switch(day){
    case '1':console.log('Monday');break;
    case '2':console.log('Tuesday');break;
    case '3':console.log('Wednesday');break;
    case '4':console.log('Thursday');break;
    case '5':console.log('Friday');break;
    case '6':console.log('Saturday');break;
    case '7':console.log('Sunday');break;
    default:console.log('Invaild day');break;
}