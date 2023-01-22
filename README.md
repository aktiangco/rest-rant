# Project REST-Rant

REST-Rant is an app where users can review restaurants.


###### Routes table format
| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home page |
| GET | /places | Places index page |
| POST | /places | Create new places |
| GET |  /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET |  /places/:id/edit | Form page for editing an existing place |
 DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above)|

###### Restaurants (string) List 
- [ ] name (string)
- [ ] city (string)
- [ ] state (string)
- [ ] cuisines (string)
- [ ] pic (string)

###### Color Scheme
- ![#666c62](https://placehold.co/15x15/666c62/666c62.png) `#666c62` Primary 
- ![#bf934c](https://placehold.co/15x15/bf934c/bf934c.png) `#bf934c` Secondary
- ![#bf934c](https://placehold.co/15x15/bf934c/bf934c.png) `#bf934c` Highlight