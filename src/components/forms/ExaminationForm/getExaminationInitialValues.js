const getExaminationInitialValues = exam => ({
  name: exam?.name || '',
  exam_type: exam?.exam_type || '',
  starting_date: exam?.starting_date || '',
  starting_time: exam?.starting_time || '',
  ending_date: exam?.ending_date || '',
  ending_time: exam?.ending_time || '',
  total_marks: exam?.total_marks || '',
  status: exam?.status || '',
  class_id: exam?.class_id || '',
  section_id: exam?.section_id || ''
});
export default getExaminationInitialValues;