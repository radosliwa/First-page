import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import HeaderSticks from './modules/HeaderSticks';
import Overlay from './modules/Overlay';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '50%');
var headerSticks = new HeaderSticks();
var overlay = new Overlay();