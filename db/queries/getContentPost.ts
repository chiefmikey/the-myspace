import dummyData from '../dummyData.js';

const getContentPost = async (urlAddress, postTitle) => {
  try {
    let post;
    if (!postTitle) {
      let highestId = 0;
      let idIndex;
      for (const dummyDatum of dummyData) {
        if (dummyDatum.urlAddress === urlAddress) {
          for (
            let index = 0;
            index < dummyDatum.contentPosts.length;
            index += 1
          ) {
            if (highestId < dummyDatum.contentPosts[index]._id) {
              [highestId] = dummyDatum.contentPosts[index];
              idIndex = index;
            }
            if (index === dummyDatum.contentPosts.length - 1) {
              post = dummyDatum.contentPosts[idIndex];
              break;
            }
          }
          break;
        }
      }
    }
    if (postTitle) {
      for (const dummyDatum of dummyData) {
        if (dummyDatum.urlAddress === urlAddress) {
          for (
            let index = 0;
            index < dummyDatum.contentPosts.length;
            index += 1
          ) {
            if (dummyDatum.contentPosts[index].title === postTitle) {
              post = dummyDatum.contentPosts[index];
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
    return await JSON.stringify(post);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getContentPost;
