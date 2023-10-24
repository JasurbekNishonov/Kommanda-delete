
let str="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, dolor!"
let arr=str.split('')
for(let i=0; i<arr.length; i++){
    if(arr[i]=="a" || arr[i]=="e" || arr[i]=="u" || arr[i]=="o" || arr[i]=="i"){
        arr.splice(i,1)
    }
}
let string=arr.join("")
console.log(string)
