var form1=document.getElementById('form1');
function validate(callback){
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    if(user=='admin' && pass=='12345' ){
        callback();
    }

}
function act(){
     form1.setAttribute("action","welcome.html")
  
}