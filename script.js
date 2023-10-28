
const arr =[];

function Kommanda(){    
    let matn =prompt("Kommandani kiriting")
        if(matn.slice(0,3)=="add"){
            arr.push(matn.slice(5,30))
            Kommanda()
        }else if(matn.slice(0,3)=="del"){
                for (const key in arr) {
                    if(matn.slice(5,30)==arr[key]){
                        arr.splice(key,1)
                    }
                }
            Kommanda()
        }else if(matn=="stop"){
            console.log(arr)
        }
}
Kommanda()



