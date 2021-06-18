const { dummyData } = require('../dummyData');

exports.getContentPost = async (urlAddress, postTitle) => {
  try {
    let post;
    if (!postTitle) {
      let highestId = 0;
      let idIndex;
      for (let i = 0; i < dummyData.length; i += 1) {
        if (dummyData[i].urlAddress === urlAddress) {
          for (let j = 0; j < dummyData[i].contentPosts.length; j += 1) {
            if (highestId < dummyData[i].contentPosts[j]._id) {
              [highestId] = dummyData[i].contentPosts[j];
              idIndex = j;
            }
            if (j === dummyData[i].contentPosts.length - 1) {
              post = dummyData[i].contentPosts[idIndex];
              break;
            }
          }
          break;
        }
      }
    }
    if (postTitle) {
      for (let i = 0; i < dummyData.length; i += 1) {
        if (dummyData[i].urlAddress === urlAddress) {
          for (let j = 0; j < dummyData[i].contentPosts.length; j += 1) {
            if (dummyData[i].contentPosts[j].title === postTitle) {
              post = dummyData[i].contentPosts[j];
              break;
            }
          }
        }
      }
    }
    if (!post) {
      post = {
        _id: -1,
        title: 'error',
        text: 'no post found',
      };
    }
    const result = await JSON.stringify(post);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
