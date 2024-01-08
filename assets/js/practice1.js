const tagInput = document.getElementById('tag-input');
tagInput.addEventListener('keypress',function(event){
    if(event.keyCode==13){
    // alert('hi');
    const tag= document.getElementById('tags');
    tag.innerHTML="<h1>hello</h1>";

        
    }
})