const getRegisterInitialValues = register => ({
    name: register?.name || '',
    email: register?.email || '',
    password: register?.password || '',
});
export default getRegisterInitialValues;