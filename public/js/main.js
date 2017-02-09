var DocumentationLayout = function () {

    var toggleSideBar = function (){
        var icon = $('.hamburger').first();
        $('body').toggleClass('sidebar-open');
        icon.toggleClass('is-active');
    };

    var handleSideBar = function () {
        // Sidebar menu slide
        $('.side-nav .has-child a').on('click',function(e){
            var menu = $(this).next('.sub-menu'),listItem = $(this).parent('li');

            menu.collapse('toggle');
            listItem.toggleClass('open');
        });

        // Open the menu if Active
        var openMenus = $('.side-nav .has-child.open').find('.sub-menu');
        openMenus.collapse('show');

        $('.nav-toggle').on('click',function(e){
            e.preventDefault();
            toggleSideBar();
        });

    };

    var handleMobileOverlay = function () {
        $('.mobile-menu-overlay').on('click',function(e){
            e.preventDefault();

            toggleSideBar();
        });
    };



    var handleSmoothScroll = function(){

        $('a').smoothScroll({
          offset: -100,
        });

    };

    var handleClipBoard = function(){
      /* Prism copy to clipbaord for all pre with copytoclipboard class */
       $('pre.copytoclipboard').each(function () {
           $this = $(this);
           $button = $('<button>Copy to Clipboard</button>');
           $this.wrap('<div/>').removeClass('copytoclipboard');
           $wrapper = $this.parent();
           $wrapper.addClass('copytoclipboard-wrapper').css({position: 'relative'})
           $button.css({position: 'absolute', top: 10, right: 10}).appendTo($wrapper).addClass('copytoclipboard btn btn-default btn-sm');
           /* */
           var copyCode = new Clipboard('button.copytoclipboard', {
               target: function (trigger) {
                   return trigger.previousElementSibling;
               }
           });
           copyCode.on('success', function (event) {
               event.clearSelection();
               event.trigger.textContent = 'Copied';
               window.setTimeout(function () {
                   event.trigger.textContent = 'Copy';
               }, 2000);
           });
           copyCode.on('error', function (event) {
               event.trigger.textContent = 'Press "Ctrl + C" to copy';
               window.setTimeout(function () {
                   event.trigger.textContent = 'Copy';
               }, 2000);
           });
       });
    };



    return {
        //main function to initiate the module
        init: function () {
            handleSideBar();
            handleMobileOverlay();
            handleSmoothScroll();
            handleClipBoard();
        }
    };

}();


jQuery(document).ready(function() {
    DocumentationLayout.init();
});
