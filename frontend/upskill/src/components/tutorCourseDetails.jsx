import React from "react";
import { useParams } from "react-router-dom";

const TutorCourseDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Tutor and Course Details {id}</h1>
    </div>
  );
};

export default TutorCourseDetails;
