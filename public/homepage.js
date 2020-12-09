(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"classCard"),depth0,{"name":"classCard","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<main class=\"content\" id = \"homepage-material\">\r\n	\r\n	<button id=\"add-class\" class=\"card\"><i class=\"fas fa-plus\"></i></button>\r\n\r\n	<div id=\"classes\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"classData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "	</div>\r\n\r\n	<div id=\"add-class-modal\">\r\n		<div id=\"new-class-name-form\">\r\n			<label for=\"new-class-name-input\" class=\"new-class-name-input-label\">Name of New Class</label>\r\n			<input type=\"text\" name=\"new-class-name-input\" id=\"new-class-name-input\">\r\n		</div>\r\n\r\n		<button type=\"button\" id=\"add-new-class-button\">Add Class</button>\r\n	</div>\r\n\r\n</main>";
},"usePartial":true,"useData":true});
})();