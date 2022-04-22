let toggle_var = false
let hamburger = document.getElementById("hamburger")

function toggle(){
    
    let asside =document.getElementById("asside")

if(toggle_var){

    
    document.getElementById("h1").style.transform = "rotate3d(0,0,1,0deg)"
    document.getElementById("h1").style.top= "0px"
    document.getElementById("h2").style.transform = "rotate3d(0,0,1,0deg)"
    document.getElementById("h3").style.opacity = "1"
   slideout()
    toggle_var = false
}
else{
    
    // document.getElementById("asside").style.display = "block"
    document.getElementById("h1").style.transform = "rotate3d(0,0,1,45deg)"
    document.getElementById("h1").style.top= "8px"
    document.getElementById("h2").style.transform = "rotate3d(0,0,1,-45deg)"
    document.getElementById("h3").style.opacity = "0"
    // asside.style.display = "block"
    slidein()
    toggle_var = true
}

}

function slidein(){
    let i = 0
    asside.style.transition = "1s"
    

    while(i<250){
        if(i<200){
            asside.style.fontSize = (i/5)+"px"
        }
        else{
            asside.style.fontSize = 13+"px"
        }
        setTimeout(() => {
            asside.style.width = i + "px"
        }, 200);
        i+=100
    }
    if(i>=10){
        asside.style.display = "block"
        asside.style.fontSize = "3px"
    }
    setTimeout(() => {
        asside.style.transition = "0.2px"
        asside.style.fontSize = "13px"
    }, 1);
}
function slideout(){
    let i = 250

    asside.style.transition = "1s"
    while(i>0){
        asside.style.fontSize = (i/5)+"px"
        setTimeout(() => {
            asside.style.width = i + "px"
            
        }, 100);
        i-=25
    }
    jhj=7
    setTimeout(() => {
        asside.style.display = "none"
    }, 650)

}
// const sen = "my name is John and I am a wizard"
// arr = sen.split(' ')
// console.log(sen)

// let [first, second, third, , fifth] = sen

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fifth)
const arr = [1,2,3,4,5]
// let newarr = []
// let double = item => item*2
// for(let i=0;i<arr.length;i++){
//     newarr.push(double(arr[i]))
// }
let newarr = arr.map(item => item*2)



console.log(newarr)
let image1 = document.getElementById("temp1")
image1.addEventListener('click', ()=> {
    window.location.href = "templates/temp1.html"
    
})
