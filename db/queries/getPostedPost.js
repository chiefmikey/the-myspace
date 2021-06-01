const { dummyData } = require('../dummyData');

exports.getPostedPost = async (urlAddress, postTitle) => {
  try {
    let post;
    if (!postTitle) {
      let highestId = 0;
      let idIndex;
      for (let i = 0; i < dummyData.length; i += 1) {
        if (dummyData[i].urlAddress === urlAddress) {
          for (let j = 0; j < dummyData[i].postedPosts.length; j += 1) {
            if (highestId < dummyData[i].postedPosts[j][0]) {
              [highestId] = dummyData[i].postedPosts[j];
              idIndex = j;
            }
            if (j === dummyData[i].postedPosts.length - 1) {
              post = dummyData[i].postedPosts[idIndex];
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
          for (let j = 0; j < dummyData[i].postedPosts.length; j += 1) {
            if (dummyData[i].postedPosts[j][1] === postTitle) {
              post = dummyData[i].postedPosts[j];
              break;
            }
          }
        }
      }
    }
    if (!post) {
      post = [-1, 'error', 'no post found'];
    }
    const result = await JSON.stringify(post);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
