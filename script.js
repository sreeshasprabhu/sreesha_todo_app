//Creating an object
var xhttp = new XMLHttpRequest();
//Eventlistener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4 && this.status==200){
        // document.getElementById("demo").innerHTML=this.reponseText;
        var response=JSON.parse(this.responseText);        
         var output="<th>userid</th><th>id</th><th>title</th><th>Completed</th> ";
         var count=0;
         
         for(var i=0;i<response.length;i++){          
           if(response[i].completed==true){
            output+="<tr><td>" + response[i].userId + "</td><td>" + response[i].id + "</td><td>" + response[i].title + "</td><td>" + '<input type="checkbox" disabled=true name="test_name" value="'+ response[i].completed +'">' + '<br></input>'
         + "</td></tr>";
           }                        
          else{
            output+="<tr><td>" + response[i].userId + "</td><td>" + response[i].id + "</td><td>" + response[i].title + "</td><td>" + '<input type="checkbox"  name="test_name"  value="'+ response[i].completed +'">' + '<br></input>'
             + "</td></tr>"; 
            
                }  
            }         
         document.getElementById("tbll").innerHTML=output;
        //  var v=document.getElementsByName("test_name"); 
        //  function clkk(){
        //  var p= new Promise((resolve,reject)=>{
        //    if ((v.checked).length==5){
        //      resolve();
        //    }
        //    else{
        //      reject();
        //    }

        //  }) ;
        //  p.then(()=>{
        //    alert("Congrats! 5 Tasks completed!!")
        //  })
        //  .catch(()=>{
        //    console.log("error");
        //  })
        // }
        $('input[type="checkbox"]').click(function(){
          let P = new Promise((res, rej) => {
              if ($("input:checkbox:checked").length ==5) {
                  res();
              } else {
                  rej();
              }
          });

          P.then(() => {
              console.log("completed");
              alert(" 5 task is completed");
          }).catch(() => {
              console.log("rejected")
          })
        });
      
  


    

    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
