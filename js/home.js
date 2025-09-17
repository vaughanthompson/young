// Home page DNA button
$(document).ready(function() {
    var $dnaButton = $('#dna');
    var $weAreWrapper = $('#we-are');

    $dnaButton.click(function(e) {
        e.preventDefault();

        $dnaButton.addClass('hidden');
        $weAreWrapper.addClass('visible');
    });
});
