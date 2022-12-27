let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}















//list galery 

let limist = 12;
function element(thisPag, limist){
let lists = document.querySelectorAll('.lists-galery .items');

function loadIte(){
    
    let beginGet = limist * (thisPag - 1);
    let endGet = limist * thisPag - 1;
    lists.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    listPag();
}
loadIte();
function listPag(){
    let count = Math.ceil(lists.length / limist);
    document.querySelector('.listPag').innerHTML = '';

    if(thisPag != 1){
        let pre = document.createElement('span');
        pre.innerText = 'PREV';
        pre.setAttribute('onclick', "changePage(" + (thisPag - 1) + ")");
        document.querySelector('.listPag').appendChild(pre);
    }

    for(a = 1; a <= count; a++){
        let newPag = document.createElement('span');
        newPag.innerText = a;
        if(a == thisPag){
            newPag.classList.add('activ');
        }
        newPag.setAttribute('onclick', "changePag(" + a + ")");
        document.querySelector('.listPag').appendChild(newPag);
    }

    if(thisPag != count){
        let next = document.createElement('span');
        next.innerText = 'NEXT';
        next.setAttribute('onclick', "changePag(" + (thisPag + 1) + ")");
        document.querySelector('.listPag').appendChild(next);
    }
}
function changePag(i){
    thisPag = i;
    loadIte();
}
}
element(10,2);