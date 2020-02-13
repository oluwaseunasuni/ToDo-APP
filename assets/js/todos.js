//check off specific Todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

//click on X to delete Todo
$("span").click(function(event){
    //fades out the List clicked on
    $(this).parent().fadeOut(500, function(){
        //removes the list entirely
        $(this).remove();
    });
    event.stopPropagation();
});
