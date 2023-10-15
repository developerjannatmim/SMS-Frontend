const getAdminCreateInitialValues = admin => ({
    name: admin?.name || '',
    email: admin?.email || '',
    password: admin?.password || '',
    gender: admin?.gender || '',
    birthday: admin?.birthday || '',
    address: admin?.address || '',
    phone: admin?.phone || '',
    image: admin?.image || '',
    blood_group: admin?.blood_group || ''
});
export default getAdminCreateInitialValues;