const getMarksInitialValues = mark => ({
  user_id: mark?.user?.name || '',
  exam_id: mark?.exam?.name || '',
  class_id: mark?.class?.name || '',
  section_id: mark?.section?.name || '',
  subject_id: mark?.subject?.name || '',
  marks: mark?.marks || '',
  grade_point: mark?.grade_point || '',
  comment: mark?.comment || ''
});
export default getMarksInitialValues;