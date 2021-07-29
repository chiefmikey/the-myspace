import dummyData from '../dummyData.js';

const getUserIcon = async (userId) => {
  try {
    let user;
    for (let i = 0; i < dummyData.length; i += 1) {
      if (dummyData[i]._id === Number(userId)) {
        user = dummyData[i];
        break;
      }
    }
    if (!user) {
      [user] = dummyData;
    }
    return await JSON.stringify(user);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getUserIcon;
