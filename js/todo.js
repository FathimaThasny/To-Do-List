function displayList() {
    // document.getElementById("container").hidden=false;
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             let myobj=JSON.parse(this.responseText);

            setTable(myobj);
            // chequebox(myobj);

        }
    };
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
}

//table format
function setTable(obj){
    // document.getElementById("welcome").style.display="none";
    //let item=obj.item;
    let table ="<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
    for(let i=0;i<obj.length;i++)
    {       
        table+="<tr>";
        if(obj[i].completed==true){
            table+="<td>"+obj[i].title+"</td><td><input type=checkbox  checked disabled></td>";
        }else{
            table+="<td>"+obj[i].title+"</td><td><input type=checkbox name=check onclick=checkcounter()></td>";  
        }
        
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;
}

function checkcounter(){

    var promise = new Promise(function(resolve,reject){
    var count=0;
    check = document.getElementsByName("check");
    
    for(i=0;i<check.length;i++)
    {
        if(check[i].checked==true){
            count=count+1
            // console.log(count);
        }
    }
    

    if(count==5){
        resolve();
       }

    else{
        reject();
       }
       
})
promise
.then(function(){
    alert("Congrats. 5 Tasks have been Successfully Completed!");
})

}



