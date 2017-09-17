$(function() {
    
   $('#html').click(function(){
        $('.css,.jquery,.dc').removeClass('avt');
        $('.html').addClass('avt');
   });
    
    $('#css').click(function(){
        $('.html,.jquery,.dc').removeClass('avt');
        $('.css').addClass('avt');
   });
    
     $('#jq').click(function(){
        $('.css,.html,.dc').removeClass('avt');
        $('.jquery').addClass('avt');
   });
    
    
    $('#dc').click(function(){
        $('.css,.jquery,.html').removeClass('avt');
        $('.dc').addClass('avt');
   });

    
    $('#html,#css,#jq,#dc').click(function(){
       $('.page-content').addClass('with_nav'); 
       $('.title_gradient').addClass('with_nav');
       $('.left').addClass('with_nav');
    });
    
    $('.cross').click(function(){
        $('.sub').removeClass('avt');
        $('.page-content').removeClass('with_nav');
        $('.title_gradient').removeClass('with_nav');
        $('.left').addClass('with_nav');
    });
    
    $('.sub a').click(function(){
        $('.sub a').not(this).removeClass('active_sub');
        $(this).addClass('active_sub'); 
    });

//    $('svg').click(function(){
//        $('.quote').slideUp('slow');
//        $('body').css('overflow-y','visible');
//        $('.chapter_title').fadeIn('slow');
//    });
    
    $('#container').ready().addClass('active');
        setTimeout(function(){
            $('.quote').slideUp('slow');
            $('body').css('overflow-y','visible');
            $('.chapter_title').fadeIn('slow');                              
        }, 3950);
//    
    //"active clicks on nav---------------------------------------------
    
    if ($('blockquote').is(':visible')){
        $('body').css('overflow','hidden');
    }
    
    
    
    //data-content-target clicks------------------------------------------
    
    
    $('.mini-circle').click(function() {
        var contentTarget = $(this).attr('data-content-target');
         
        $('.mini-circle').html('<div></div>');
        $(this).html('<div class="active_circle"></div>');
        
        $('.meat_p,.links,.code').removeClass('active');
        $('[data-content=' + contentTarget + ']').addClass('active');
        
        console.log(contentTarget);
    });
    
    //Random Quotes HTML------------------------------------------
    
        var myQuotes = [{
            quote: "\u201CWebsites should look good from the inside and out.\u201D",
            cite: "Paul Cookson",
     
        }, {
            quote: "\u201CWe aren’t designing photocopies of web pages, we’re designing web pages.\u201D",
            cite: "Andy Clarke",
        
        }, {
            quote: "\u201CDesign is creativity with strategy.\u201D",
            cite: "Rob Curedale",
          
        }];

        var randomQuote = Math.floor(Math.random() * myQuotes.length)

        $('#html_quote').text(myQuotes[randomQuote].quote);
        $('#html_cite').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);
    
    //Random Quotes CSS------------------------------------------
    
        var myQuotes = [{
            quote: '\u201CGood design is obvious. Great design is transparent.\u201D',
            cite: "Joe Sparano",
     
        }, {
            quote: '\u201CDigital design is like painting, except the paint never dries.\u201D',
            cite: "Neville Brody",
        
        }, {
            quote: '\u201CRemember it takes a lot of shit, to create a beautiful flower.\u201D',
            cite: "Jacob Cass",
          
        }];

        var randomQuote = Math.floor(Math.random() * myQuotes.length)

        $('#css_quote').text(myQuotes[randomQuote].quote);
        $('#css_cite').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);


    //Random Quotes Jquery------------------------------------------
    
            var myQuotes = [{
            quote: '\u201CWhat separates design from art is that design is meant to be… functional.\u201D',
            cite: "Cameron Moll",
     
        }, {
            quote: '\u201CGreat web design without functionality is like a sports car with no engine.\u201D',
            cite: "Paul Cookson",
        
        }, {
            quote: '\u201CA picture is worth a thousand words. An interface is worth a thousand pictures.\u201D',
            cite: "Ben Schneiderman",
          
        }];

        var randomQuote = Math.floor(Math.random() * myQuotes.length)

        $('#jq_quote').text(myQuotes[randomQuote].quote);
        $('#jq_cite').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);
    
    
    //Random Quotes DC------------------------------------------
    
            var myQuotes = [{
            quote: '\u201CGive a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.\u201D',
            cite: "Waseem Latif",
     
        }, {
            quote: '\u201CIt’s through mistakes that you actually can grow. You have to get bad in order to get good.\u201D',
            cite: "Paula Scher",
        
        }, {
            quote: '\u201CFailure will never overtake me if my determination to succeed is strong enough.\u201D',
            cite: "Og Mandino",
          
        }];

        var randomQuote = Math.floor(Math.random() * myQuotes.length)

        $('#dc_quote').text(myQuotes[randomQuote].quote);
        $('#dc_cite').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);


    
    //remove links headline if there's no links------------------------------------------
       
    
    if($('.links.active').children().length > 0){
          $('.links_group h4').css("display", "block");  
        }
        else{
            $('.links_group h4').css("display", "none");
        }
    
    $('.mini-circle').click(function() {
    
        if($('.links.active').children().length > 0){
          $('.links_group h4').css("display", "block");  
        }
        else{
            $('.links_group h4').css("display", "none");
        }
    });
    
    
    $('#container').ready().addClass('active');


});