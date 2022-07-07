!function(){"use strict";function e(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}!function n(r,t,i){function o(s,l){if(!t[s]){if(!r[s]){if(!l&&e)return e(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};r[s][0].call(c.exports,(function(e){var n=r[s][1][e];return o(n||e)}),c,c.exports,n,r,t,i)}return t[s].exports}for(var a=e,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,n,r){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"fleschKincaidGradeLevel",value:function(e){var n=this.wordCount(e);return n/this.sentenceCount(e)*.39+this.syllableCount(e)/n*11.8-15.59}},{key:"fleschReadingEaseScore",value:function(e){var n=this.wordCount(e);return 206.835-n/this.sentenceCount(e)*1.015-this.syllableCount(e)/n*84.6}},{key:"sentenceCount",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/[\.?!]/,r=[],t=e.split(n),i=t.length-1;i>=0;i--){var o=t[i].trim();""!=o&&r.push(o)}return r.length}},{key:"syllableCount",value:function(e){if("string"!=typeof e&&!(e instanceof Array))return null;e instanceof Array&&(e=e.join(" "));for(var n=this.getWords(e),r=0,t=n.length-1;t>=0;t--)r+=this.wordSyllableCount(n[t]);return r}},{key:"wordSyllableCount",value:function(e){var n=void 0;return(e=e.toLowerCase()).length<=3?1:(n=(e=(e=e.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/,"")).replace(/^y/,"")).match(/[aeiouy]{1,2}/g))?n.length:0}},{key:"wordCount",value:function(e){return this.getWords(e).length}},{key:"getWords",value:function(e){for(var n=[],r=void 0,t=(e=this.removePunctuation(e)).split(" "),i=0;i<t.length;i++)""!=(r=t[i].trim())&&n.push(r);return n}},{key:"removePunctuation",value:function(e){return e.replace(/[^a-zA-z ]/g,"")}}]),e}();r.default=i},{}],2:[function(e,n,r){var t=function(e){return e&&e.__esModule?e:{default:e}}(e("./models/wordsmith"));window.Wordsmith=t.default},{"./models/wordsmith":1}]},{},[2]);var n,r,t={exports:{}};n=t,r=t.exports,function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);this.domain=[],this.range=[],Array.isArray(e)&&(this.domain=e),Array.isArray(n)&&(this.range=n);var r=function(e){if("number"!=typeof e)return null;var n=this.domain[0],r=this.domain[1],t=this.range[0],i=this.range[1];"number"!==t&&"number"!=typeof i&&(t=n,i=r);const o=t+(i-t)/(r-n)*(e-n);return o===1/0?i:o===-1/0||isNaN(o)?t:o}.bind(this);return r.domain=function(e){return Array.isArray(e)&&(this.domain=e),r}.bind(this),r.range=function(e){return Array.isArray(e)&&(this.range=e),r}.bind(this),r}n.exports&&(r=n.exports=t),r.LinearScale=t}();var i=t.exports;let o=null;function a(e,n,r){const t=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);if(e<t||e>o)return 0;if(e===n)return 1;let a,s;e<n?(a=[0,n-t],s=e-t):(a=[0,o-n],s=e-n);return i(a,[0,1])(s)}async function s(e){o=await async function(){return o||(await jQuery.get(headlineengine_powerwords_api).catch((e=>(console.log("Could not load powerwords list"),[])))).map((e=>e.toLowerCase()))}();const n=[headlineengine_readability_range_min||45,headlineengine_readability_range_max||90],r=headlineengine_readability_target||55,t=n[0],i=n[1],s=["Good","Too Simple","Too Complex"],l=[headlineengine_length_range_min||40,headlineengine_length_range_max||90],u=headlineengine_length_target||82,c=["Good","Too Short","Too Long"];const d=function(e){if(!e)return;const n=e.length;let r=0;return n<l[0]?r=1:n>l[1]&&(r=2),{score:a(n,u,l),rating:r,length:n,message:c[r],pass:n>=l[0]&&n<=l[1]}}(e),h=function(e){if(!e)return;const o=Wordsmith.fleschReadingEaseScore(e);let l=0;return o<t?l=2:o>i&&(l=1),{ease_score:o,score:a(o,r,n),rating:l,ease_score:o,message:s[l],pass:o>=t&&o<=i}}(e),g=function(e){if(!e)return;const n=(e=e.toLowerCase().replace(/[^a-z]/g," ")).split(" ").filter((e=>e.length>3)).filter((e=>o.includes(e)));return{score:n.length?1:0,rating:n.length,words:n,pass:n.length>0}}(e),f=d.pass+h.pass+g.pass,y=f>=3?"good":f>=1?"okay":"bad";return{length:d,readability:h,powerwords:g,total_score:(d.score+h.score+g.score)/3,rating:y}}const l=".wp-block-post-title";!async function(){async function e(e){const n=jQuery(l)[0].innerText;if(!n||!n.trim().length)return e.html(""),!1;const r=await s(n),t=jQuery(`\n        <div class='headlineengine-score headlineengine-score-${r.rating}'>\n            <div class='headlineengine-score-value headlineengine-score-value-${r.rating}'>${Math.floor(100*r.total_score)}</div>\n            <div class='headlineengine-score-title'>HeadlineEngine<br>Score</div>\n        </div>`),i=jQuery(`<div class="headlineengine-analysis">\n            <div class="headlineengine-analysis-readability">Readability: ${r.readability.message} (${Math.round(r.readability.ease_score)})</div>\n            <div class="headlineengine-analysis-length">Length: ${r.length.message} (${r.length.length})</div>\n            <div class="headlineengine-analysis-powerwords">Powerwords: ${r.powerwords.words.length?r.powerwords.words.map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(", "):"None"}</div>\n        </div>`);return e.html(t),e.append(i),!0}jQuery((async()=>{let n=jQuery(l);for(;!n.length;)await new Promise((e=>setTimeout(e,200))),n=jQuery(l);const r=jQuery(".edit-post-visual-editor__post-title-wrapper"),t=jQuery("<div id='headlineengine-score-container'></div>");r.after(t),t.hide(),e(t)&&t.slideDown(),n.on("keyup",(function(n){e(t)})),n.on("focus",(function(n){t.stop().stop(),e(t),t.slideDown()})),n.on("blur",(function(e){t.delay(1e3).slideUp()}))}))}()}();
//# sourceMappingURL=headlineengine-gutenberg.js.map
