const getSyllabusInitialValues = syllabus => ({
  title: syllabus?.title || '',
  class_id: syllabus?.class?.name || '',
  section_id: syllabus?.section?.name || '',
  subject_id: syllabus?.subject?.name || '',
  file: syllabus?.file || ''
});
export default getSyllabusInitialValues;