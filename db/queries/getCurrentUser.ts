import dummyData from '../dummyData.js';

const getCurrentUser = async (urlAddress) => {
  try {
    let user;
    for (const dummyDatum of dummyData) {
      if (dummyDatum.urlAddress === urlAddress) {
        user = dummyDatum;
        break;
      }
    }
    if (!user) {
      user = { _id: -1, urlAddress };
    }
    return await JSON.stringify(user);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getCurrentUser;
