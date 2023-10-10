const getSchoolInitialValues = school => ({
  title: school?.title || '',
  email: school?.email || '',
  phone: school?.phone || '',
  address: school?.address || '',
  school_info: school?.school_info || '',
  status: school?.status || ''
});
export default getSchoolInitialValues;