//value of variable
let data1 = 'Hello...'; //"Helo..."
let data2 = 20; 
let data3 = true; 
//Index number 0  1   2   3   4
let data4 = [10,20,30,40,50];
let data6 = ['Natthawut',20,true]; //ไม่แนะนำใช้
let data7 = ['Natthawut','Mana','sombat'];

let data5 = {
    fullname: 'Natthawut',
    age: 20,
    status: true,
    color: ['red','blue','green'],
    address:{
        no:'10/25',
        soi:'soi 1',
        street:'Petchakasem',
        province:'Bangkok'
    }
}
let data8 = null;
let data9 ;

console.log(data8)
console.log(data9)
console.log(data5.address.fullname)
console.log(data5.status)
console.log(data5.color[2])
console.log(data5.address.street)
console.log('--------------------------------')

console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4[2])
console.log(data4[4])
data4[3] = 333
console.log(data4[2])
console.log('--------------------------------')
//เข้าถึงข้อมูลทุกตัวของ array ใช้คําสั่ง for หรือ foreach
data4 .forEach((value) => {
    console.log(value * 10) 
})