

let todoItems=[
    {
        
        title:"write a paper 1",
        isFinished:false,
        isimportance:false,

    
    },
    {
        
        title:"write a paper 2",
        isFinished:false,
        isimportance:false,

    
    }
];

function renderTodoItemList(todoItems) {
    let paneEl=document.querySelector("#todolist>.list-pane");
    for (let item of todoItems){
        let itemDiv=document.createElement("div");
        itemDiv.innerText=item.title;
        paneEl.append(itemDiv);
     
    }
}
renderTodoItemList(todoItems);