import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as string[], 
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      const courseId = action.payload;
      if (!state.enrollments.includes(courseId)) {
        state.enrollments.push(courseId);
      }
    },
    unenrollCourse: (state, action) => {
      const courseId = action.payload;
      state.enrollments = state.enrollments.filter((id) => id !== courseId);
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
