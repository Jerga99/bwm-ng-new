
# Header Component
1. Create header.component.ts, html
2. in html create <h1> with some text
3. Change color of <h1> to green
4. Display this component on first line of [app.component.html]


# Get rental by id
1. in [rental.service.ts] create function [getRentalById]: 
   (method) getRentalById(rentalId: string): Observable<Rental>

   NOTE: Find rental in array of rentals and emit it from observable similiarly as we doing to with getRentals
2. in [rental-detail.component.ts] call [getRentalById] from rental      service, provide id from params. Retrieved rental assign to member variable of rental
3. Display rental title and description in template


