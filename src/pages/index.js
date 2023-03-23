import Posts from '@/components/posts/Posts';

export default function Home(props) {
  return (
    <>
      <Posts posts={props.posts.data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0'
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
