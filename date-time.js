$(document).ready(function() {
    setInterval(function() {
        var momentNow = moment();
        $('#date').html(momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#time ').html(momentNow.format('A hh:mm:ss'));
    }, 100);
});
