/* eslint-disable no-console */
function addReview(restoId, nameInput, reviewInput) {
  const review = {
    id: restoId,
    name: nameInput,
    review: reviewInput,
  };

  fetch('https://restaurant-api.dicoding.dev/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
    .then((response) => {
      if (response.status === 201) {
        console.log('Review added successfully!');
        console.log(response);
      } else {
        console.error('Failed to add review. Status:', response.status);
      }
    })
    .catch((error) => {
      console.error('Failed to add review:', error);
    });
}

export default addReview;
