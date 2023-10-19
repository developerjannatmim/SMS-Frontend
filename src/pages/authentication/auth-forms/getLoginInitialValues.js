const getLoginInitialValues = login => ({
    email: login?.email || '',
    password: login?.password || '',
});
export default getLoginInitialValues;