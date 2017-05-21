$('.menu-button').click(function() {
    $('#sub-menu').toggle( function() {
        e.preventDefault();
        $this = $(this);
        if($this.hasClass('sub-block-opened')){
            $this.addClass('sub-block-closed').removeClass('sub-block-opened');
        }else{
            $this.removeClass('sub-block-closed').addClass('sub-block-opened');
        }
    });
})