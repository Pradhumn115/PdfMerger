let Addfile = document.getElementById('Addfile')
let FileNo = document.getElementById('FileNo')

Addfile.addEventListener('change',()=>{
    FileNo.innerHTML=`Files Uploaded Are ${Addfile.files.length}`

})

let mergebtn = document.getElementsByClassName('div-wrapper')[0]
mergebtn.addEventListener('click',(e)=>{
    if(Addfile.files.length==0){
        alert("Upload Files!")
        e.preventDefault()
    }

})
