
import { useForm } from 'react-hook-form';

const FormTweetm = ({tweets, setTweetList}) => {
      const onsubmit = (e) => {
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name: e.name,
      content: e.content,
      like: 0,
    };
    setTweetList([...tweets, newTweet]);
    reset();
  };
     const {
       register,
       handleSubmit, reset,
       formState: { errors },
     } = useForm();
    return (
      <div>
        <form onSubmit={handleSubmit(onsubmit)} className="tweet-form">
          <input
            placeholder="name"
            type="text"
            {...register("name", {
              required: true,
              maxLength: 10,
              minLength: 2,
            })}
          />
          {errors.name && (
            <i style={{ color: "red" }}>
              Le champ ne doit pas etre vide et est compris entre 2 et 10
            </i>
          )}
          <input
            placeholder="content"
            type="content"
            {...register("content", {
              required: true,
              maxLength: 50,
              minLength: 5,
            })}
          />
          {errors.content && (
            <i style={{ color: "red" }}>Erreur, verifier bien ce champ...</i>
          )}
          <input type="submit" value="Ajouter" />
        </form>
      </div>
    );
};

export default FormTweetm;
