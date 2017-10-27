import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScrollFeature = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonial = new RevealOnScroll($('.testimonial'), '85%');
