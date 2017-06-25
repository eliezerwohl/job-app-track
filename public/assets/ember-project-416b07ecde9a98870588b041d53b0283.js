"use strict";define("ember-project/app",["exports","ember","ember-project/resolver","ember-load-initializers","ember-project/config/environment"],function(e,t,r,i,n){Object.defineProperty(e,"__esModule",{value:!0});var a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:r.default}),(0,i.default)(a,n.default.modulePrefix),e.default=a}),define("ember-project/helpers/app-version",["exports","ember","ember-project/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r,i){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.hideSha?a.match(i.versionRegExp)[0]:t.hideVersion?a.match(i.shaRegExp)[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n;var a=r.default.APP.version;e.default=t.default.Helper.helper(n)}),define("ember-project/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-project/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-project/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-project/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var i=r.default.APP,n=i.name,a=i.version;e.default={name:"App Version",initialize:(0,t.default)(n,a)}}),define("ember-project/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-project/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-project/initializers/ember-data",["exports","ember-data/setup-container","ember-data/index"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-project/initializers/export-application-global",["exports","ember","ember-project/config/environment"],function(e,t,r){function i(){var e=arguments[1]||arguments[0];if(!1!==r.default.exportApplicationGlobal){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var n,a=r.default.exportApplicationGlobal;n="string"==typeof a?a:t.default.String.classify(r.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("ember-project/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-project/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-project/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-project/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-project/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-project/router",["exports","ember","ember-project/config/environment"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0});var i=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});i.map(function(){}),e.default=i}),define("ember-project/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-project/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"885YIf+8",block:'{"statements":[[0,"OKAY WE CHANGED IT\\n"],[1,[26,["outlet"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-project/templates/application.hbs"}})}),define("ember-project/config/environment",["ember"],function(e){try{var t="ember-project/config/environment",r=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),i=JSON.parse(unescape(r)),n={default:i};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-project/app").default.create({name:"ember-project",version:"0.0.0+dd588455"});