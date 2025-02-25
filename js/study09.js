//function Expression (Anonymous / Arrow Function)
//Anonymous function

const aa = 'Hello...';

const xx = function(){
    console.log('Hey...')
}

//Arrow Function
const yy = () => {
    console.log('wow wow wow')
}

const zz = (a,b) => {
    console.log(a+b)
}

const mm = ( a ) => {
    return a *100
}

const nn = () => console.log('Hi...')
//const nn = () => {
//    console.log('Hi...')
//}

const oo = ( x , y ) => x ** y
//const oo = ( x , y ) => {
//    return x ** y
//}

console.log(aa);
xx();
yy();
zz(10,20);
console.log(mm(999));