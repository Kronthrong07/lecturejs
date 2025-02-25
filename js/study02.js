//Variable ตัวแปร    
var myData1 = 'Hello...'; //เปลื่ยนค่าได้ เป็น Global 
var myData2 = 20;  //เปลื่ยนค่าไดๅ เป็น local
const myData3 ='wow'; //เปลื่ยนค่าไม่ได้ เป็น local

myData1 = 'Hi...';
myData2 = 30;
myData3 = 'wow...';
//myData3 = 'wow...';  
 

{
    var a = 1;
    let b = 2;
    const c = 3;
    {
        var x = 4;
        let y = 5;
        const z = 6;
        console.log(a)
        console.log(x)
        console.log(b,c)
        console.log(y,z)
        
    }
    console.log(a)
    console.log(x)
    console.log(b,c)
    //console.log(y,z) error
}
console.log(a)
console.log(x)
console.log(b,c)
//console.log(y,z) error