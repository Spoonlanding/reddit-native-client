export const getFrontPage = async () => {
  const response = await fetch('http://www.reddit.com/.json');
  const body = await response.json();
  return body.data.children.map(({ data }) => {
    return {
      title: data.title,
      domain: data.domain,
      subreddit: data.subreddit_name_prefixed,
      thumbnail: data.thumbnail.slice(0, 5) === 'https' ? data.thumbnail : null,
      flair: data.link_flair_text,
      author: data.author,
      score: data.score,
      commentCount: data.num_comments,
    };
  });
};
