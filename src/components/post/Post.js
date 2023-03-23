import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};

const Post = (props) => {
  const { cardData } = props;
  return (
    <div>
      <Image
        loader={myLoader}
        src={cardData.card_images[0].image_url}
        alt={cardData.name}
        width={500}
        height={650}
      />
      <p>{cardData.desc}</p>
    </div>
  );
};

export default Post;
