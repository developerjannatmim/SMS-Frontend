const getRoutineCreateInitialValues = routine => ({
  class_id: routine?.class_id || '',
  section_id: routine?.section_id || '',
  routine_creator: routine?.routine_creator || '',
  subject_id: routine?.subject_id || '',
  room_id: routine?.room_id || '',
  starting_hour: routine?.starting_hour || '',
  ending_hour: routine?.ending_hour || '',
  starting_minute: routine?.starting_minute || '',
  ending_minute: routine?.ending_minute || '',
  day: routine?.day || ''
});
export default getRoutineCreateInitialValues;