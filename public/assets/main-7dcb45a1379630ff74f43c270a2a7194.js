
$(document).ready(function(e) {
    $("button#submit").click(function (e) {
        e.preventDefault();

        if( $('#name').val() == "" || $('#email').val() == "" || $('#mobile').val() == ""  || $('#comments').val() == "")
        {
            $( "#name" ).addClass( "myClass");
            $( "#email" ).addClass( "myClass");
            $( "#mobile" ).addClass( "myClass");
            $( "#comments" ).addClass( "myClass");
            e.preventDefault();
        }
       else{
            var url = "/user/contact"; // the script where you handle the form input.

            $.ajax({
                type: "POST",
                url: url,
                data: $("#data4").serialize(), // serializes the form's elements.

                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
                },
                success: function (data) {


                    $('.list').html(data);


                }
            });
        }
    });
});
