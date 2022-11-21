

API endpoints :

App running on localhost:/3000

HomePage For reservations listings :  http://localhost:3000/reservations
For adding new reservation : http://localhost:3000/reservations/newuser -> Fill the new reservations and click add
To display a particular reservation :  http://localhost:3000/reservations/6379d2d3bcc55a2ccebc0dc0 -> Click on show details button on Homepage
For deleting a reservation : http://localhost:3000/reservations/<%=user._id %>?_method=DELETE(API endpoint)
				   DELETE /reservation/637a4336259962448842bd16?_method=DELETE(API call)
					Just click on the delete button on the selected reservation page.
To retrieve a reservation  create API end point in the following way : http://localhost:3000/reservations?user_id=id

Database structure :

DB name : Airbnb
		Inside this -> Collections
						-> properties
							(documents)
						-> reservations
							(documents)

