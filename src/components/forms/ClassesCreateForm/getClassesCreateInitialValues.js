const getClassesCreateInitialValues = classes => ({
  name: classes?.name || '',
  section_id: classes?.section_id || ''
});
export default getClassesCreateInitialValues;