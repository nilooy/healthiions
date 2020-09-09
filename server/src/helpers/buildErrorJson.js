module.exports = (field, errMsg) => {
  return {
    errorStatus: true,
    errorData: [{ param: field, msg: errMsg }],
  };
};
