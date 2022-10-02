import 'shiny';
import { handleSever } from './sever-foo';
import { watchActivity, unrupt } from './rupture';
import { cleave } from './cleave';

require('./style.css');

$(document).on('shiny:connected', function(event) {
  Shiny.shinyapp.onDisconnected = function() {
    // Add gray-out overlay, if not already present
    let $overlay = $('#shiny-disconnected-overlay');
    if ($overlay.length === 0) {
      $(document.body)
        .append('<div id="shiny-disconnected-overlay"></div>');
    }
  };
});

Shiny.addCustomMessageHandler('sever-it', function(opts) {

  $(document).on('shiny:disconnected', function(event) {
    handleSever(opts);
  });

  $(document).on('shiny:connected', (e) => {
    $('#shiny-disconnected-overlay').remove();
  });
});

Shiny.addCustomMessageHandler('rupture-it', function(opts) {
  watchActivity(opts);
});

Shiny.addCustomMessageHandler('cleave-it', function(opts) {

  $(document).on('shiny:error', function(event) {

    if(!opts.silent_errors && event.error.type != null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});

// chisel
Shiny.addCustomMessageHandler('chisel-it', function(opts) {

  $(document).on('shiny:error', function(event) {
    console.log(event);

    if(event.error.type == null)
      return;

    event.preventDefault();

    if(opts.html == null)
      opts.html = '<span>' + event.error.message + '</span>';

    if(opts.bg_color == null)
      opts.bg_color = 'rgba(0,0,0,0)';

    // apply to all 
    if(opts.ids == null){

      cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
    
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {

        if(value == event.name){
          cleave(event.name, opts.html, opts.color, opts.bg_color, opts.duration, opts.center_vertical, opts.center_horizontal)
        }
      });
    }
  });

  $(document).on('shiny:value shiny:outputinvalidated', function(event){
    if(opts.ids == null){
      $('.cleave-overlay').remove();
    } else { // apply to relevant ids) => {
      opts.ids.forEach((value, index) => {
        if(value == event.name){
          let selector = '#' + event.name + '>.cleave-overlay';
          $(selector).remove();
        }
      });
    }
  });

});

export { unrupt }