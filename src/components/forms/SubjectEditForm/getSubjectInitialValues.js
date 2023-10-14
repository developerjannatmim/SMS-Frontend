const getSubjectInitialValues = subject => ({
  name: subject?.name || '',
  class_id: subject?.class?.name || ''
});
export default getSubjectInitialValues;