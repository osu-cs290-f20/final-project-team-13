(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['classCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"questionAnswer"),depth0,{"name":"questionAnswer","data":data,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\" id=\"class-card\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":53}}}) : helper)))
    + "\" data-URI=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":1,"column":65},"end":{"line":1,"column":73}}}) : helper)))
    + "\">\n	<h3><a id=\"class-title\" href=\"/class/"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":46}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":56}}}) : helper)))
    + "</a></h3>\n	\n	<button type=\"button\" class=\"more-options\" ><i class=\"fas fa-ellipsis-v\"></i></button>\n\n	<div class=\"more-options-menu\" hidden>\n		<button type=\"button\" class=\"delete-class\">Delete</button>\n	</div>\n\n</div>\n	<button type=\"button\" id=\"quiz-button\">QUIZ</button>\n    \n    <section id=\"quiz\" hidden>\n    <div id=\"modal-backdrop\" class=\"hidden\"></div>\n        <div id=\"quiz-content\">\n            <div class=\"modal-header\">\n                <h3>QUIZ MODE</h3>\n                <div id='close-button'><i class=\"fas fa-window-close\"></i></div>\n            </div>\n            <div class=\"question-answer-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"flashcards") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div id='prev-button'><i class=\"fas fa-caret-left\"></i></div>\n            <div id='next-button'><i class=\"fas fa-caret-right\"></i></div>\n        </div>\n    </section>\n\n<div class=\"more-options-menu\" hidden>\n	<button type=\"button\" class=\"delete-class\">Delete</button>\n</div>\n";
},"usePartial":true,"useData":true});
})();