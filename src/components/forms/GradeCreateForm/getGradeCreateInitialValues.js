const getGradeCreateInitialValues = grade => ({
  name: grade?.name || '',
  grade_point: grade?.grade_point || '',
  mark_from: grade?.mark_from || '',
  mark_upto: grade?.mark_upto || ''
});
export default getGradeCreateInitialValues;