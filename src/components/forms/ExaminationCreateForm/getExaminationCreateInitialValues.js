const getExaminationCreateInitialValues = exam => ({
  name: exam?.name || '',
  exam_type: exam?.exam_type || '',
  starting_time: exam?.starting_time || '',
  ending_time: exam?.ending_time || '',
  total_marks: exam?.total_marks || '',
  status: exam?.status || '',
  class_id: exam?.class?.name || '',
  section_id: exam?.section?.name || ''
});
export default getExaminationCreateInitialValues;