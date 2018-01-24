import * as React from 'react';
import { Text } from 'react-native';
import { List } from 'native-base';
import { getFrontPage } from '../helpers/reddit-api-wrapper';
import LinkItem from './LinkItem';

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      posts: {},
    };
  }

  componentWillMount() {
    this.getFrontPage();
  }

  async getFrontPage() {
    const posts = await getFrontPage();
    this.setState({ posts, isReady: true });
  }

  render() {

    return (
      this.state.isReady ?
      <List>
        {
          this.state.posts.map((post: any, key: Number) => (
            <LinkItem post={post} key={key} />
          ))
        }
      </List>
      :
      (<Text>Loading...</Text>)
    );
  }
}
