//Function คือ การทำงาน จะไม่ทำงานถ้าไม่เรียกใข้
//function มี 4 ประเภท
//1. no parameter , no return
function funcA(){
    console.log('wow wow wow')
}

//2. have parameter ,  no return
function funcB(a,b){
    console.log(a+b)
}

//3. no parameter , have return
function funcC(){
    console.log('wow...')
    return 10
}

//4. have parameter , have return
function funcD(a,b,c,d){
    console.log(a+b+c+d)
    return a+b+c+d
}

funcA()
funcB(10,20) //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument

console.log(funcC())
console.log(funcD(1,2,3,4)) //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument