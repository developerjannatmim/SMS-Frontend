const getStudentInitialValues = student => ({
  name: student?.name || '',
  email: student?.email || '',
  password: student?.password || '',
  gender: JSON.parse(student.user_information)?.gender || '',
  birthday: JSON.parse(student.user_information)?.birthday || '',
  address: JSON.parse(student.user_information)?.address || '',
  phone: JSON.parse(student.user_information)?.phone || '',
  photo: JSON.parse(student.user_information)?.photo || '',
  blood_group: JSON.parse(student.user_information)?.blood_group || ''
});

export default getStudentInitialValues;