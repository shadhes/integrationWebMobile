$(document).ready(function(){
    
    $('.menu-button').click(function(e){
        e.preventDefault();
        $this = $(this);
        if($this.hasClass('menu-opened')){
            $this.addClass('menu-closed').removeClass('menu-opened');
        }else{
            $this.removeClass('menu-closed').addClass('menu-opened');
        }
    });
    
});

console.log('coucou je suis bien chargé !')