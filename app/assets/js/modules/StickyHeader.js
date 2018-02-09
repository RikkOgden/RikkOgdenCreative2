import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {

    constructor (){
    this.itemTrigger = $(".hero-content");
    this.itemToStick = $(".site-header");
    this.backToTopTrigger = $("#services");
    this.backToTopContent = $(".back-to-top");
    this.pageSection = $(".page-section");
    this.navLinks    = $(".site-header a, .site-footer a");
    this.lazyimages  = $(".lazyload");


    this.addSmoothScroll();
    this.createWaypoints();
    this.backToTop();
    this.createPageSectionWaypoints ();
    this.refreshWaypoints();
    }

    addSmoothScroll (){
    this.navLinks.smoothScroll();
    this.backToTopContent.smoothScroll();
  }

  refreshWaypoints (){
      this.lazyimages.on('load', function(){
      Waypoint.refreshAll();
      });
    }

    createWaypoints (){
      var objThis = this;
          new Waypoint (
          {
          element: objThis.itemTrigger[0],
          handler: function (direction) {

                if (direction == "down") {

                objThis.itemToStick.addClass("site-header--is-scrolling");

                }else {

                objThis.itemToStick.removeClass("site-header--is-scrolling");

                }
          },
            offset: "10%"
    });
    }

    backToTop (){
      var objThis = this;
          new Waypoint (
          {
          element: objThis.backToTopTrigger[0],
          handler: function (direction) {

                if (direction == "down") {
                objThis.backToTopContent.addClass("back-to-top--visible");


                }else {
                objThis.backToTopContent.removeClass("back-to-top--visible");


                }
          },
            offset: "10%"
    });
    }



    createPageSectionWaypoints (){
      var objCurrent = this;
      this.pageSection.each(function(){
        var currentSection = this;

        new Waypoint ({
          element: currentSection,
          handler: function(direction){
            var matchLink = currentSection.getAttribute("data-link");

            if (direction == "down") {
              objCurrent.navLinks.removeClass("is-current-link");
              $(matchLink).addClass("is-current-link");
            }
          },
          offset: "18%"
        });

        new Waypoint ({
          element: currentSection,
          handler: function(direction){
            var matchLink = currentSection.getAttribute("data-link");

            if (direction == "up") {
              objCurrent.navLinks.removeClass("is-current-link");
              $(matchLink).addClass("is-current-link");
            }
          },
          offset: "-40%"
        });

      });


}
}

export default StickyHeader;
