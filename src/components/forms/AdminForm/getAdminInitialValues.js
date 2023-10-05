const getAdminInitialValues = admin => ({
    name: admin?.name || '',
    email: admin?.email || '',
    password: admin?.password || '',
    gender: admin?.gender || '',
    birthday: admin?.class_id || '',
    address: admin?.address || '',
    phone: admin?.phone || '',
    photo: admin?.photo || '',
    blood_group: admin?.blood_group || ''
});