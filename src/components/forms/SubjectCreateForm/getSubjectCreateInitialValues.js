const getSubjectCreateInitialValues = subject => ({
  name: subject?.name || '',
  class_id: subject?.class_id || ''
});
export default getSubjectCreateInitialValues;