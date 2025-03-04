//data type in js

//String
console.log('ABC...')
console.log("ABC...")
//number
console.log(123.66)
console.log(123456)
//object
console.log({fullname: 'Natthawut',age: 20})
//Boolean
console.log(true)
console.log(false)
//Array
console.log([1,2,3,4,5,6,7,8,9,10,'Hello...',ture])
//null
console.log(null) //ไม่มีค่า แต่ยังมีค่าว่าง
//undefined
console.log(undefined) //ไม่ได้กำหนดค่า ไม่มีค่า


//ตัวแปร
var a = 10           //ตัวแปรค่าเปลี่ยนได้ สามารถเปลี่ยนค่าได้ แบบ Global ใช้ที่ไหนก็ได้
let b = 20          //ตัวแปรค่าเปลี่ยนได้ สามารถเปลี่ยนค่าได้  แบบ Local ใช้ได้เฉพราะใน { } หนึ่งๆ เท่านั้น
const c = 30        //ตัวแปรค่าไม่เปลี่ยน ไม่สามารถเปลี่ยนค่าได้ แบบ Local ใช้ได้เฉพราะใน { } หนึ่งๆ เท่านั้น


let data01 = 'wow...'
let data02 = '123456'

// เวลาเอาข้อมูลหลากหลายแบบมาใข้ร่วมกัน
console.log('AAA' + ' ' + 555 + ' ' + data01 + ' ' + data02)

console.log(`AAA ${555} ${data01} ${data02}`)