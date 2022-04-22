let temp = null


function swap(data){
    console.log("hello")
 if(!temp){
     temp = data
    data.innerHTML = ` <input value="${temp.innerHTML} " id="textField"/><button onclick="replace()">save</button>`
 }
}




function replace(){
    let tempp = document.getElementById("textField").value
    // if(!tempp){
    //     tempp = document.getElementById("textField").innerHTML
    // }
    console.log(temp)
    console.log(tempp)
    setTimeout(() => {
        
    document.getElementById(temp.id).innerHTML = `${tempp}`
    temp = null
    }, 10);
    // document.getElementById(temp.id).innerHTML = tempp
    // document.getElementById(temp.id).onclick = "swap(this)"
    temp = null
}
function swap1(data,type){
    let typ2 = ''
    let typ
    if(type == 'textarea'){
        typ = type+` `
        typ2 = data.innerHTML +'</textarea>'
    }
    else { 
        typ = 'input'
    }
    console.log("hello")
 if(!temp){
     temp = data
     setTimeout(() => {
        data.innerHTML = ` <${typ} value="${temp.innerHTML} " type="${type}" id="textField">${typ2}<button onclick="replace()">save</button>`
 
     }, 10);
    }
}
function wait(){
    setTimeout(() => {
        uploadFile()
        }, 10000)
}
let pic = null
async function uploadFile(){
    
        
    let formData = new FormData()
    formData.append("file", fileupload.files[0])
    await fetch('../uploads/upload.php', {
        method: "POST",
        body: formData
    })
    setTimeout(() => {
        document.getElementById("profPic").innerHTML =  `
    <img src="${"../uploads/profPics/"+fileupload.files[0].name}" id="prof" alt="">
    `
    }, 10);
    // document.getElementById("prof").src = "../uploads/profPics/"+fileupload.files[0].name
    // console.log(fileupload.files)
    pic = null
    
}
function update(){
    if(!pic){
        
    document.getElementById("profPic").innerHTML = `
    <input type="file" name="fileupload" id="fileupload"/>
    <button id="upload-button" onclick="uploadFile()">change pic</button>
    `
    pic = 7
    }
}

function download(data){
    document.getElementById("save").innerHTML = ""
    document.getElementById("addExp").innerHTML = ""
    document.getElementById("addEdu").innerHTML = ""
    document.getElementById("addHb").innerHTML = ""
    data.innerHTML=""
    let container =  document.getElementById("container")
    container.style.marginLeft = "5%"
    container.style.width = "90%"
    setTimeout(() => {
        window.print()
    }, 100);
}
let exp = 1
function addExp(){
    if(exp<3){
        exp++
        document.getElementById("workExp").innerHTML += `
        <div class="exp">
                    <div class="year"   id="yr${exp}" onclick="swap(this)"> Example 2019-2020</div>
                    <div class="heading"   onclick="swap(this)" id="h${exp}">worked as manager</div>
                    <div class="text"   onclick="swap1(this,'textarea')" id="t${exp}">worked as a manager in green field for a while untill my car broke down</div>
                </div>
        `
    }
}
let edu = 1
function addEdu(){
    if(edu<3){
        edu++
        document.getElementById("Edu").innerHTML += `
        <div class="exp">
                    <div class="year"   id="eyr${edu}" onclick="swap(this)"> Example 2019-2020</div>
                    <div class="heading"   onclick="swap(this)" id="eh${edu}">worked as manager</div>
                    <div class="text"   onclick="swap1(this,'textarea')" id="et${edu}">worked as a manager in green field for a while untill my car broke down</div>
                </div>
        `
    }
}
let hb = 1
function addHb(){
    if(hb<5){
        hb++
        document.getElementById("hobby").innerHTML += `
        
        <li class="heading"   onclick="swap(this)"  id="hb${hb}">New Hobby...</li>
        `
    }
}