import React from 'react';

import Profile from './Profile';
import Contact from './Contact';
import Interests from './Interests';
import Details from './Details';
import Blog from './Blog';
import Blurbs from './Blurbs';
import Friends from './Friends';
import CommentsList from './CommentsList';

import wbyte from '../../../public/img/wbyte.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: '',
      profilePic: '',
      profileMood: '',
      profileMoodEmoji: '',
      profileStatus: '',
      profileGender: '',
      profileAge: '',
      profileCity: '',
      profileState: '',
      profileCountry: '',
      profileLogin: '',
      urlAddress: '',
      interestsGeneral: '',
      interestsMusic: '',
      interestsMovies: '',
      interestsTelevision: '',
      interestsBooks: '',
      interestsHeroes: '',
      detailsStatus: '',
      detailsHereFor: '',
      detailsHometown: '',
      detailsZodiacSign: '',
      detailsSmokeDrink: '',
      detailsOccupation: '',
      headline: '',
      blogPosts: [],
      blurbsAboutMe: '',
      blurbsWhoIdLikeToMeet: '',
      friends: [],
      friendsTop: [],
      comments: [],
    };
    this.res = {
      profileName: 'wolfebyte',
      profilePic: wbyte,
      profileMood: 'cloudy',
      profileMoodEmoji: ';)',
      profileStatus: ':-)',
      profileGender: 'Male',
      profileAge: '30',
      profileCity: 'Arvada',
      profileState: 'COLORADO',
      profileCountry: 'United States',
      profileLogin: '4/20/2020',
      urlAddress: 'http://wolfebyte.net',
      interestsGeneral: 'internet, doggies, etc.',
      interestsMusic: 'rock n roll asian fusion',
      interestsMovies: 'muppets treasure island',
      interestsTelevision: 'cheers',
      interestsBooks: 'what is books',
      interestsHeroes: 'the rock aka dawayan johnston',
      detailsStatus: 'swexy',
      detailsHereFor: 'lasagna',
      detailsHometown: 'hawkins, in',
      detailsZodiacSign: 'i guess so',
      detailsSmokeDrink: '69',
      detailsOccupation: 'keepin it breezy',
      headline: 'probably on acid',
      blogPosts: [
        ['approving comments ...', ''],
        ['new homepage look', ''],
        ['whats going on with friend counts?', ''],
        ['extended network', ''],
        ['am i online?', ''],
      ],
      blurbsAboutMe: 'a blue-skinned humanoid who wears a purple hood over his bare-bone skull.',
      blurbsWhoIdLikeToMeet: 'your mom',
      friends: [
        ['name generator', wbyte, 1],
        ['snoopy', wbyte, 2],
        ['clifford', wbyte, 3],
        ['pluto', wbyte, 4],
        ['marley', wbyte, 5],
        ['beethoven', wbyte, 6],
        ['lassie', wbyte, 7],
        ['airbud', wbyte, 8],
        ['airbud 2', wbyte, 9],
        ['airbud returns', wbyte, 10],
        ['airbud off the bench', wbyte, 11],
        ['airbud slam dunk', wbyte, 12],
      ],
      friendsTop: [
        ['name generator', wbyte, 1],
        ['airbud', wbyte, 8],
        ['clifford the bigass red dog woof', wbyte, 3],
        ['pluto', wbyte, 4],
        ['snoopy', wbyte, 2],
        ['airbud returns', wbyte, 10],
        ['airbud off the bench', wbyte, 11],
        ['airbud slam dunk', wbyte, 12],
      ],
      comments: [
        [['clifford', wbyte, 3], 'Sep 21 2008 5:26P', 'hey ding dong'],
        [['snoopy', wbyte, 2], 'Oct 1 2007 1:46A', 'shhhh'],
        [['airbud returns', wbyte, 10], 'Nov 3 2005 6:56P', 'woof'],
      ],
    };
  }

  componentDidMount() {
    const {
      profileName,
      profilePic,
      profileMood,
      profileMoodEmoji,
      profileStatus,
      profileGender,
      profileAge,
      profileCity,
      profileState,
      profileCountry,
      profileLogin,
      urlAddress,
      interestsGeneral,
      interestsMusic,
      interestsMovies,
      interestsTelevision,
      interestsBooks,
      interestsHeroes,
      detailsStatus,
      detailsHereFor,
      detailsHometown,
      detailsZodiacSign,
      detailsSmokeDrink,
      detailsOccupation,
      headline,
      blogPosts,
      blurbsAboutMe,
      blurbsWhoIdLikeToMeet,
      friends,
      friendsTop,
      comments,
    } = this.res;
    this.setState({
      profileName,
      profilePic,
      profileMood,
      profileMoodEmoji,
      profileStatus,
      profileGender,
      profileAge,
      profileCity,
      profileState,
      profileCountry,
      profileLogin,
      urlAddress,
      interestsGeneral,
      interestsMusic,
      interestsMovies,
      interestsTelevision,
      interestsBooks,
      interestsHeroes,
      detailsStatus,
      detailsHereFor,
      detailsHometown,
      detailsZodiacSign,
      detailsSmokeDrink,
      detailsOccupation,
      headline,
      blogPosts,
      blurbsAboutMe,
      blurbsWhoIdLikeToMeet,
      friends,
      friendsTop,
      comments,
    });
  }

  render() {
    const {
      profileName,
      profilePic,
      profileMood,
      profileMoodEmoji,
      profileStatus,
      profileGender,
      profileAge,
      profileCity,
      profileState,
      profileCountry,
      profileLogin,
      urlAddress,
      interestsGeneral,
      interestsMusic,
      interestsMovies,
      interestsTelevision,
      interestsBooks,
      interestsHeroes,
      detailsStatus,
      detailsHereFor,
      detailsHometown,
      detailsZodiacSign,
      detailsSmokeDrink,
      detailsOccupation,
      headline,
      blogPosts,
      blurbsAboutMe,
      blurbsWhoIdLikeToMeet,
      friends,
      friendsTop,
      comments,
    } = this.state;
    return (
      <div id="main">
        <div id="main-left">
          <Profile
            profileName={profileName}
            profilePic={profilePic}
            profileMood={profileMood}
            profileMoodEmoji={profileMoodEmoji}
            profileStatus={profileStatus}
            profileGender={profileGender}
            profileAge={profileAge}
            profileCity={profileCity}
            profileState={profileState}
            profileCountry={profileCountry}
            profileLogin={profileLogin}
          />
          <Contact profileName={profileName} />
          <div id="url">
            <div id="url-name">
              .net URL
            </div>
            <div id="url-address">
              {urlAddress}
            </div>
          </div>
          <Interests
            profileName={profileName}
            interestsGeneral={interestsGeneral}
            interestsMusic={interestsMusic}
            interestsMovies={interestsMovies}
            interestsTelevision={interestsTelevision}
            interestsBooks={interestsBooks}
            interestsHeroes={interestsHeroes}
          />
          <Details
            profileName={profileName}
            detailsStatus={detailsStatus}
            detailsHereFor={detailsHereFor}
            detailsHometown={detailsHometown}
            detailsZodiacSign={detailsZodiacSign}
            detailsSmokeDrink={detailsSmokeDrink}
            detailsOccupation={detailsOccupation}
          />
        </div>
        <div id="main-right">
          <div id="headline">
            <h4>
              {profileName}
              {' '}
              is
              {' '}
              {headline}
            </h4>
          </div>
          <Blog
            profileName={profileName}
            blogPosts={blogPosts}
          />
          <Blurbs
            profileName={profileName}
            blurbsAboutMe={blurbsAboutMe}
            blurbsWhoIdLikeToMeet={blurbsWhoIdLikeToMeet}
          />
          <Friends
            profileName={profileName}
            friends={friends}
            friendsTop={friendsTop}
          />
          <CommentsList
            profileName={profileName}
            comments={comments}
          />
        </div>
      </div>
    );
  }
}

export default Main;
