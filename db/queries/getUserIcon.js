const { dummyData } = require('../dummyData');

exports.getUserIcon = async (userId) => {
  try {
    let user;
    for (let i = 0; i < dummyData.length; i += 1) {
      if (dummyData[i]._id === Number(userId)) {
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
