import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class HeaderSticks{
  constructor(){
    this.SiteHeader = $('.site-header');
    this.TriggerEl = $('.large-banner__title');
    this.pageSections = $('.section');
    this.NavLinks = $('.primary-nav a');
    this.createHeaderWaypoint();
    this.createSectionWaypoints();
    this.createSmoothScroll();
  }

  createSmoothScroll(){
    this.NavLinks.smoothScroll();
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

  createSectionWaypoints(){
    var that = this;
    this.pageSections.each(function(direction){
      var currentSection = this;
      if(direction==='down'){
        new Waypoint({
          element:currentSection,
          handler: function(){
            var navLink = currentSection.getAttribute("data-match-link");
            that.NavLinks.removeClass('is-current-link');
            $(navLink).addClass("is-current-link");
          },
          offset: "25%"
        });
      }else{
        new Waypoint({
          element:currentSection,
          handler: function(){
            var navLink = currentSection.getAttribute("data-match-link");
            that.NavLinks.removeClass('is-current-link');
            $(navLink).addClass("is-current-link");
          },
          offset: "15%"
        });
      }

    });
  }
}

export default HeaderSticks;
