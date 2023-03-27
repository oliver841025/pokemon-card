import Posts from '@/components/posts/Posts';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home(props) {
  const router = useRouter();
  const allPosts = props.posts.data;
  const [cardType, setCardType] = useState('');

  console.log(allPosts);

  const getAllSpellCards = (allCards) => {
    const result = allCards?.filter((el) => {
      return el.type === 'Spell Card';
    });
    return result;
  };

  const getAllTrapCards = (allCards) => {
    const result = allCards?.filter((el) => {
      return el.type === 'Trap Card';
    });
    return result;
  };

  const getAllMonsterCards = (allCards) => {
    const result = allCards?.filter((el) => {
      return el.type.includes('Monster');
    });
    return result;
  };

  const memoizedSpellCards = useMemo(
    () => getAllSpellCards(allPosts),
    [allPosts]
  );

  const memoizedTrapCards = useMemo(
    () => getAllTrapCards(allPosts),
    [allPosts]
  );

  const memoizedMonsterCards = useMemo(
    () => getAllMonsterCards(allPosts),
    [allPosts]
  );

  const handleChange = (e) => {
    setCardType(e.target.value);
  };

  return (
    <>
      <section>
        <div>Type</div>
        <select name="type" onChange={handleChange}>
          <option value="" selected>
            All
          </option>
          <option value="Monster">Monster</option>
          <option value="Spell Card">Spell</option>
          <option value="Trap Card">Trap</option>
        </select>
      </section>

      {cardType.includes('Monster') && <Posts posts={memoizedMonsterCards} />}
      {cardType === 'Spell Card' && <Posts posts={memoizedSpellCards} />}
      {cardType === 'Trap Card' && <Posts posts={memoizedTrapCards} />}
      {cardType !== 'Spell Card' &&
        cardType !== 'Trap Card' &&
        cardType.includes('Monster') === false && <Posts posts={allPosts} />}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=300&offset=0'
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
