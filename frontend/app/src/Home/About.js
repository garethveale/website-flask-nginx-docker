import React from 'react';
import { Container, Grid, Header, List, Segment, Icon } from 'semantic-ui-react';

export const About = () => {
    const aboutTextStyle = {
        fontWeight: '400',
        padding: '1em'
      };
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em'
      };
    const subHeading = {
        fontWeight: '600',
        fontSize: '0.8em',
    }
    return (
        <Container textAlign='center'>
            <Segment style={{
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
                <Container text>
                <p  style={aboutTextStyle}>I'm Gareth. Software Engineer at JP Morgan. I enjoy building software, solving problems, and
                learning. Interested in business, self-improvement, finance and macroeconomics. Student of philosophy and life.
                Weightlifting and pushing myself daily.</p>
                </Container>
                
                <Grid columns={3} stackable textAlign='center'>
                    <Grid.Row centered >
                    <Grid.Column textAlign='center'>
                        <Icon name='code' size='large' style={{ color:'#2EC4B6' }}/>
                        <Header as='h6' centered>Software Engineering</Header>
                        <List> 
                            <List.Item style={subHeading}>Languages/Frameworks</List.Item>    
                            <List.Item style={textStyle}>Python</List.Item>
                            <List.Item style={textStyle}>Flask</List.Item>
                            <List.Item style={textStyle}>C++</List.Item>
                            <List.Item style={textStyle}>React</List.Item>
                        </List>
                        
                        <List>
                            <List.Item style={subHeading}>Tools</List.Item>
                            <List.Item style={textStyle}>Linux Programming</List.Item>
                            <List.Item style={textStyle}>Containers/Docker</List.Item>
                            <List.Item style={textStyle}>Microservices</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Icon name='book' size='large' style={{ color:'#E71D36' }}/>
                        <Header as='h6' centered>Self-Study</Header>
                        <List>
                            <List.Item style={subHeading}>CS</List.Item>
                            <List.Item style={textStyle}>Data science</List.Item>
                            <List.Item style={textStyle}>Games Programming</List.Item>
                            <List.Item style={textStyle}>Low level programming</List.Item>
                        </List>
                        <List>
                            <List.Item style={subHeading}>Finance</List.Item>
                            <List.Item style={textStyle}>Financial engineering</List.Item>
                            <List.Item style={textStyle}>Econometrics</List.Item>
                            <List.Item style={textStyle}>Quantitative Finance</List.Item>
                            <List.Item style={textStyle}>Macroeconomics</List.Item>
                         </List>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Icon name='balance scale' size='large' style={{ color:'#FF9F1C' }}/>
                        <Header as='h6' centered>Achievements/Hobbies</Header>
                        <List>
                            <List.Item style={subHeading}>Achievements</List.Item>
                            <List.Item style={textStyle}>1st Class Honors Information Technology</List.Item>
                            <List.Item style={textStyle}>University Scholarship</List.Item>
                            <List.Item style={textStyle}>HCI 2019 Paper</List.Item>
                         </List>
                         <List>
                            <List.Item style={subHeading}>Hobbies</List.Item>
                            <List.Item style={textStyle}>Ultramarathon Running</List.Item>
                            <List.Item style={textStyle}>Weightlifting</List.Item>
                            <List.Item style={textStyle}>Reading</List.Item>
                            <List.Item style={textStyle}>Writing</List.Item>
                         </List>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            </Container>
    )
}