(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['classCardlocal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\" id=\"class-card\" data-name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":53}}}) : helper)))
    + "\" data-URI=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"classURI") || (depth0 != null ? lookupProperty(depth0,"classURI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classURI","hash":{},"data":data,"loc":{"start":{"line":1,"column":65},"end":{"line":1,"column":77}}}) : helper)))
    + "\">\r\n	<h3 id=\"class-title\"><a href=\"/class/"
    + alias4(((helper = (helper = lookupProperty(helpers,"classURI") || (depth0 != null ? lookupProperty(depth0,"classURI") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classURI","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":50}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":60}}}) : helper)))
    + "</a></h3>\r\n	\r\n	<button type=\"button\" class=\"more-options\" ><i class=\"fas fa-ellipsis-v\"></i></button>\r\n\r\n	<div class=\"more-options-menu\" hidden>\r\n		<button type=\"button\" class=\"delete-class\">Delete</button>\r\n	</div>\r\n\r\n</div>\r\n";
},"useData":true});
})();