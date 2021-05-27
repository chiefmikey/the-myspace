const { dummyData } = require('../dummyData');

exports.getCurrentUser = async (urlAddress) => {
  try {
    let user;
    for (let i = 0; i < dummyData.length; i += 1) {
      if (dummyData[i].urlAddress === urlAddress) {
        user = dummyData[i];
        break;
      }
    }
    if (!user) {
      user = { _id: -1, urlAddress };
    }
    const result = await JSON.stringify(user);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
