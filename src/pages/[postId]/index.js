import Posts from '@/components/posts/Posts';

const Post = (props) => {
  const { post } = props;
  const cardData = post.data[0];
  //   console.log(cardData);

  return (
    <>
      <Posts cardData={cardData} />
    </>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${params.postId}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0'
  );
  const posts = await res.json();

  const paths = posts.data.map((post) => ({
    params: {
      postId: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default Post;
