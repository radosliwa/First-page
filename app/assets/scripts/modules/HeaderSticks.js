import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class HeaderSticks{
  constructor(){
    this.lazyImages = $('.lazyload');
    this.SiteHeader = $('.site-header');
    this.TriggerEl = $('.large-banner__title');
    this.pageSections = $('.section');
    this.NavLinks = $('.primary-nav a');
    this.createHeaderWaypoint();
    this.createSectionWaypoints();
    this.createSmoothScroll();
    this.removeCurrentLinkWhenOnTop();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on('load',function(){
      Waypoint.refreshAll();
    })
    }
  createSmoothScroll(){
    this.NavLinks.smoothScroll({offset: "10%",speed:500});

  }

  createHeaderWaypoint(){
    var that = this;
    new Waypoint({
      element:this.TriggerEl[0], /*no need for "this" change
      because element is just a property, not a method*/
      handler: function(direction){

        if(direction==="down"){
          that.SiteHeader.addClass('site-header--dark');
        } else{
          that.SiteHeader.removeClass('site-header--dark');
        }
      }
    });
  }
  removeCurrentLinkWhenOnTop(){
    var that = this;
    new Waypoint({
      element:this.TriggerEl[0],
      handler: function(){
        // console.log(this);
        that.NavLinks.removeClass('is-current-link');
      },
      offset: 5
    });
  }
  createSectionWaypoints(){
    var that = this;
    this.pageSections.each(function(){
      var currentSection = this;
        new Waypoint({
          element:currentSection,
          handler: function(direction){
            if(direction==='down') {
            var navLink = currentSection.getAttribute("data-match-link");
            that.NavLinks.removeClass('is-current-link');
            $(navLink).addClass("is-current-link");
          }
          },
          offset: "2%"
        });

        new Waypoint({
          element:currentSection,
          handler: function(direction){
            // console.log("working");
              if(direction==='up') {
            var navLink = currentSection.getAttribute("data-match-link");
            that.NavLinks.removeClass('is-current-link');
            $(navLink).addClass("is-current-link");
          }
          },
          offset:"-55%"
        });

       })
     }
}

export default HeaderSticks;
