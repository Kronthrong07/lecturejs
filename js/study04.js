//Operator ตัวดำเนินการ
// + - * / % ** ++ --
console.log(10**2)

// == != > < >= <=

//  ! && || 

let a = 10;
let b = "10";
//Python: ถ้าเป็น a + b จะได้ Error
//Java: ถ้าเป็น a + b จะได้ Error
//JavaScript: ถ้าเป็น a + b จะได้ 20
let c = (a + b)
console.log(c)

//เปรียบเทียบเท่ากันใช่ไหม
console.log(a == b)          //ไม่สนใจ Type
console.log(a === b)         //สนใจ Type

//เปรียบเทียบไม่เท่ากันใช่ไหม
console.log(a != b)          //ไม่สนใจ Type
console.log(a !== b)         //สนใจ Type

a = 'Hello';
console.log(a)

console.log('Bangna' < 'Bangkok')

// Ternary Operator ****
//____ ? ____ : ____
//เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ

let scrore = 45
let grade = scrore > 55 ? 'A' : 'B'
console.log(grade)

//nulllish operator
// __??__
//หน้าเครื่องหมาย ?? เป็น null หรือ undefined จะได้ค่าหลังเครื่องหมาย
let data1 = null;
console.log(data1 ?? 'Hello...')

let data3;
console.log(data3 ?? 'Hay...')

//หน้าเครื่องหมาย ?? ไม่เป็น null หรือ undefined จะได้ค่านั้นๆ
let data2 = 'wow wow wow';
console.log(data2 ?? 'Hello...')
