//counter code
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
};


// submit names
var nameInput = document.getElementById('name');
var name  = nameInput.value;
var submit = document.getElementById('submit_btn');
    submit.onclick = function() {
        
        //make a request to the server annd send the names 
        
        //capture the list of names and render as a list
        
        var names = ['name1','name2','name3'];
        var list = '';
        for(var i=0;i<names.length;i++)
            list+ = '<li>'+ names[i] +'</li>'
            var ul = document.getElementById('namelist');
                ul.innerHTML = list;
    }








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