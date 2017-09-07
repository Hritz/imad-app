/*/counter code
var button = document.getElementById('counter');
button.onclick = function() {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
        request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            
            //take somem action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
        // Not done yet - req phase
        request.open('GET', 'http://ritukashyap212.imad.hasura-app.io/counter',true);
        request.send(null);
}; */


var submit = document.getElementById('submit_btn');
    submit.onclick = function() {
        
         //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
        request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            
            //take somem action
            if(request.status === 200) {
                alert('logged in successfully!');
            } else if(request.status === 403) {
                alert('username/password is invalid.');
            } else if(request.status === 500) {
                 alert('something went wrong on the server.');
            }
         // Not done yet - req phase
        }
    };
       
        // submit names
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', 'http://ritukashyap212.imad.hasura-app.io/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));
        
        //make a request to the server annd send the names 
        
};





/*console.log('Loaded!');
    
    //change the text of main-text div
    var element = document.getElementById("main-text");
    element.innerHTML = "New Value";
    
    //move the image
    var img = document.getElementById("madi");
    
    var marginLeft =0;
    function moveRight(){
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft +'px';
    }
    
    img.onclick = function() {
        var interval = setInterval(moveRight, 10);
        
    };*/