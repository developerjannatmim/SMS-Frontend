const getTeacherInitialValues = teacher => ({
  name: teacher?.name || '',
  email: teacher?.email || '',
  password: teacher?.password || '',
  gender: teacher?.gender || '',
  birthday: JSON.parse(teacher.user_information)?.birthday || '',
  address: JSON.parse(teacher.user_information)?.address || '',
  phone: JSON.parse(teacher.user_information)?.phone || '',
  photo: JSON.parse(teacher.user_information)?.photo || '',
  blood_group: JSON.parse(teacher.user_information)?.blood_group || ''
});

export default getTeacherInitialValues;