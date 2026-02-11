let fileInput=document.getElementById("filepicker");
let innerImage=document.querySelector(".inner-upload-image");
let image=null;

let InputImg=document.getElementById("input-image")
let icon=document.querySelector("#icon")
let span=document.querySelector("span")
let genimg=document.querySelector("#generatedImg")
/*let OriginalImg = document.querySelector(".resultImg1 img");
let GeneratedImg = document.querySelector(".resultImg2 img");*/

let uploadBtn=document.querySelector("#upload-btn")
/*let style2=document.querySelector(".style2")
let resultPage=document.querySelector(".result")*/


function handleUpload(){
    const Apikey="JEwkByNDUPvWrQp13hxgjNxB";
    const formdata = new FormData();
    formdata.append("image_file",image);
    formdata.append("size","auto");
    fetch("https://api.remove.bg/v1.0/removebg",{
        method: "POST",
        headers: { "X-Api-Key": Apikey},
        body: formdata,
    })
    .then(function(response){
        return response.blob();
    })
      .then(function(blob){
        /*style2.style.display="none";
        resultPage.style.display="flex";*/
         url=URL.createObjectURL(blob);
        genimg.src = url;
        
      })
    .catch(alert())


}


innerImage.addEventListener("click" , () => {
    fileInput.click();
});
fileInput.addEventListener("change" , () =>{
    image=fileInput.files[0];
    if(!fileInput) return;
    let reader=new FileReader();
    reader.onload=(e)=>{
        console.log(e)
    InputImg.src = `data:${fileInput.type};base64,${e.target.result.split(",")[1]}`
    InputImg.style.display="block";
    icon.style.display="none";
    span.style.display="none";
    /*OriginalImg.src = `data:${fileInput.type};base64,${e.target.result.split(",")[1]}`*/
    }
   reader.readAsDataURL(image);
})
uploadBtn.addEventListener("click",()=>{
   handleUpload()

})
