(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{90:function(e,t,i){"use strict";i.r(t),i.d(t,"SbbFooterColumn",function(){return o});var n=i(10),o=function(){function e(){this.isOpen=!1}return e.prototype.componentDidLoad=function(){var e=this,t=document.querySelectorAll("sbb-footer-column");this.accordions=Array.from(t).filter(function(t){return t!==e.element}),this.element.addEventListener("transitionend",this.transitionEnd.bind(this)),this.element.addEventListener("sbb-footer-column_close-accordion",this.closeAccordion.bind(this)),this.titleElement=this.element.querySelector("sbb-footer-column-title")},e.prototype.componentDidUnload=function(){this.element.removeEventListener("transitionend",this.transitionEnd.bind(this)),this.element.removeEventListener("sbb-footer-column_close-accordion",this.closeAccordion.bind(this))},e.prototype.transitionEnd=function(){this.element.style.height=null,this.isOpen?(this.element.classList.add("visible"),this.titleElement.classList.add("visible")):(this.element.classList.remove("visible"),this.titleElement.classList.remove("visible"))},e.prototype.isDesktopViewport=function(){return window.innerWidth>1024},e.prototype.toggleAccordion=function(){this.isDesktopViewport()||(this.isOpen?this.closeAccordion():this.openAccordion())},e.prototype.openAccordion=function(){var e=this;this.isOpen=!0,this.element.style.height="auto";var t=this.element.offsetHeight;this.element.style.height="0px",setTimeout(function(){e.element.style.height=t+"px"},0),this.closeOpenAccordions()},e.prototype.closeAccordion=function(){var e=this;this.isOpen&&(this.isOpen=!1,this.element.style.height=this.element.offsetHeight+"px",setTimeout(function(){e.element.style.height="0px"},0))},e.prototype.closeOpenAccordions=function(){if(this.isOpen){var e=new CustomEvent("sbb-footer-column_close-accordion");this.accordions.forEach(function(t){t.dispatchEvent(e)})}},e.prototype.render=function(){return[Object(n.b)("li",{class:"footer-columns-list-item",onClick:this.toggleAccordion.bind(this)},Object(n.b)("slot",null))]},Object.defineProperty(e,"is",{get:function(){return"sbb-footer-column"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{accordions:{state:!0},element:{elementRef:!0},isOpen:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:block;border-top:1px solid #e5e5e5;padding:2.5rem 1.375rem 3.5rem;height:0;overflow:hidden;-webkit-transition:height .4s ease-in-out;transition:height .4s ease-in-out;border-bottom:1px solid #d2d2d2;margin-bottom:-1rem}:host(.visible){height:auto}@media (min-width:643px){:host{padding-right:2.75rem;padding-left:2.75rem}}@media (min-width:1025px){:host{float:left;display:inline-block;width:25%;height:auto;padding-top:5rem;padding-right:1.5rem;padding-bottom:5rem;border-top:0;border-bottom:none}}"},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=35.4397f36b.chunk.js.map