const { dummyData } = require('../dummyData');

exports.getCurrentUser = async (urlAddress) => {
  try {
    let user;
    const extract = urlAddress.split('/')[3];
    const url = `/${extract}`;
    for (let i = 0; i < dummyData.length; i += 1) {
      if (dummyData[i].urlAddress === url) {
        user = dummyData[i];
        break;
      }
    }
    if (!user) {
      [user] = dummyData;
    }
    const result = await JSON.stringify(user);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
