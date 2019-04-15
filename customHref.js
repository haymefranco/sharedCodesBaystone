// SEARCH A SPECIFIC LINK AND ADD / REMOVE THE FIRST WORDS ON HREF
$(".wrap__page-content a").each(function(){
    var textHref = $(this).attr('href');
    var x = textHref.split('0014230/', 2);
    var y = '';

    if(x[0] == '//my.theonlinepractice.com/'){
        x[0] = y;
        var q = $(this).attr('href', x[0] + x[1]);
        console.log(x);
    }

});
