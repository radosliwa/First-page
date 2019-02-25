import $ from 'jquery';


class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.primaryNavEl = $('.primary-nav a');
    this.goToSection();
    this.events();
  }
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  goToSection() {
    var that = this;
    this.primaryNavEl.click(function() {
      that.toggleTheMenu();
    })

  }
  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
/**/