;/*FB_PKG_DELIM*/

__d("MAWExternalLinkUtil",["FBLogger","MAWOembedHelper","MAWOembedIframeContainer.react","Promise","asyncToGeneratorRuntime","err","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h,i=["image/png","image/jpeg","image/jpg"],j=2*1e3;function k(a){return new(h||(h=b("Promise")))(function(b){return c("setTimeout")(b,a)})}function l(a){return(h||(h=b("Promise"))).race([a,k(j)])}function a(a){if(a==null)return null;var b=null;a=a.find(function(a){return Object.values(r).some(function(c){var d=c.schemes;c=c.url;d=d.some(function(b){return b.test(a.entity.url)});d&&(b=c);return d})});return a==null||b==null?null:{oEmbedRequest:b+"?url="+encodeURIComponent(a.entity.url)+"&format=json",oEmbedUrl:a.entity.url}}function e(a){return m.apply(this,arguments)}function m(){m=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b,e=a.fallbackUrl,f=a.qplEvent;a=a.request;b=(b=window.frames["maw-intermediate-iframe"])!=null?b:null;if(b==null){d("MAWOembedIframeContainer.react").createMAWOembedIframeContainer();if(window.frames["maw-intermediate-iframe"]==null){f==null?void 0:f.addPoint("get_oembed_response_returned_null",{string:{get_oembed_response_return:"iframe cannot be found."}});c("FBLogger")("messenger_web_sharing").warn("[external link] Cannot find the iframe to request oembed url response.");return}}try{a=(yield l(d("MAWOembedIframeContainer.react").requestUrl(a,d("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL,b)));if(a==null||a instanceof Blob){f==null?void 0:f.addPoint("get_oembed_response_returned_null",{string:{get_oembed_response_returned_null:"oembedResponse is null or an instance of Blob."}});c("FBLogger")("messenger_e2ee_web").warn("[external link] Failed to fetch oEmbed response: expected json response but got blob.");return}return o({fallbackUrl:e,rawResponse:a})}catch(a){f==null?void 0:f.addPoint("get_oembed_response_returned_null",{string:{get_oembed_response_returned_null:"Error thrown when trying to fetch oembed response in iframe."}});c("FBLogger")("messenger_e2ee_web").warn("[External link] Error thrown when trying to fetch oembed response in iframe.");return}});return m.apply(this,arguments)}function f(a){return n.apply(this,arguments)}function n(){n=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var e,f=a.qplEvent;a=a.url;if(a==null||!Boolean(a)){f==null?void 0:f.addPoint("get_image_blob_response_returned_null",{string:{get_image_blob_response_returned_null:"url was null or undefined"}});return(h||(h=b("Promise"))).resolve()}e=(e=window.frames["maw-intermediate-iframe"])!=null?e:null;if(e==null){d("MAWOembedIframeContainer.react").createMAWOembedIframeContainer();if(window.frames["maw-intermediate-iframe"]==null){f==null?void 0:f.addPoint("get_image_blob_response_returned_null",{string:{get_image_blob_response_returned_null:"iframe cannot be found."}});c("FBLogger")("messenger_e2ee_web").warn("[external link] Cannot find the iframe to request image blob response.");return}}a=(yield l(d("MAWOembedIframeContainer.react").requestUrl(a,d("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL,e)));if(a instanceof Blob)return a;f==null?void 0:f.addPoint("get_image_blob_response_returned_null",{string:{get_image_blob_response_returned_null:"imageBlobResponse is not instance of Blob"}});c("FBLogger")("messenger_e2ee_web").warn("[external link] Failed to fetch image blob response. ");return(h||(h=b("Promise"))).resolve()});return n.apply(this,arguments)}function o(a){var b,d=a.fallbackUrl;a=a.rawResponse;if(a.version!=="1.0")throw c("err")("Unsupported response version from oEmbed API");if(a.type==="photo"&&a.url==null)throw c("err")("Unsupported response from oEmbed API: photo does not have url field");return{author_name:a.author_name!=null?decodeURIComponent(a.author_name):void 0,height:a.height,thumbnail_height:a.thumbnail_height,thumbnail_url:a.thumbnail_url,thumbnail_width:a.thumbnail_width,title:a.title!=null?decodeURIComponent(a.title):void 0,type:a.type,url:(b=a.url)!=null?b:d,width:a.width}}function p(a){var b=q.some(function(b){return b.test(a)});return b?!0:Object.values(r).some(function(b){b=b.url;return a.startsWith(b)})}var q=[new RegExp("^http(?:s)?:\\/\\/i1\\.sndcdn\\.com.+$"),new RegExp("^http(?:s)?:\\/\\/i\\.scdn\\.co.+$"),new RegExp("^http(?:s)?:\\/\\/(?:#!)?[^#?\\/]+\\.cloudfront\\.net.+$"),new RegExp("^http(?:s)?:\\/\\/pi\\.tedcdn\\.com.+$"),new RegExp("^http(?:s)?:\\/\\/static01\\.nyt\\.com.+$"),new RegExp("^http(?:s)?:\\/\\/i\\.vimeocdn\\.com.+$"),new RegExp("^http(?:s)?:\\/\\/(?:#!)?[^#?\\/]+\\.tiktokcdn\\.com.+$")],r={NYTimes:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/www\\.nytimes\\.com\\/svc\\/oembed$"),new RegExp("^http(?:s)?:\\/\\/nytimes\\.com\\/.+$"),new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?nytimes\\.com\\/.+$")],url:"https://www.nytimes.com/svc/oembed/json/"},SoundCloud:{schemes:[new RegExp("^http(?:s)?:\\/\\/soundcloud\\.com\\/.+$"),new RegExp("^http(?:s)?:\\/\\/on\\.soundcloud\\.com\\/.+$"),new RegExp("^http(?:s)?:\\/\\/soundcloud\\.app\\.goog\\.gl\\/.+$")],url:"https://soundcloud.com/oembed"},Spotify:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/open\\.spotify\\.com\\/.+$")],url:"https://open.spotify.com/oembed"},Spreaker:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?spreaker\\.com\\/.+$")],url:"https://api.spreaker.com/oembed"},TED:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/ted\\.com\\/talks\\/.+$"),new RegExp("^http(?:s)?:\\/\\/www\\.ted\\.com\\/talks\\/.+$")],url:"https://www.ted.com/services/v1/oembed.json"},TikTok:{schemes:[new RegExp("^http(?:s)?:\\/\\/www\\.tiktok\\.com\\/.+$"),new RegExp("^http(?:s)?:\\/\\/www\\.tiktok\\.com\\/(?:#!)?[^#?\\/]+\\/video\\/.+$")],url:"https://www.tiktok.com/oembed"},Vimeo:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/.+$"),new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/album\\/(?:#!)?[^#?\\/]+\\/video\\/.+$"),new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/channels\\/(?:#!)?[^#?\\/]+\\/.+$"),new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/groups\\/(?:#!)?[^#?\\/]+\\/video\\/.+$"),new RegExp("^http(?:s)?:\\/\\/vimeo\\.com\\/ondemand\\/(?:#!)?[^#?\\/]+\\/.+$"),new RegExp("^http(?:s)?:\\/\\/player\\.vimeo\\.com\\/video\\/.+$")],url:"https://vimeo.com/api/oembed.json"},youtube:{discovery:!0,schemes:[new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/watch.+$"),new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/v\\/.+$"),new RegExp("^http(?:s)?:\\/\\/youtu\\.be\\/.+$"),new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/playlist\\?list\\=.+$"),new RegExp("^http(?:s)?:\\/\\/youtube\\.com\\/playlist\\?list\\=.+$"),new RegExp("^http(?:s)?:\\/\\/(?:[-\\w]+\\.)?youtube\\.com\\/shorts.+$")],url:"https://www.youtube.com/oembed"}};g.allowedPreviewTypes=i;g.findFirstAvailableOembedUrlAndRequestPair=a;g.getOembedResponse=e;g.getImageBlobResponse=f;g.isAllowedRequestForFbsbx=p}),98);
__d("SecurePostMessage",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h="*";a={sendMessageToSpecificOrigin:function(a,b,c,d){c!==h||g(0,21157),a.postMessage(b,c,d)},sendMessageForCurrentOrigin:function(a,b){a.postMessage(b)},sendMessageAllowAnyOrigin_UNSAFE:function(a,b,c){a.postMessage(b,h,c)}};e.exports=a}),null);
__d("SecureMessageListener",["SecurePostMessage","URI"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){function a(a){var b=this;this.$3=null;this.$4=!1;this.$1=a;this.$5=function(a){b.run(a)}}var b=a.prototype;b.setEventHandler=function(a){this.$2=a;return this};b.setSupportedOrigins=function(a){this.$3=a;return this};b.skipOriginCheck_UNSAFE=function(){this.$4=!0;return this};b.beginListening=function(){this.$1.addEventListener("message",this.$5);return this};b.stopListening=function(){this.$1.removeEventListener("message",this.$5);return this};b.run=function(a){if(this.$3==null||this.$3.length===0){if(!this.$4&&a.origin!==this.$1.location.origin)return}else if(!this.isSupportedOrigin(this.$3,a.origin))return;if(this.$2){var b=function(b){d("SecurePostMessage").sendMessageToSpecificOrigin(a.source,b,a.origin)};this.$2(a,b)}};b.isSupportedOrigin=function(a,b){if(!new RegExp("^https://").test(b))return!1;var d=new(h||(h=c("URI")))(b);return a.some(function(a){return d.isSubdomainOfDomain(a)})};return a}();g["default"]=a}),98);
__d("MAWOembedHelper",["$InternalEnum","ConstUriUtils","FBLogger","MAWExternalLinkUtil","SecureMessageListener","SecurePostMessage","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h=["facebook.com","messenger.com","instagram.com","internalfb.com"];function i(a){if(a==null||typeof a!=="object")return null;var b=a.requestURL;a=a.requestMessageType;if(typeof a!=="string"||typeof b!=="string"||!d("ConstUriUtils").isValidUri(b))return null;a=j.cast(a);return a==null||a!==j.OEMBED_REQUEST_URL&&a!==j.THUMBNAIL_URL?null:[a,b]}function a(){var a=null,b=new(c("SecureMessageListener"))(window);function e(b){a=b.origin;b=b.data;b=i(b);if(b==null)return;var e=b[0],g=b[1];if(!d("MAWExternalLinkUtil").isAllowedRequestForFbsbx(g))return;c("promiseDone")(window.fetch(g).then(function(a){a.status!==200&&c("FBLogger")("messenger_e2ee_web").mustfix("[external link] fbsbx page fetching for the response is not successful.");switch(e){case j.OEMBED_REQUEST_URL:return a.json();case j.THUMBNAIL_URL:return a.blob()}}).then(function(a){f({type:e,url:g,value:a})})["catch"](function(){c("FBLogger")("messenger_e2ee_web").warn("[external link] Failed to fetch response in helper js.")}))}b.setEventHandler(e).setSupportedOrigins(h);b.beginListening();function f(b,d){var e=(d=d)!=null?d:1;if(a==null){e<=3&&window.setTimeout(function(){f(b,e+1)},250*Math.pow(2,e*e));return}c("SecurePostMessage").sendMessageToSpecificOrigin(window.parent,b,a)}}var j=b("$InternalEnum").Mirrored(["OEMBED_REQUEST_URL","THUMBNAIL_URL"]);g.init=a;g.MAWOembedIFrameMessageType=j}),98);
__d("WAResolvable",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(){var a=this;this.$1=function(){};this.$2=!1;this.isSettled=!1;this.promise=new(g||(g=b("Promise")))(function(b){a.$1=b})}var c=a.prototype;c.resolve=function(a){this.$2=!0,this.isSettled=!0,this.$1(a)};c.reject=function(a){this.isSettled=!0,this.resolve((g||(g=b("Promise"))).reject(a))};c.resolveWasCalled=function(){return this.$2};return a}();f.Resolvable=a}),66);
__d("XFBSbxMAWProxyPageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/maw_proxy_page/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("MAWOembedIframeContainer.react",["CookieConsentIFrameConfig","FBLogger","MAWOembedHelper","Promise","SecureMessageListener","SecurePostMessage","WAResolvable","XFBSbxMAWProxyPageControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){return"www.fbsbx.com"}var j=new Map(),k=null;function a(a,e,f){var g=j.get(a);if(g!=null)return g.promise;g=n(i());if(g==null)return(h||(h=b("Promise"))).resolve();c("SecurePostMessage").sendMessageToSpecificOrigin(f.contentWindow,{requestMessageType:e,requestURL:a},g);f=new(d("WAResolvable").Resolvable)();j.set(a,f);return f.promise}function l(a){if(a==null||typeof a!=="object")return null;var b=a.url,e=a.value;a=a.type;if(b==null||e==null||a==null||typeof a!=="string")return null;var f=d("MAWOembedHelper").MAWOembedIFrameMessageType.cast(a);if(typeof b==="string"&&f!=null){if(f===d("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL&&e instanceof Blob)return{type:d("MAWOembedHelper").MAWOembedIFrameMessageType.THUMBNAIL_URL,url:b,value:e};if(f===d("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL&&typeof e==="object"&&e.title!=null&&e.thumbnail_url!=null){f={author_name:typeof e.author_name==="string"?e.author_name:void 0,height:typeof e.height==="number"?e==null?void 0:e.height:150,thumbnail_height:typeof e.thumbnail_height==="number"?e.thumbnail_height:void 0,thumbnail_url:typeof e.thumbnail_url==="string"?e.thumbnail_url:void 0,thumbnail_width:typeof e.thumbnail_width==="number"?e.thumbnail_width:void 0,title:typeof e.title==="string"?e.title:void 0,type:typeof e.type==="string"?e.type:"photo",version:typeof e.version==="string"?e.version:"1.0",width:typeof e.width==="number"?e.width:200};return{type:d("MAWOembedHelper").MAWOembedIFrameMessageType.OEMBED_REQUEST_URL,url:b,value:f}}}c("FBLogger")("messenger_e2ee_web").warn("Failed to handle message %s from fbsbx: cannot process event message in the correct format",a);return null}var m=function(a){a=l(a.data);if(a==null)return;var b=a.url;a=a.value;b=j.get(b);if(b==null){c("FBLogger")("messenger_e2ee_web").warn("Failed to handle message from fbsbx: cannot find the resolvable promise for the url");return}b.resolve(a)};function e(){var a;a=(a=window.frames["maw-intermediate-iframe"])!=null?a:null;var b=n(i());if(a!=null){(a=k)==null?void 0:a.beginListening();return k}if(b==null){c("FBLogger")("messenger_e2ee_web").warn("Failed to create maw-intermediate-iframe iFrame: cannot find the fbsbxUri");return}a=document.createElement("iframe");a.style.display="none";a.className="MAWOembedIframe";a.id="maw-intermediate-iframe";a.src=b;(b=document.body)==null?void 0:b.appendChild(a);k=new(c("SecureMessageListener"))(window).setEventHandler(m).setSupportedOrigins(["fbsbx.com"]);k.beginListening();return k}function n(a){var b;return(b=c("XFBSbxMAWProxyPageControllerRouteBuilder").buildUri({__cci:(b=c("CookieConsentIFrameConfig").consent_param)!=null?b:""}).setProtocol("https"))==null?void 0:(b=b.setDomain(a))==null?void 0:b.toString()}g.requestUrl=a;g.createMAWOembedIframeContainer=e}),98);
__d("useVideoPlayerShakaPerformanceLoggerBuilder_init$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"useVideoPlayerShakaPerformanceLoggerBuilder_init$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);