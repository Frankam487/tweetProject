import { useState } from "react";

const Tweet = ({ name, content, tweet, handleDelete, id }) => {
   const [like, setLike] = useState(0);
//fonction d'ajout de like
  const handleClick = () => {
    setLike((e) => {
      return e + 1;
    });
  };

  return (
    <div className="tweet">
      <h3>{name}</h3>
      <button className="btnDeleteTweet" onClick={() => handleDelete(tweet.id)}>
        X
      </button>
      <p>{content}</p>
      <button onClick={handleClick}>{like} likes</button>
    </div>
  );
};

export default Tweet;
