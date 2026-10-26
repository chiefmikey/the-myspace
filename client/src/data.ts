// The site is static (S3 + CloudFront) and the profiles are bundled sample data,
// so lookups run in the browser instead of hitting an API.
import dummyData from '../../db/dummyData';

// Credentials in the sample data must never reach the browser bundle's lookups.
const publicProfile = ({ email, password, ...profile }) => profile;

const findByUrlAddress = (urlAddress) =>
  dummyData.find((user) => user.urlAddress === urlAddress);

export const getCurrentUser = (urlAddress) => {
  const user = findByUrlAddress(urlAddress);
  return user ? publicProfile(user) : { _id: -1, urlAddress };
};

export const getUserIcon = (userId) => {
  const user =
    dummyData.find((datum) => datum._id === Number(userId)) ?? dummyData[0];
  return publicProfile(user);
};

export const getContentPost = (urlAddress, postTitle) => {
  const posts = findByUrlAddress(urlAddress)?.contentPosts ?? [];
  const post = postTitle
    ? posts.find((candidate) => candidate.title === postTitle)
    : posts.reduce(
        (latest, candidate) =>
          !latest || candidate._id > latest._id ? candidate : latest,
        undefined,
      );
  return post ?? { _id: -1, title: 'error', text: 'no post found' };
};
