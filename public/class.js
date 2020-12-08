(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['class'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"definitions"),depth0,{"name":"definitions","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"content\" id=\"classpage-material\">\r\n\r\n	<button type=\"button\" class=\"back-button\">Back</button>\r\n\r\n	<div class=\"class-title\">\r\n		<h2>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":14}}}) : helper)))
    + "</h2>\r\n	</div>\r\n	\r\n	<div class=\"the-buttons\">\r\n		<button type=\"button\" class=\"flashcard-mode\">Flashcard Mode</button>\r\n		<button type=\"button\" class=\"quiz-mode\">Quiz Mode</button>\r\n	</div>\r\n\r\n	<section class=\"flashcard-definitions\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"classData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\r\n	</section>\r\n\r\n</main>";
},"usePartial":true,"useData":true});
})();