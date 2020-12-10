(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['definitions'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"each-card\">\n	<p class=\"question\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"question") || (depth0 != null ? lookupProperty(depth0,"question") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question","hash":{},"data":data,"loc":{"start":{"line":2,"column":21},"end":{"line":2,"column":33}}}) : helper)))
    + "</p>\n	<p class=\"answer\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"answer") || (depth0 != null ? lookupProperty(depth0,"answer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"answer","hash":{},"data":data,"loc":{"start":{"line":3,"column":19},"end":{"line":3,"column":29}}}) : helper)))
    + "</p>\n\n	<button type=\"button\" class=\"delete-flashcard\"><i class=\"fas fa-trash-alt\"></i></button>\n</div>\n";
},"useData":true});
})();