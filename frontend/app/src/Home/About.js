import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

export const About = () => {
    return (
            <Container style={{
                margin: '3em',
            }}>
                <style>
                {`
                p {
                    align-content: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 6em;
                }
                p > span {
                    opacity: 0.4;
                    text-align: center;
                }
                }
                `}
                </style>
                <Header as='h3'>About Me</Header>
                <p>I'm Gareth. Software Engineer at JP Morgan, working
                in trading and risk management. Enjoy building software, solving problems, and
                learning. Interested in business, finance and macroeconomics. Student of philosophy and life.</p>
                
                <Grid columns={4} stackable centered textAlign='center'>
                    <Grid.Row centered >
                    <Grid.Column>
                        <Header as='h6' centered>Software Engineering</Header>
                        <List as='ul'>
                            <List.Item as='li'>Python</List.Item>
                            <List.Item as='li'>C++</List.Item>
                            <List.Item as='li'>Javascript/React and ReactNative</List.Item>
                            <List.Item as='li'>Linux Programming</List.Item>
                            <List.Item as='li'>Containers/Docker</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Future Ventures/Self-Study</Header>
                        <List as='ul'>
                            <List.Item as='li'>Data science</List.Item>
                            <List.Item as='li'>Games programming</List.Item>
                            <List.Item as='li'>Macroeconomics</List.Item>
                            <List.Item as='li'>Low level programming</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Achievements/Publications</Header>
                        <List as='ul'>
                            <List.Item as='li'>1st Class Bachelors Degree: Information Technology</List.Item>
                            <List.Item as='li'>University Scholarship</List.Item>
                            <List.Item as='li'>Macroeconomics</List.Item>
                            <List.Item as='li'>HCI 2019 Paper</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Hobbies</Header>
                        <List as='ul'>
                            <List.Item as='li'>Ultramarathon Running</List.Item>
                            <List.Item as='li'>Reading</List.Item>
                            <List.Item as='li'>Writing</List.Item>
                         </List>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
    )
}