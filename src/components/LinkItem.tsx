import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ListItem, Thumbnail, Body } from 'native-base';

interface props {
  post: any;
}

const LinkItem: React.SFC<props> = post => (
  <ListItem>
    <Body style={styles.postBody} >
      <Text> { post.post.title } </Text>
    </Body>
    {
      post.post.thumbnail &&
      <Thumbnail square size={80} source={{ uri: post.post.thumbnail }}/>
    }
  </ListItem>
);

const styles = StyleSheet.create({
  postBody: {
    padding: 0,
  },
});

export default LinkItem;
