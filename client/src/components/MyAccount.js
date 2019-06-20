import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyAccount extends React.Component {
  state = { accounts: [], };

  componentDidMount() {
    axios.get('/api/my_account')
      .then( res => this.setState({ accounts: res.data, }) );
  }

  render() {
    const { accounts, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { accounts.map( account =>
          <Card key={account.id}>
            <Image src={account.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { account.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyAccount;