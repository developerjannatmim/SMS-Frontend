const getClassesCreateInitialValues = singleClass => ({
  name: singleClass?.name || '',
  section_id: singleClass?.section_id || ''
});
export default getClassesCreateInitialValues;