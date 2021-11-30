let result = document.getElementById("inputext")
    
let calculate = (number) =>
    result.value+=(number)

let Result = () =>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input")
    }
}
let del = () =>{
    result.value=result.value.slice(0,-1)
}

function cleare(){
    result.value=""
}