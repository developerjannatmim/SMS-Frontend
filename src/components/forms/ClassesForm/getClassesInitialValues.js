const getClassesInitialValues = classes => ({
  name: classes?.name || '',
  section_id: classes?.section_id || ''
});
export default getClassesInitialValues;