$(document).ready(function() {
     $("#news > div").hover(function(){
        $(this).find("p").addClass("white");
    }, function(){
        $(this).find("p").removeClass("white");
        
    });
    
      
    /*jcarousel*/ 
    function mycarousel_initCallback(carousel) {
   
    jQuery('#mycarousel-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('#mycarousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};
    jQuery("#mycarousel").jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
    });
    /*jQuery UI Slider - Slider scrollbar*/
   $(function() {
    //scrollpane parts
    var scrollPane = $( ".scroll-pane" ),
      scrollContent = $( ".scroll-content" );
 
    //build slider
    var scrollbar = $( ".scroll-bar" ).slider({
      slide: function( event, ui ) {
        if ( scrollContent.width() > scrollPane.width() ) {
          scrollContent.css( "margin-left", Math.round(
            ui.value / 100 * ( scrollPane.width() - scrollContent.width() )
          ) + "px" );
        } else {
          scrollContent.css( "margin-left", 0 );
        }
      }
    });
 
    //append icon to handle
    var handleHelper = scrollbar.find( ".ui-slider-handle" )
    .mousedown(function() {
      scrollbar.width( handleHelper.width() );
    })
    .mouseup(function() {
      scrollbar.width( "100%" );
    })
    .append( "<span class='ui-icon ui-icon-grip-dotted-vertical'></span>" )
    .wrap( "<div class='ui-handle-helper-parent'></div>" ).parent();
 
    //change overflow to hidden now that slider handles the scrolling
    scrollPane.css( "overflow", "hidden" );
 
    //size scrollbar and handle proportionally to scroll distance
    function sizeScrollbar() {
      var remainder = scrollContent.width() - scrollPane.width();
      var proportion = remainder / scrollContent.width();
      var handleSize = scrollPane.width() - ( proportion * scrollPane.width() );
      scrollbar.find( ".ui-slider-handle" ).css({
        width: 83,
        "margin-left": -40
      });
      handleHelper.width( "" ).width( scrollbar.width() - 80 );
    }
 
    //reset slider value based on scroll content position
    function resetValue() {
      var remainder = scrollPane.width() - scrollContent.width();
      var leftVal = scrollContent.css( "margin-left" ) === "auto" ? 0 :
        parseInt( scrollContent.css( "margin-left" ) );
      var percentage = Math.round( leftVal / remainder * 100 );
      scrollbar.slider( "value", percentage );
    }
 
    //if the slider is 100% and window gets larger, reveal content
    function reflowContent() {
        var showing = scrollContent.width() + parseInt( scrollContent.css( "margin-left" ), 10 );
        var gap = scrollPane.width() - showing;
        if ( gap > 0 ) {
          scrollContent.css( "margin-left", parseInt( scrollContent.css( "margin-left" ), 10 ) + gap );
        }
    }
 
    //change handle position on window resize
    $( window ).resize(function() {
      resetValue();
      sizeScrollbar();
      reflowContent();
    });
    //init scrollbar size
    setTimeout( sizeScrollbar, 10 );//safari wants a timeout
  });
  
  //modal
  jQuery(function($){
            // bind event handlers to modal triggers
            $('body').on('click', '.trigger', function(e){
                e.preventDefault();
                $('#test-modal').modal().open();
                $(".message").fadeOut();
            });
            
            $('body').on('click', '.trigger2', function(e){
                e.preventDefault();
                $('#test-modal2').modal().open();
                $(".message").fadeOut();
            });

            // attach modal close handler
            $('.modal .close').on('click', function(e){
                e.preventDefault();
                $.modal().close();
                $(".phone").removeClass("error");
                $(".modal span").hide(); 
            });

            // below isn't important (demo-specific things)
            $('.modal .more-toggle').on('click', function(e){
                e.stopPropagation();
                $('.modal .more').toggle();
            });
        });
  
   
  $(".email").focus(function(){
     if ($(this).val()==("Ваш e-mail")){
      $(this).val("");
     };
    });
 
    $(".email").blur(function(){
     if ($(this).val()==("")){
      $(this).val("Ваш e-mail");
      };
    });
   $(".name").focus(function(){
     if ($(this).val()==("Представьтесь *")){
      $(this).val("");
     };
    });
 
    $(".name").blur(function(){
     if ($(this).val()==("")){
      $(this).val("Представьтесь *");
      };
    });
    $(".phone").focus(function(){
     if ($(this).val()==("Ваш телефон *")){
      $(this).val("");
     };
    });
 
    $(".phone").blur(function(){
     if ($(this).val()==("")){
      $(this).val("Ваш телефон *");
      };
    });
    
   
    
    var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ ;
    $(".phone").change(function(){
    var phone=$(".phone").val();

     if (phone.search(regex) != -1) {
       $(".send").click(function(){
       $(".modal form, .modal p").fadeOut();
       $(".message").delay(500).fadeIn(1000);
    });
     } else {
      $(".modal span").fadeOut();  
      $(".phone").addClass("error");
      $(".send").after("<span>Номер телефона введен некорректно</span>");
     };
     
    });
    
     
    $(".send").click(function(){
        if ($(".phone").val() == "Ваш телефон *"){
        $(".modal span").fadeOut();  
        $(".phone").addClass("error");
        $(".send").after("<span>Введите Ваш номер телефона</span>");
      }
      });  
        

});