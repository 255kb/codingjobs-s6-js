/**
 * Exercise:
 *
 * - Create a form to create a new pet in the pet store API
 * - only ask for the pet name and status (radio button with "available" and "unavailable") in the form
 * - send the newPet object with the name and status gathered from the form
 *
 * Data would need to be sent to this URL with a POST:
 * https://petstore3.swagger.io/api/v3/pet
 */
const newPet = {
  id: 10,
  name: "",
  category: {
    id: 1,
    name: "Dogs",
  },
  photoUrls: ["string"],
  tags: [
    {
      id: 0,
      name: "string",
    },
  ],
  status: "",
};
