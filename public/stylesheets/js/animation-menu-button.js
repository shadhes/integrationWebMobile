$(document).ready(function(){

    $('.menu-button').click(function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass('menu-opened')){
            $this.addClass('menu-closed').removeClass('menu-opened');
        }else{
            $this.removeClass('menu-closed').addClass('menu-opened');
        }
    });

    $('#menu-button-grey').click(function(e){
        e.preventDefault();
        var $this = $('#menu01');
        if($($this).hasClass('sub-block-opened')){
            $($this).addClass('sub-block-closed').removeClass('sub-block-opened');
        }else{
            $($this).removeClass('sub-block-closed').addClass('sub-block-opened');
        }
    });

    $('#menu-button-search').click(function(e){
        e.preventDefault();
        var $this = $('#menu02');
        if($($this).hasClass('sub-block-opened')){
            $($this).addClass('sub-block-closed').removeClass('sub-block-opened');
        }else{
            $($this).removeClass('sub-block-closed').addClass('sub-block-opened');
        }
    });

    var url = "stylesheets/css/";
    let fetchStyle = function(url) {
      return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.onload = function() { resolve(); console.log('style has loaded'); };
        link.href = url;

        let headScript = document.querySelector('script');
        headScript.parentNode.insertBefore(link, headScript);
      });
    };


});

console.log('coucou je suis bien chargé !')
