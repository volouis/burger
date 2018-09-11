$(function(){
    $(".change").on("click", function(event){
        event.preventDefault();

        var id = $(this).attr("data-id");
        
        $.ajax("/burger/" + id, {
            type: "PUT",
        }).then(
            function(){
                console.log("update devoured");
                location.reload();
            }
        );
    })
    
    $("#sub").on("submit", function(event){
        event.preventDefault();

        var data = {
            name: $("#burg").val().trim()
        }

        $.ajax("/burger", {
            type: "POST",
            data: data
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );
    });
})
