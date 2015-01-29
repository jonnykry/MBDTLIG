var getUrl = ('http://jonnykrysh.me/kanye.txt');

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

    $.get(getUrl, function(data) {
        var input = data;
        var lineData = input.split('\n');

        var tempIpsum = '\t';
        var finalIpsum = '\t';

        for(var i = 0; i < paragraphs; i++) {
            while (tempIpsum.length < 1500) {
                rand = Math.floor((Math.random() * lineData.length) + 1);
                randomLine = lineData[rand].trim();
                while (randomLine === '') {
                    rand = Math.floor((Math.random() * lineData.length) + 1);
                    randomLine = lineData[rand]
                }
                tempIpsum += (randomLine + '. ');
            }
            finalIpsum += (tempIpsum + ('\n\n<br><br>'));
            tempIpsum = '';
        }

        var html = '<p>' + finalIpsum + '</p';
        var ele = document.getElementById('ipsum');
        ele.innerHTML = html;
    });

}