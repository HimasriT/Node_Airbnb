Dependencies to be installed :

MongoDb
RoboMongo
Nodejs
npm install 
npm install nodemon -g
npm install monk --save 
npm install ejs -g
npm install method-override --save


API endpoints :

App running on localhost:/3000

HomePage For property listings : http://localhost:3000/properties
For adding new property : http://localhost:3000/properties/new -> Fill the new property and click add
To display a particular property : http://localhost:3000/properties/6377cb814f634616447f04c2 -> Click on show details button on Homepage
For editing a given propery : http://localhost:3000/properties/6377cb814f634616447f04c2/edit -> Click on edit button on the selected property page.
For deleting a property : http://localhost:3000/properties/<%=pr._id %>?_method=DELETE(API endpoint)
				   DELETE /properties/6377cb814f634616447f04c2?_method=DELETE(API call)
					Just click on the delete button on the selected property page.

For reservation :

To retrieve a reservation create API end point in the following way : http://localhost:3000/reservations?userid=id 

Database structure :

DB name : Airbnb
		Inside this -> Collections
						-> properties
							(documents)
						-> reservations
							(documents)

