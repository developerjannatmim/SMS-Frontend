const getAdminInitialValues = admin => ({
    name: admin?.name || '',
    email: admin?.email || '',
    password: admin?.password || '',
    gender: JSON.parse(admin.user_information)?.gender || '',
    birthday: JSON.parse(admin.user_information)?.birthday || '',
    address: JSON.parse(admin.user_information)?.address || '',
    phone: JSON.parse(admin.user_information)?.phone || '',
    photo: JSON.parse(admin.user_information)?.photo || '',
    blood_group: JSON.parse(admin.user_information)?.blood_group || ''
});
export default getAdminInitialValues;