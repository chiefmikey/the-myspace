const { dummyData } = require('../dummyData');

exports.getBlogPost = async (urlAddress, postId) => {
  try {
    let post;
    if (postId !== 0 && !postId) {
      let highestId = 0;
      let idIndex;
      for (let i = 0; i < dummyData.length; i += 1) {
        if (dummyData[i].urlAddress === urlAddress) {
          for (let j = 0; j < dummyData[i].blogPosts.length; j += 1) {
            if (highestId < dummyData[i].blogPosts[j][0]) {
              [highestId] = dummyData[i].blogPosts[j];
              idIndex = j;
            }
            if (j === dummyData[i].blogPosts.length - 1) {
              post = dummyData[i].blogPosts[idIndex];
              break;
            }
          }
          break;
        }
      }
    }
    if (postId || postId === 0) {
      for (let i = 0; i < dummyData.length; i += 1) {
        if (dummyData[i].urlAddress === urlAddress) {
          for (let j = 0; j < dummyData[i].blogPosts.length; j += 1) {
            if (dummyData[i].blogPosts[j][0] === Number(postId)) {
              post = dummyData[i].blogPosts[j];
              break;
            }
          }
        }
      }
    }
    if (!post) {
      post = [-1, '', ''];
    }
    const result = await JSON.stringify(post);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};
