var paragraphCount = 1;

$(document).ready(function() {

    $('.generate').click(function() {
        generate(paragraphCount);
    });

});

function changeParagraphs() {
    val = document.getElementById("selected").value;
    paragraphCount = val;
}

function generate(paragraphs) {

    var paragraphLength = 1500;
    var getUrl = '../../kanye.txt';

    $.get(getUrl, function(data) {
        var lineData = data.split('\n');

        var tempIpsum = '\t';
        var finalIpsum = '\t';

        for(var i = 0; i < paragraphs; i++) {
            var randomLine = '';

            // create a paragraph and avoid empty lines in the text
            while (tempIpsum.length < paragraphLength) {
                // select a random Yeezy bar *flame emoji*
                var rand = Math.floor((Math.random() * lineData.length) + 1);
                randomLine = typeof lineData[rand] !== 'undefined' ? lineData[rand].trim() : '';
                if (randomLine !== '') {
                    tempIpsum += (randomLine + '. ');
                }
            }
            finalIpsum += (tempIpsum + ('\n\n<br><br>'));
            tempIpsum = '';
        }

        var html = '<p>' + finalIpsum + '</p';
        var ele = document.getElementById('ipsum');
        ele.innerHTML = html;
    });

}
