(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{129:function(t,e,n){"use strict";n.r(e),n.d(e,"SbbAutocomplete",function(){return o});var i=n(10),o=function(){function t(){var t=this;this.isDirty=!0,this.onFocus=function(){t.hasFocus=!0},this.onBlur=function(){t.hasFocus=!1,t.trigger("sbb-autocomplete_blur")},this.onInput=function(e){var n=e.target.value;t.setValue(n),t.isDirty=!0,t.triggerInputEvent(n)},this.onSuggestionSelected=function(e){t.isDirty=!1,t.setValue(e.label||e),t.triggerSelectionEvent(e)}}return t.prototype.componentWillLoad=function(){this.isDirty=!this.value},t.prototype.getSuggestions=function(){try{var t=JSON.parse(this.suggestions);if(Array.isArray(t))return t}catch(t){throw new Error('\n\t\t\t\t\tsbb-autocomplete: suggestions attribute expected as JSON Array,\n\t\t\t\t\te.g. [{"label": "hello", "id": "world"}]\n\t\t\t\t')}},t.prototype.triggerInputEvent=function(t){this.trigger("sbb-autocomplete_input",{input:t})},t.prototype.triggerSelectionEvent=function(t){this.trigger("sbb-autocomplete_selection",{selection:t})},t.prototype.trigger=function(t,e){var n=new CustomEvent(t,{detail:e});this.element.dispatchEvent(n)},t.prototype.setValue=function(t){this.element.setAttribute("value",t)},t.prototype.render=function(){var t=this,e=this.getSuggestions(),n=!!e.length&&this.hasFocus&&this.isDirty;return Object(i.b)("div",null,Object(i.b)("input",{name:this.name,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,value:this.value}),n?Object(i.b)("ul",null,e.map(function(e){return Object(i.b)("li",{onMouseDown:function(n){n.preventDefault(),t.onSuggestionSelected(e)}},e.label||e)})):"")},Object.defineProperty(t,"is",{get:function(){return"sbb-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},hasFocus:{state:!0},isDirty:{state:!0},name:{type:String,attr:"name"},suggestions:{type:String,attr:"suggestions"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return""},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=74.86a516ae.chunk.js.map