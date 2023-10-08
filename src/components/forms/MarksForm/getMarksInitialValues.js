const getMarksInitialValues = marks => ({
  user_id: marks?.user_id || '',
  exam_id: marks?.exam_id || '',
  class_id: marks?.class_id || '',
  section_id: marks?.section_id || '',
  subject_id: marks?.subject_id || '',
  marks: marks?.marks || '',
  grade_point: marks?.grade_point || '',
  comment: marks?.comment || ''
});
export default getMarksInitialValues;