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

  return "<main class=\"content\" id=\"classpage-material\">\r\n\r\n	<button type=\"button\" class=\"back-button\">Back</button>\r\n	<button type=\"button\" class=\"add-card\"><i class=\"fas fa-plus\"></i></button>\r\n\r\n	<div class=\"class-title\">\r\n		<h2>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":14}}}) : helper)))
    + "</h2>\r\n	</div>\r\n	\r\n	<div class=\"the-buttons\">\r\n		<button type=\"button\" class=\"flashcard-mode\">Flashcard Mode</button>\r\n		<button type=\"button\" class=\"quiz-mode\">Quiz Mode</button>\r\n	</div>\r\n\r\n	<section class=\"flashcard-definitions\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"classData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "\r\n	</section>\r\n\r\n	<div id=\"add-definition-modal\">\r\n		<div id=\"question-form\">\r\n			<label for=\"question-input\" class=\"question-input-label\">Front Side</label>\r\n			<input type=\"text\" name=\"question-input\" id=\"question-input\">\r\n		</div>\r\n		\r\n		<div id=\"answer-form\">\r\n			<label for=\"answer-input\" class=\"answer-input-label\">Back Side</label>\r\n			<input type=\"text\" name=\"answer-input\" id=\"answer-input\">\r\n		</div>\r\n		\r\n		<button type=\"button\" id=\"add-new-card-button\">Add Card</button>\r\n	</div>\r\n\r\n	<div id=\"modal-background\" hidden></div>\r\n\r\n	<div id=\"quizmode-modal\">\r\n		<div class=\"modal-content\">\r\n	\r\n			<div class=\"modal-header\">\r\n	          <h3>Quiz Mode</h3>\r\n	          <button type=\"button\" id=\"modal-close\" class=\"modal-hide-button\">&times;</button>\r\n	        </div>\r\n	\r\n	        <div class=\"modal-body\">\r\n				<div id=\"question\">\r\n					<p>question</p>\r\n				</div>\r\n				<div id=\"answer\">\r\n					<input type=\"text\" id=\"answer-field\">\r\n				</div>\r\n				<div id=\"real-answer\">\r\n					<p>real answer</p>\r\n				</div>\r\n				\r\n	        <div class=\"modal-footer\">\r\n	          <button type=\"button\" id=\"modal-done\" class=\"modal-hide-button action-button\">Done</button>\r\n	        </div>\r\n		</div>\r\n	</div>\r\n\r\n	<div id=\"flashcardmode-modal\">\r\n		<button type=\"button\" id=\"back-flashcard\"><i class=\"fas fa-chevron-left\"></i></button>\r\n		<div id=\"flash-card\">\r\n			<div id=\"card-front\">\r\n				<p>question</p>\r\n			</div>\r\n			<div id=\"card-back\">\r\n				<p>answer</p>\r\n			</div>\r\n		</div>\r\n		<button type=\"button\" id=\"fwd-flashcard\"><i class=\"fas fa-chevron-right\"></i></button>\r\n	</div>\r\n\r\n</main>";
},"usePartial":true,"useData":true});
})();