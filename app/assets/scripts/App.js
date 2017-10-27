import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var revealOnScrollFeature = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonial = new RevealOnScroll($('.testimonial'), '85%');
var stickyHeader = new StickyHeader();
