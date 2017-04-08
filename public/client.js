$(document).ready(function() {
    $('#myButton').click(function() {
        $.ajax({
            url: "/submit_name",
            type: "POST",
            data: {
                password: $('#password').val(),
                confirm: $('#confirm').val()
            }
        })
        .then(function(check) {
            if (check) {
                window.location.href = 'http://www.google.com';
            } else {
                window.location.href = '/ask';
                alert('Passwords do not match, try again.');
            }

        });
    });
});
