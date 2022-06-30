1. Incorporate cart functionality in the existent system, should be able to the following
- Add to Cart
- Remove from Cart
- Update Cart
[Harsha]: 
	>Created 2 Components cart and cartProduct
	>Created cartService
2. Computation of cart total & pricing dynamically based on quantity changes
[Harsha]: 
	> Emitted (quantityChange) from cartProduct to refresh the cart total in cart
	> Used 2-way data binding for property productQuantity
3. Dynamic currency codes to be fetched & computed using https://fixer.io/
[Harsha]: 
	> Tried using the API but faced challenges with invalid access key 
	> require is not defined errors
4. Achieve session management for cart
[Harsha]: 
    > Did not get the clear objective of this task
	> If it is authentication related, not having clarity on how to achieve it
5. Add UI using bootstrap : https://getbootstrap.com/
[Harsha]: 
	> Used existing bootstrap classes for some of the html elements (ex: buttons, text fields etc)
6. Filtering products by name
[Harsha]: 
	> Created filter pipe 
7. Sorting products by name & price
[Harsha]: 
	> Created sortProducts pipe
8. Pagination to be done, by displaying 20/page
[Harsha]: 
	> Created Pagination Component