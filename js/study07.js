//break ในรูป loop ทำงานเมื่อไหร่จบเลย
//
// continue ในรูป loop ทำงานเมื่อไหร่ ถือว่ารอบนั้นไปรอบต่อไป

for(let i = 1; i <= 5; i++){
    console.log(i,'Hi...')
}
console.log('____________________')
for (let i = 1; i <= 5; i++){
    if(i == 3){
        break;
    }
    console.log(i,'Hello...')
}
console.log('____________________')
for (let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }
    console.log(i,'Hay...')
}