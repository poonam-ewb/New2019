jQuery(document).ready(function($) {
    alert
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