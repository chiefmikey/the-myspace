const { dummyData } = require('../dummyData');

exports.getCurrentUser = async (urlAddress) => {
  try {
    let user;
    const url = urlAddress.replace('http://localhost:8080', '');
    for (let i = 0; i < dummyData.length; i += 1) {
      if (dummyData[i].urlAddress === url) {
        user = dummyData[i];
        break;
      }
    }
    if (user) {
      const result = await JSON.stringify(user);
      return result;
    }
    return 'User not found';
  } catch (error) {
    console.error(error);
    return error;
  }
};
