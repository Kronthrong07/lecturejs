//Control Flow : loop/Iteration/Repetition
// ใช้ในการทำงานในรูปแบบซ้ําซ้อน
// for ,foreach, while , do-while
//while พิสูจน์ตรวจสอบก่อนทำงานใดๆ
let x = 1;
while (x <= 5){
    console.log(x, 'wow...',true)
    console.log(x + 'wow...'+true)
    console.log(`${x}wow...${true}`) //***  แนะนำให้ใช้
    
    x++;
}
console.log('____________________')
//do-while
let y = 1;
do{
    console.log(`${y}Hi...${true}`)
    y++;
}while(y <= 5)
console.log('____________________')
//for
for(let z = 1; z <= 5; z++){
    console.log(`${z}Hi...${true}`)
}
console.log('____________________')
//foreach
let colors = ['red','blue','green'];
for(let color of colors){
    console.log(`${color}Hi...${true}`)
} 