import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import HeaderSticks from './modules/HeaderSticks';

var mobileMenu = new MobileMenu();
new RevealOnScroll( $('.feature-item'),'85%');
new RevealOnScroll( $('.testimonial'), '60%');
var headerSticks = new HeaderSticks();
