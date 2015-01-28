$(document).ready(function() {

    $('.generate').click(function() {
        $.get('http://localhost:63342/webdev/kanyeipsum/js/kanye.txt', function(data) {
            var input = data;
            // console.log(data);
            var lineData = input.split('\n');

            var loremIpsum = '\t';

            while(loremIpsum.length < 1500) {
                rand = Math.floor( (Math.random() * lineData.length) + 1 );
                randomLine = lineData[rand].trim();
                while(randomLine === '') {
                    rand = Math.floor( (Math.random() * lineData.length) + 1 );
                    randomLine = lineData[rand]
                }
                loremIpsum += (randomLine + '. ');
            }

            console.log(loremIpsum);
            var html = '<p>' + loremIpsum + '</p';
            var ele = document.getElementById('ipsum');
            ele.innerHTML = html;
        });
    });

});