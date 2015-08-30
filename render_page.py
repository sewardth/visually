import jinja2, os, webapp2

jinja_environment = jinja2.Environment(autoescape = True, loader=jinja2.FileSystemLoader(os.path.join(os.path.dirname(__file__),'templates')))

class Template(webapp2.RequestHandler):

	def PageCreator(self, page, template_values):
		self.response.headers['Content-Type'] = 'text/html'
		page = jinja_environment.get_template(page)
		template = page.render(template_values)
		return template
	
	
	def render(self, page, template_values=None):
		if not template_values:
			template_values ={}
		pageview= self.PageCreator(page, template_values)
		self.response.out.write(pageview)
