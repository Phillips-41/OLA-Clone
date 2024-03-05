import React, { useState } from "react";
import BookRideNavbar from "./BookRideNavbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import AvailableCab from "./AvailableCab";
import SearchResult from "./SearchResult";

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const BookRide = () => {
  const handleOnSubmit = (values) => {
    console.log(values);
    // Add logic to handle the form submission
  };

  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
      destinationLocation: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleOnSubmit(values);
    },
  });

  const [activeField, setActiveField] = useState("");

  const onFocused = (e) => {
    const name = e.target.name;
    setActiveField(name);
  };

  return (
    <div className="w-full">
      <BookRideNavbar />
      <div className="px-3 lg:px-5 mt-10">
        <form className="space-y-2" onSubmit={formik.handleSubmit}>
          <div>
            {/* Pick Up Location */}
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">From</p>
              <input
                name="pickupLocation"
                placeholder="Enter Pickup Location"
                value={formik.values.pickupLocation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {/* Add search results here based on activeField and ride.results */}
            </div>
            {/* Display validation errors */}
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className="">
                <p className="text-xs text-red-500 px-2">
                  {formik.errors.pickupLocation}
                </p>
              </div>
            )}
          </div>
          {/* Destination Location */}
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">To</p>
            <input
              name="destinationLocation"
              placeholder="Enter Destination Location"
              value={formik.values.destinationLocation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border-none outline-none"
              onFocus={onFocused}
            />
            {setActiveField === "pickupLocation" &&
              formik.values.pickupLocation && (
                <div className="">
                  <SearchResult
                    setActiveField={setActiveField}
                    lattitude_key={"pickup_lattitude"}
                    longitude_key={"pickup_longitude"}
                    area_key={"pickup_area"} // Corrected syntax here
                  />
                </div>
              )}
          </div>
          {/* Display validation errors */}
          {formik.touched.destinationLocation &&
            formik.errors.destinationLocation && (
              <div className="">
                <p className="text-xs text-red-500 px-2">
                  {formik.errors.destinationLocation}
                </p>
              </div>
            )}
          {/* Submit Button */}
          <Button
            className=""
            sx={{
              width: "100%",
              padding: ".7rem 1rem",
            }}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Find Driver
          </Button>
        </form>
      </div>
      {/* Available Cabs */}
      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p>Available Cabs</p>
        <div className="space-y-5">
          {/* Render AvailableCab component */}
          <AvailableCab />
          <AvailableCab />
        </div>
      </div>
    </div>
  );
};

export default BookRide;
