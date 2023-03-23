import Image from 'next/image';
import Link from 'next/link';
import classes from './Posts.module.scss';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};

const Posts = (props) => {
  const { posts } = props;
  console.log(posts);

  return (
    <>
      <ul className={classes.wrapper}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/${post.id}`}>
                <Image
                  loader={myLoader}
                  src={post.card_images[0].image_url}
                  alt={post.name}
                  width={150}
                  height={200}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
