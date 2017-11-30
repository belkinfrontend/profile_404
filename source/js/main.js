$(document).ready(function () {
    //alert('Ваша версия jQuery ' + jQuery.fn.jquery);

    $(document).ready(function () {
        $('form').validate({
            submitHandler: function () {
                location.href = form.attr('action');
            }
        });
    });

});