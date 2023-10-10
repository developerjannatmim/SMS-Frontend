const getSyllabusCreateInitialValues = syllabus => ({
  title: syllabus?.title || '',
  class_id: syllabus?.class_id || '',
  section_id: syllabus?.section_id || '',
  subject_id: syllabus?.subject_id || '',
  file: syllabus?.file || ''
});
export default getSyllabusCreateInitialValues;