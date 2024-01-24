import { useState } from "react";
import Tweet from "./Tweet";

import FormTweetm from "./FormTweetm";

const App = () => {
  const DEFAULT_TWEET = [
    
    {
      id: 1,
      name: "franco",
      content: "je suis un developpeur react frontend",
      like: 0,
    },
    
    {
      id: 2,
      name: "thomas",
      content: "je suis un developpeur react frontend",
      like: 0,
    },
    {
      id: 3,
      name: "bobo",
      content: "je suis un developpeur react frontend",
      like: 0,
    },
    {
      id: 4,
      name: "Hanse",
      content: "je suis un developpeur react frontend",
      like: 0,
    },
  ];
  const [tweets, setTweetList] = useState(DEFAULT_TWEET);
  const handleDelete = (id) => {
    const tweetCopy = [...tweets];
    const updateTweet = tweetCopy.filter((update) => update.id !== id);
    setTweetList(updateTweet);
  };

  const tweetList = tweets.map((tweet) => {
    return (
      <Tweet
        key={tweet.id}
        handleDelete={handleDelete}
        name={tweet.name}
        tweet={tweet}
        like={tweet.like}
        content={tweet.content}
        id={tweets.id}
      />
    );
  });
  return (
    <div className="app">
      <h4>New Tweet</h4>
      <FormTweetm
        onsubmit={onsubmit}
        tweets={tweets}
        setTweetList={setTweetList}
      />
      <br />
      <span className="span">{tweetList}</span>
    </div>
  );
};

export default App;
