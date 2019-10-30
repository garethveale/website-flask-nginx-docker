import React from 'react';
import { Container, Grid, Header, List } from 'semantic-ui-react';

export const About = () => {
    const aboutTextStyle = {
        fontWeight: '500',
      };
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em'
      };
    return (
            <Container style={{
                margin: '3em',
            }}>
                <style>
                {`
                p {
                    align-content: center;
                    min-height: 6em;
                }
                p > span {
                    opacity: 0.4;
                    text-align: center;
                }
                }
                `}
                </style>
                <Header as='h3'>ABOUT ME</Header>
                <p  style={aboutTextStyle}>I'm Gareth. Software Engineer at JP Morgan. I enjoy building software, solving problems, and
                learning. Interested in business, finance and macroeconomics. Student of philosophy and life.</p>
                
                <Grid columns={4} stackable centered textAlign='center'>
                    <Grid.Row centered >
                    <Grid.Column>
                        <Header as='h6' centered>Software Engineering</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Python</List.Item>
                            <List.Item as='li' style={textStyle}>C++</List.Item>
                            <List.Item as='li' style={textStyle}>Javascript/React and ReactNative</List.Item>
                            <List.Item as='li' style={textStyle}>Linux Programming</List.Item>
                            <List.Item as='li' style={textStyle}>Containers/Docker</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Future Ventures/Self-Study</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Data science</List.Item>
                            <List.Item as='li' style={textStyle}>Games programming</List.Item>
                            <List.Item as='li' style={textStyle}>Macroeconomics</List.Item>
                            <List.Item as='li' style={textStyle}>Low level programming</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Achievements/Publications</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>1st Class Honors Information Technology</List.Item>
                            <List.Item as='li' style={textStyle}>University Scholarship</List.Item>
                            <List.Item as='li' style={textStyle}>HCI 2019 Paper</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h6' centered>Hobbies</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Ultramarathon Running</List.Item>
                            <List.Item as='li' style={textStyle}>Weightlifting</List.Item>
                            <List.Item as='li' style={textStyle}>Reading</List.Item>
                            <List.Item as='li' style={textStyle}>Writing</List.Item>
                         </List>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
    )
}