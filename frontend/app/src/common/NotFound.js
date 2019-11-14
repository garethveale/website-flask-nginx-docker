import React from 'react';
import { Header, Grid } from 'semantic-ui-react';


class NotFound extends React.Component {
    render() {
      return (
        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 500 }}>
                    <Header
                        as='h1'
                        content='404 NOT FOUND'
                        textAlign='center'
                        style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        marginBottom: '0.2em',
                        padding: '0em',
                        color: 'black',
                        }}
                    />           
            </Grid.Column>
        </Grid>
        )
    }
}
export default NotFound;