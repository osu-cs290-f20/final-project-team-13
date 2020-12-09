(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['classCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"questionAnswer"),depth0,{"name":"questionAnswer","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\" class=\"class-card\" data-name=\"name\" data-URI=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ClassURI") || (depth0 != null ? lookupProperty(depth0,"ClassURI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ClassURI","hash":{},"data":data,"loc":{"start":{"line":1,"column":64},"end":{"line":1,"column":76}}}) : helper)))
    + "\">\n	<h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":5},"end":{"line":2,"column":13}}}) : helper)))
    + "</h3>\n	\n	<button type=\"button\" class=\"more-options\" class=\"hidden\"><i class=\"fas fa-ellipsis-v\"></i></button>\n</div>\n\n	<button type=\"button\" id=\"quiz-button\">QUIZ</button>\n    \n    <section id=\"quiz\" hidden>\n        <div id=\"modal-backdrop\" class=\"hidden\"></div>\n        <div id='prev-button'><i class=\"fas fa-caret-left\"></i></div>\n        <div id='next-button'><i class=\"fas fa-caret-right\"></i></div>\n        <div id='close-button'><i class=\"fas fa-window-close\"></i></div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"questions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "    </section>\n\n<div class=\"more-options-menu\" hidden>\n	<button type=\"button\" class=\"delete-class\">Delete</button>\n</div>";
},"usePartial":true,"useData":true});
})();