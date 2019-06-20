import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { accounts: [], };
  
  componentDidMount() {
    axios.get('/api/accounts')
      .then(res => this.setState({ accounts: res.data, }))
  }
  
  sample = () => {
    const { accounts, } = this.state;

    if (accounts.length) {
      const index = Math.floor(Math.random() * accounts.length);
      return accounts[index];
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { accounts, } = this.state;
    this.setState({ accounts: accounts.filter( c => c.id !== id ), });
  }

  upvote = (id) => {
    const { accounts, } = this.state;
    axios.put(`/api/accounts/${id}`)
      .then( () => this.setState({ accounts: accounts.filter( c => c.id !== id ), }) )
  }
  
  render() {
    const account = this.sample();
    if (account) {
      return (
        <div>
          <br />
          <Header as='h1'>Do you know this person?</Header>
          <br />
          <Card key={account.id}>
            <Image src={account.avatar} />
            <Card.Content>
              <Card.Header>
                { account.name }
              </Card.Header>
              <Card.Description>
                { account.breed }
              </Card.Description>
              <Card.Meta>
                { account.registry }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(account.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upvote(account.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_account">
            <Button color="blue">
              My Friends
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Matches, come back later!</Header>
    }
  }
}

export default Home;