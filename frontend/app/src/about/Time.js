import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Container, Image } from 'semantic-ui-react';

export const Time = () => {
    const heading = {
        fontWeight: '700',
        fontSize: '1em',
        color: 'black',
    }
    const subHeading = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: 'black',
        paddingTop:'0.2em',
        paddingBottom:'0.2em'
    }
    const bgHeader = {
        fontWeight: '700',
        fontSize: '1em',
        color: '#FDFFFC',
    }
    const bgSubheading = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: '#FDFFFC',
        paddingTop:'0.2em',
        paddingBottom:'0.2em'
    }
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: 'black',
    }
    const bgTextStyle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: '#FDFFFC',
    }
    return (
        <Timeline lineColor={'#ddd'}>
            <TimelineItem
                key="001"
                dateText="1994"
                dateInnerStyle={{ backgroundColor: 'white', color: 'black' }}
            >
                <h3 style={heading}>Born England, UK.</h3>
            </TimelineItem>

            <TimelineItem
                key="002"
                dateText="09/2014 – 07/2018"
                dateInnerStyle={{ backgroundColor: 'white', color: 'black' }}
            >
                <h3 style={heading}>BSc Information Technology, Bournemouth University</h3>
                <h4 style={subHeading}>1st Class Honors</h4>
            </TimelineItem>

            <TimelineItem
                key="003"
                dateText="07/2016 – 07/2017"
                dateInnerStyle={{ background: '#FF9F1C', color: '#FDFFFC' }}
                bodyContainerStyle={{
                background: '#FF9F1C',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={bgHeader}>Software Engineer, JP Morgan </h3>
                <h4 style={bgSubheading}>Internship</h4>
                <p style={bgTextStyle}>
                Through year long internship I performed regular data analysis across the server infrastructure portfolio, identifying opportunities for cost optimisation. 
                I began to build my knowledge of the financial markets and products, taking courses in derivatives and market microstructure.
                Further, I developed a React front-end for an application management tool that identifies obsolete, legacy applications.
                </p>
            </TimelineItem>

            <TimelineItem
                key="004"
                dateText="07/2017 – 09/2017"
                dateInnerStyle={{ backgroundColor: 'white', color: 'black' }}
            >
                <h3 style={heading}>English Language Teacher - Chengdu, China</h3>
                <p style={textStyle}>
                I spent 3 months living with a Chinese host family in Chengdu, sharing information around culture, history, education, language, etc. 
                I received 6 hours per week of 1-1 Mandarin tutoring and achieved HSK2 in my Chinese language abilities as a result.
                </p>
            </TimelineItem>

            <TimelineItem
                key="005"
                dateText="09/2018 – Present"
                dateInnerStyle={{ background: '#011627', color: '#FDFFFC' }}
                bodyContainerStyle={{
                background: '#011627',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={bgHeader}>Software Engineer, JP Morgan</h3>
                <p style={bgTextStyle}>
                Python backend engineer, trading and risk management technology.
                </p>
            </TimelineItem>

            <TimelineItem
                key="006"
                dateText="01/2019 – 09/2019"
                dateInnerStyle={{ backgroundColor: 'white', color: 'black' }}
            >
                <h3 style={heading}>Co-Founder Silicon Seed</h3>
                <p style={textStyle}>
                Co-Founded a weekly newsletter that provided valuable, actionable, and insightful content to fuel the next generation of entrepreneurs, innovators and pioneers.
                </p>
            </TimelineItem>

            <TimelineItem
                key="006"
                dateText="2014 – Present"
                dateInnerStyle={{ background: '#2EC4B6', color: '#FDFFFC' }}
                bodyContainerStyle={{
                background: '#2EC4B6',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
            >
                <h3 style={bgHeader}>Self-learning software engineer</h3>
                <p style={bgTextStyle}>
                I've been teaching myself software for quite a while, my skills lie primarily in Python and React, but I have been learning
                C++ and low level programming more recently. I have become comfortable with web development, including NGINX, Flask, React, Gunicorn,
                Load balancing, Linux hosting. Further skills: Docker, Git, Linux programming, and Pandas.
                </p>
            </TimelineItem>

        </Timeline>    
        )
  }