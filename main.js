let stack=document.getElementById("stack");
let status=document.getElementById("status");

let stack1;

class Stack{

    constructor(h){
        this.height=(h==="")?5:(+h);
        this.array=[];
        this.ptr=0;
    }
    isEmpty(){
        if(this.ptr===0){
            return true;
        }else{
            return false;
        }
    }
    isFull(){
        if(this.ptr===this.height){
            return true;
        }else{
            return false;
        }
    }
    pushItem(item){
        if(!this.isFull()){
            this.array.unshift(item);
            this.ptr++;

        }else{
            status.innerHTML="Stack is Full";
        }
    }
    popItem(){
        if(!this.isEmpty()){
            this.array.shift();
            this.ptr--;
        }else{
            status.innerHTML="Stack is Empty";
        }
    }
    checkStatus(){
        if(!this.isEmpty() && !this.isFull()){
            status.innerHTML="Push/Pop Items";
        }
    }
    displayStack(){
        stack.innerHTML="";
        this.array.forEach(function(data){
            stack.innerHTML+="<div class='block'>"+data+"</div>"
        })
    }
}




document.getElementById("push").addEventListener("click",function(){
    stack1.checkStatus();
    let pushValue=document.getElementById("pushElement").value;
    if(pushValue!==""){
        stack1.pushItem(pushValue);
        stack1.displayStack();
    }
})

document.getElementById("pop").addEventListener("click",function(){
    stack1.popItem();
    stack1.displayStack();
    stack1.checkStatus();
})

document.getElementById("size-btn").addEventListener("click",function(){
    stack.innerHTML="";
    let length=document.getElementById("stackSize").value;
    if(!isNaN(+length)){
        status.innerHTML="Push/Pop Items";
        stack1=new Stack(length);
    }else{
        status.innerHTML="Enter a valid number";
    }
})





