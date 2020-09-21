# NOTES

## MODULES NEEDED: npm i slugify method-override
will need to replace ":id" with "slug" if slugify used

## ROUTES LIST

### IN server.js
* "/" - GET - pulls saved property data from model

* IN routes > savedProperties.js
* "/savedProperties/" - lists all saved properties
* "/savedProperties/edit" - 
* "/savedProperties/new"
* "/savedProperties/edit/:id" - GET - user can edit inidvidual saved property entry
* "/savedProperties/:id" - view individual saved property
* "/savedProperties/show"
* "/savedProperties/:id?_method=DELETE" - DELETE - router.delete...findByIdAndDelete


