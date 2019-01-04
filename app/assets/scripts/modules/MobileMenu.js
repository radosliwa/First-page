import $ from 'jquery';


class MobileMenu{
  constructor(){
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.primaryNav =$('.primary-nav');
    this.events();
    this.goToSection();
  }
  events(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  goToSection(){
    var that = this;
    this.primaryNav.click(function(){

      that.siteHeader.removeClass('site-header--is-expanded');
      that.menuContent.removeClass('site-header__menu-content--is-visible');

    })

  }
  toggleTheMenu(){
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
/**/
