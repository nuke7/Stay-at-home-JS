let name = 'Adam'
console.log(name + "'s apples")
console.log('hello world')

$('h1').text('We are having a break');
$('h3').html('something else is here - Likes: <strong> 13 </strong>');

$('strong').css('background', 'lightgreen');
$('strong').css('padding', '5px');

let color = 'blue'; //css class, not color name or code :) 

$('h2').toggleClass(color);

$('ul').append('<li> My name is ' + name + '</li>');

let addButtonFunction = () => {
    if ($('li').length < 7) {
        $('ul').append('<li> My name is ' + name + '</li>');
    }
};

let removeButtonFunction = () => {
    if ($('li').length > 1) {
        $('li:last-child').remove();
    }
}

$('#add-b').click(addButtonFunction);

$('#remove-b').click(removeButtonFunction);

let colors = ['orange', 'lime', 'lightgreen', 'magenta', 'red'];

colors.forEach((color) => {
    $('#box').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});