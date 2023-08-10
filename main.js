// CKEDITOR
CKEDITOR.replace('textarea');

let contentCopy = document.getElementById("editor-content-copy")
let postButton = document.getElementById("postButton")

postButton.addEventListener('click', () => {
    //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
    contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted text

    let btn = document.createElement("button")
    btn.innerText = "delete"
    contentCopy.appendChild(btn)


    function btnRemove() {
        contentCopy.remove()
    }
    btn.addEventListener("click", btnRemove)

});

// LogIn

function LogIn(params) {
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")
    let showName = document.getElementById("user-name")
    localStorage.setItem("name", name.value)

    if (name.value === "" ){
        console.log("Pleas enter Name");
    }else if (pass.value === ""){
        console.log("Pleas enter Pass");
    }else{
        showName.innerText = "hello " + name.value
        location.href = "./bloog.html"

    }

};
function Logout(){
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")
    let showName = document.getElementById("user-name")
if(name.value === "Budur"){
    location.href = "./index.html"
}else{
    console.log("somthing")
}
}
// Bloog
