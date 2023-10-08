const getClassInitialValues = class => ({
  name: class?.name || '',
  section_id: class?.section_id || ''
});
export default getClassInitialValues;