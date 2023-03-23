import Image from 'next/image';
import classes from './Post.module.scss';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};

const Post = (props) => {
  const { cardData } = props;
  return (
    <div className={classes.wrapper}>
      <Image
        loader={myLoader}
        src={cardData.card_images[0].image_url}
        alt={cardData.name}
        width={300}
        height={400}
      />
      <p className={classes.desc}>{cardData.desc}</p>
    </div>
  );
};

export default Post;
