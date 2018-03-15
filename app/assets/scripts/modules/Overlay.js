import $ from 'jquery';


class Overlay{
  constructor(){
    this.openOverlayButton = $('.open-overlay');
    this.overlay = $('.overlay');
    this.closeButton = $(".overlay__close");
    this.events();
  }
  events(){
    this.openOverlayButton.click(this.openOverlay.bind(this));
    this.closeButton.click(this.closeOverlay.bind(this));
    $(document).keyup(this.pressedKeyHandler.bind(this));
  }

  pressedKeyHandler(e){
    if(e.which == 27){
      this.closeOverlay();
    }
  }
  openOverlay(){
    this.overlay.addClass('overlay--is-visible');
    return false;
    /* nie bedzie defaultowo cofac sie do top of the page*/
  }

  closeOverlay(){
    this.overlay.removeClass('overlay--is-visible');
  }
}

export default Overlay;
