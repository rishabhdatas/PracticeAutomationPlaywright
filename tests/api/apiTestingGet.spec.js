const { test, expect } = require("@playwright/test");
const { GetApiBooking } = require("../../api-clients/getBookingClient");

test.describe("Restful Booker - GET Booking Suite", () => {
  let dynamicFirstName = "";
  let dynamicLastName = "";

  test("Should fetch all booking IDs successfully", async ({ request }) => {
    const getApiBooking = new GetApiBooking(request);
    const response = await getApiBooking.getBookingApi();
    const responseBody = await response.json();
    //console.log("API Response: ", responseBody);
  });

  test("Should fetch single booking details by ID", async ({ request }) => {
    const getApiBooking = new GetApiBooking(request);
    const response = await getApiBooking.getBookingApi();
    const responseBody = await response.json();
    const dynamicId = responseBody[0].bookingid;
    console.log(dynamicId);

    const detailResponse = await getApiBooking.getBookingById(dynamicId);
    const finalBookingData = await detailResponse.json();

    dynamicFirstName = finalBookingData.firstname;
    dynamicLastName = finalBookingData.lastname;

    //console.log(JSON.stringify(finalBookingData, null, 2));
  });

  test("Should filter bookings using query parameters", async ({ request }) => {
    const getApiBooking = new GetApiBooking(request);

    const response = await getApiBooking.getBookingsByQueryParam(
      dynamicFirstName,
      dynamicLastName,
    );
    const filteredData = await response.json();
    expect(response.status()).toBe(200);

    console.log(JSON.stringify(filteredData, null, 2));
  });
});
