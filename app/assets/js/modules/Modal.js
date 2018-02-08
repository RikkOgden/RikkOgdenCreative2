import $ from 'jquery';

class Modal {

  constructor(trigger, target) {
    this.open =         $(trigger);
    this.close =        $(target +" .button--close-modal");
    this.overlayclose = $(".modal__overlay");
    this.modal =        $(target);
    this.events();
    

  }



  events() {
    this.open.click(this.openModal.bind(this));
    console.log(this.modal);
    this.close.click(this.closeModal.bind(this));
    this.overlayclose.click(this.closeModal.bind(this));
  }

  openModal() {

    $("html").addClass("noscroll");
    this.modal.addClass("modal--is-visible");
    this.modal.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    $(' .button--close-modal').focus();
    });
    return false;
  }

  closeModal() {
    $("html").removeClass("noscroll");
    this.modal.removeClass("modal--is-visible");
    return false;
  }

}

export default Modal;
