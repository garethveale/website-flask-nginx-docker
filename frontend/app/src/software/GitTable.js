import React, { useEffect, useState} from 'react';
import { Container, Header } from 'semantic-ui-react';
import Table from 'react-bootstrap/Table';

function GitTable() {

    const [git, setPosts] = useState([]);

    useEffect(() => {
      fetch('/software').then(response => 
        response.json().then(data => {
          setPosts(data.git);
        })
      );
    }, []);           

    var arr = [];
    Object.keys(git).forEach(function(key) {
      arr.push(git[key]);
    });

    const headStyle = {
      fontSize: '0.75em',
      width: '25em'
    }

    const medHeadStyle = {
      fontSize: '0.75em',
      width: '20em'
    }
    
    const smallHeadStyle = {
      fontSize: '0.75em',
      width: '10em'
    }
    
    const cellStyle = {
      fontSize: '0.75em'
    }

    return (
    <Container style={{ marginTop:'2em'}}>
    <Header as='h3'>Software Repositories</Header>
    <Table responsive striped hover size="sm">
        <thead>
            <tr>
            <th style={medHeadStyle}>Title</th>
            <th style={headStyle}>Description</th>
            <th style={smallHeadStyle}>Language</th>
            <th style={smallHeadStyle}>Size</th>
            </tr>
        </thead>
        <tbody>   
          {arr.map(item => 
            <tr key={item.id}>
            <td style={cellStyle}>{item.name}</td>
            <td style={cellStyle}>{item.description}</td>
            <td style={cellStyle}>{item.language}</td>
            <td style={cellStyle}>{item.size}</td>
            </tr>
          )}     
        </tbody>
    </Table>
    </Container>
)}

export default GitTable;