let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function (event){
    event.stopPropagation();

    if (inp.value.trim() === "") {
        alert("Please add any task!!");
        return;
    }

    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

    let btnDel=document.createElement("button");
    btnDel.innerText="delete";
    btnDel.classList.add("delete");

    item.appendChild(btnDel);
    ul.appendChild(item);

 });
ul.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let rem=event.target.parentElement;
        rem.remove();
    }
});