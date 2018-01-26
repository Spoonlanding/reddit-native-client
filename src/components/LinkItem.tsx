import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ListItem, Thumbnail, Body } from 'native-base';

interface props {
  post: any;
}

const LinkItem: React.SFC<props> = ({ post }) => (
  <ListItem>
    <Body style={styles.postBody} >
      <Text style={styles.postHeader}>
        <Text style={styles.score}>{ post.score }</Text>
        <Text>{ ' ' + post.author }</Text>
        <Text> in </Text>
        <Text>{ post.subreddit }</Text>
      </Text>
      <Text style={styles.title}>{ post.title }</Text>
      <Text style={styles.postHeader}>
        { `${post.commentCount} comments | ${post.domain}` }
      </Text>
    </Body>
    {
      post.thumbnail &&
      <Thumbnail square size={80} source={{ uri: post.thumbnail }}/>
    }
  </ListItem>
);

const styles = StyleSheet.create({
  postBody: {
    padding: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  postHeader: {
    fontSize: 12,
  },
  score: {
    fontSize: 16,
  },
});

export default LinkItem;
