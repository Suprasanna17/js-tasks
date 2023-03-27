function pOver(){
    document.getElementById('p').style.color='red';
}
function pOut(){
    document.getElementById('p').style.color='black';
}
function p(){
    let m=document.getElementById('text').value;
    document.getElementById('p').innerHTML=m;
}
function btnOver(){
    document.getElementById('btn').innerHTML='CLICK HERE !!';
}
function btnOut(){
    document.getElementById('btn').innerHTML='HELLO !!!';
}
function list1over(){
    let t=document.getElementById('id1');
    t.style.color='cyan';
    t.style.fontSize='30px';
}
function list1out(){
    let t=document.getElementById('id1');
    t.style.color='black';
    t.style.fontSize='20px';
}
function list2over(){
    let t=document.getElementById('id2');
    t.style.color='cyan';
    t.style.fontSize='30px';
}
function list2out(){
    let t=document.getElementById('id2');
    t.style.color='black';
    t.style.fontSize='20px';
}
function list3over(){
    let t=document.getElementById('id3');
    t.style.color='cyan';
    t.style.fontSize='30px';
}
function list3out(){
    let t=document.getElementById('id3');
    t.style.color='black';
    t.style.fontSize='20px';
}