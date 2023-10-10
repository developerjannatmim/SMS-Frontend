const getMarksInitialValues = mark => ({
  user_id: mark?.user_id || '',
  exam_id: mark?.exam_id || '',
  class_id: mark?.class_id || '',
  section_id: mark?.section_id || '',
  subject_id: mark?.subject_id || '',
  marks: mark?.marks || '',
  grade_point: mark?.grade_point || '',
  comment: mark?.comment || ''
});
export default getMarksInitialValues;