import dummyData from '../dummyData.js';

const getUserIcon = async (userId) => {
  try {
    let user;
    for (const dummyDatum of dummyData) {
      if (dummyDatum._id === Number(userId)) {
        user = dummyDatum;
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
