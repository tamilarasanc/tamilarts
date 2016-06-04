
$(document).ready(function(e) {
    $("button#submit").click(function (e) {
        e.preventDefault();
        alert('1');

        if( $('#name').val() == "" || $('#email').val() == "" || $('#mobile').val() == ""  || $('#comments').val() == "")
        {
            alert('Fill The Fields')
            e.preventDefault();
        }
       else{
            var formData = new FormData($(this)[0]);
            $.ajax({
                url: 'user/contact',
                type: 'POST',
                data: formData,
                async: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
                },
                success: function (data) {
                    $('#coursework_list').html(data);
                    $('#course_work_school_class_id').val("");
                    $('#course_work_school_section_id').val("");
                    $('#digital_asset_folder_id').val("");
                    $('#course_work_file').val("");

                },
                cache: false,
                contentType: false,
                processData: false
            });

            return false;
        }
    });
});