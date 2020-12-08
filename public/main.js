(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n\r\n<html>\r\n\r\n	<head>\r\n		<meta charset=\"utf-8\">\r\n		<title>Team 13</title>\r\n		<link rel=\"stylesheet\" href=\"./style.css\">\r\n		<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.15.1/css/all.css\" crossorigin=\"anonymous\">\r\n\r\n		<script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.runtime.js\" charset=\"utf-8\" defer></script>\r\n		<script src=\"index.js\" charset=\"utf-8\" defer></script>\r\n		<script src=\"classCard.js\" charset=\"utf-8\" defer></script>\r\n		<script src=\"definitions.js\" charset=\"utf-8\" defer></script>\r\n	</head>\r\n\r\n	<body>\r\n		\r\n		<header id=\"header-bar\">\r\n			<button type=\"button\" id=\"settings\"><i class=\"fas fa-cog\"></i></button>\r\n			<h1 id=\"title-top\">FLASHCARDS</h1>\r\n			<button type=\"button\" id=\"search\"><i class=\"fas fa-search\"></i></button>\r\n		</header>\r\n\r\n	"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":25,"column":11}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n	</body>\r\n\r\n</html>";
},"useData":true});
})();