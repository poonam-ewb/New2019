jQuery(document).ready(function($) {
    alert('hello');
    $.ajax({
        url: my_custom_eneque.ajaxurl,
        type: 'get',
        data: {
            'action':'states_city_filter'
        },
        success: function( response ) {
            console.log(response);
        },
    });
});