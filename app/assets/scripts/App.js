import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var revealOnScrollFeature = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonial = new RevealOnScroll($('.testimonial'), '85%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
