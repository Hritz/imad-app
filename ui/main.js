


// submit names
var nameInput = document.getElementById('name');
var name  = nameInput.value;
var submit = document.getElementById('submit_btn');
    submit.onclick = function() {
        
        //make a request to the server annd send the names 
        
        //capture the list of names and render as a list
        
        var names = ['name1','name2','name3'];
        var list = '';
        for(var i=0; i<names.length; i++) {
            
            list+ = '<li>'+ names[i] +'</li>' ;
    }
     var ul = document.getElementById('namelist');
                ul.innerHTML = list;

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