

let todoItems=[
    // {
        
    //     title:"write a paper 1",
    //     isFinished:false,
    //     isimportance:false,

    
    // },
    // {
        
    //     title:"write a paper 2",
    //     isFinished:false,
    //     isimportance:false,

    
    // }
];
    
let finishedItems=[];

function renderTodoItemList(todoItems,finishedItems) {
    let paneEl=document.querySelector("#todolist>.list-pane");
    paneEl.innerHTML="";
    // for (let i=0;i<paneEl.childNodes,length;i++){
    //     paneEl.childNodes[i].remove();

    for (let  i=0;i<todoItems.length;i++){
        let item=todoItems[i]
        let itemDiv=document.createElement("div");
        itemDiv.className="todo-item";

        let inputEl=document.createElement("input");
        inputEl.type="checkbox";
        // 完成按钮
        inputEl.addEventListener("change",(e)=>{
            
            finishedItems.push(item);
            todoItems.splice(i,1);
            console.log("finished:",i,todoItems,finishedItems);
            renderTodoItemList(todoItems,finishedItems);


        });

        let titleEl=document.createElement("div");
        titleEl.className="title";
        titleEl.contentEditable="true"
        titleEl.addEventListener("input",(e)=>{
            todoItems[i].title=titleEl.innerText
            console.log(todoItems)
        })
        // ssss

        let importanceEl=document.createElement("div");
        importanceEl.className="important-flag";
        importanceEl.innerText="*";
    

        if(item.isImportance){
            importanceEl.classList.add("open");
        }
        importanceEl.addEventListener("click",(e)=>{
            console.log("click:",item);
            if (item.isImportance){
                item.isImportance=false;
            } else{
                item.isImportance=true;
            }
            renderTodoItemList(todoItems,finishedItems);

        });

        let deleteBtnEl=document.createElement("button");
        deleteBtnEl.innerText="delete";
        deleteBtnEl.addEventListener("click",(e)=>{
            console.log("click",item);
            todoItems.splice(i,1);
            renderTodoItemList(todoItems,finishedItems);


        })
       

        titleEl.innerText=item.title;

        itemDiv.append(inputEl);
        itemDiv.append(titleEl);
        itemDiv.append(importanceEl);
        itemDiv.append(deleteBtnEl);
        
        
        paneEl.append(itemDiv);
     
        
        // var input = document.getElementById("abc");
        // input.addEventListener("keyup", function(event) {
        //     event.preventDefault();
        //     if (event.KeyboardEvent.keyCode===13) {
        //         document.getElementById("add-btn").click();
        //     }
        // });
        // 想用回车键代替add按钮，失败了
    }
}
// function keyHandler(e) {
//     if(e.keyCode !==13||title.value.trim().length===0)return;
//     list.todolist.push(title,value);
//     title.value="";
//     render()
    
// }失败x2

function renderFinishedItemList(todoItems,finishedItems) {
    let paneEl=document.querySelector("#todolist>.list-pane");
    paneEl.innerHTML="";
    // for (let i=0;i<paneEl.childNodes,length;i++){
    //     paneEl.childNodes[i].remove();

    for (let  i=0;i<finishedItems.length;i++){
        let item=finishedItems[i]
        let itemDiv=document.createElement("div");
        itemDiv.className="todo-item";

       

        let titleEl=document.createElement("div");
        titleEl.className="title";
        

        let importanceEl=document.createElement("div");
        importanceEl.className="important-flag";
        importanceEl.innerText="*";
        if(item.isImportance){
            importanceEl.classList.add("open");
        }
    
        titleEl.innerText=item.title;
        

       
        itemDiv.append(titleEl);
        itemDiv.append(importanceEl);
      
        
        
        paneEl.append(itemDiv);
        
     
    }
}
        
function renderInputPane(todoItems){
    let inputpaneEl=document.querySelector("#todolist>.input-pane");

    let addBtnEL=inputpaneEl.querySelector("#add-btn");
    let hisBtnEL=inputpaneEl.querySelector("#his-btn");

    addBtnEL.addEventListener("click",(e)=>{
        let inputEl=inputpaneEl.querySelector("input");
        if(inputEl.value==""){
            alert("空白事项")
        }else{
        todoItems.push({
        title:inputEl.value,
        isFinished:false,
        isimportance:false,

    

        })
        inputEl.value=""
    }
        // 填值push
        // 看表单属性和方法
        console.log("add a item",inputEl.value);
        // console.log(todoItems);
        renderTodoItemList(todoItems,finishedItems);
        // 修改文档，节点移除
    });
    hisBtnEL.addEventListener("click",(e)=>{
        if(hisBtnEL.classList.contains("open")){
            hisBtnEL.classList.remove("open");
            renderTodoItemList(todoItems,finishedItems)
           

        }else{
            hisBtnEL.classList.add("open");
            renderFinishedItemList(todoItems,finishedItems)
        }

        
    });

    // let btnEl=document.querySelector("#todolist #add-btn");

}


renderInputPane(todoItems,finishedItems);
renderTodoItemList(todoItems,finishedItems);