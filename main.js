let input=document.querySelector('.entered-list');
let addbtn=document.querySelector('.add');
let tasks=document.querySelector('.tasks');
let notasks=document.querySelector('.item');

window.onload=function(){
    input.focus();
};

addbtn.addEventListener('click',()=>{
    if(input.value.trim()!=0){
        let newItem=document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML=` <span class="box">${input.value}</span>
        <div class="item-btn">
            <i class="fa-solid fa-xmark"></i>
        </div>`
        tasks.appendChild(newItem);
        input.value="";
        notasks.remove();
        input.focus();
    }else{
        alert('enter a task')
    }
})

tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-xmark')){
       e.target.parentElement.parentElement.remove('')
    }
})

tasks.addEventListener('click',(e) =>{
    if(e.target.className.includes( 'box')){
       e.target.classList.toggle('completed');
    }
})



