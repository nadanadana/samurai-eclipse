const stripe = Stripe('pk_test_51RbgZoPPrjTMMBFXcwNPQHqmn6lP0K1EuBRbmLhLU0YTUGRgWiLrj22ipgUPQs1jpOTXCUTdUWFHA8pOAm189ppM008Wemxwe4');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});