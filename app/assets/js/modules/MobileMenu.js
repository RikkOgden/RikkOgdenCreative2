import $ from 'jquery';
class MobileMenu {

//1. create constructor function. This will be run immediately as soon as a new object is created with the 'MobileMenu' class.
  constructor (trigger, content){
    //this.menuIcon     = $('.site-header__menu-icon');
    //this.menuContent  = $('.site-header__menu-content');
    this.menuIcon     = $(trigger);
    this.menuContent  = $(content);
    this.siteHeader   = $('.site-header');
    this.siteHeaderLogo = $(".site-header__logo")
    this.events(); // we want the events handler being listned for by the browser as soon as teh page loads, or the object is created , so we make acall to it to include it in the constructor method.
  }

//2. set the events handler METHOD
// Bind :
// normally - the 'this' keyword references the object that it belongs to.
// however, when 'this' is used in an event handler - it gets set not to the object, but to the DOM element that the event got fired from
//EG as soon as we click on the menuIcon property (.site-header__menu-icon) - 'this' is now associated with the icon, and not the object (MobileMenu).
//'bind' will simply override and set whatever value it has in it's parentheses to be the 'this' keyword
// as 'this' is already referencing the class/object BEFORE the click event fires, we can set it to (itself) to make sure further instances of 'this' referenced by any methods that the event handler calls, is still pointing to the object.

  events (){
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  //3. The METHOD to fire from the events handler
  toggleMenu(){
      this.menuContent.toggleClass('site-nav--is-visible');
      this.siteHeader.toggleClass('site-header--is-expanded');
      this.menuIcon.toggleClass('site-header__menu-icon--close-x');
      this.siteHeaderLogo.toggleClass ('site-header__logo--transparent');
  }

}

export default MobileMenu
