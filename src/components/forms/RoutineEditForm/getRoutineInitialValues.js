const getRoutineInitialValues = routine => ({
  class_id: routine?.class?.name || '',
  section_id: routine?.section?.name || '',
  routine_creator: routine?.routine_creator?.name || '',
  subject_id: routine?.subject?.name || '',
  room_id: routine?.room?.name || '',
  starting_hour: routine?.starting_hour || '',
  ending_hour: routine?.ending_hour || '',
  starting_minute: routine?.starting_minute || '',
  ending_minute: routine?.ending_minute || '',
  day: routine?.day || ''
});
export default getRoutineInitialValues;