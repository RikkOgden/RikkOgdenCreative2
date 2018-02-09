import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

constructor (els, offset){

this.itemsToReveal = $(els);
this.offsetPercent = offset;
this.hideInitially();
this.createWaypoints();
}

hideInitially (){
  this.itemsToReveal.addClass('reveal-item')
}

createWaypoints (){
var isthis = this;
this.itemsToReveal.each(function(){
var currentItem = this;
  console.log(this);

  new Waypoint (
    {
      element: currentItem,
      handler: function(){
      $(currentItem).addClass("reveal-item--is-visible");
    },
    offset: isthis.offsetPercent
    }
  );


  });
}

}

export default RevealOnScroll;
