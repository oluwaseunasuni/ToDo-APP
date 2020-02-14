//check off specific Todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on trash to delete Todo
$("ul").on("click", "span", function (event) {
    //fades out the List clicked on
    $(this).parent().fadeOut(500,function(){
        //removes the list entirely
        $(this).remove();
    });
    event.stopPropagation();
});

//add Todo to Todo List
$("input[type = 'text']").keypress(function(event){
    //if enter key is pressed
    if(event.which === 13){
        //grab a new todo text from the input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil").click(function(){
    $("input[type = 'text']").fadeToggle(); 
});