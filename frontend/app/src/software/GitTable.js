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

    console.log(git);

    for (var p in git) {
        if( git.hasOwnProperty(p) ) {
          console.log(git[p]);
       } 
    }              

    const headStyle = {

    }
    
    const cellStyle = {
        
    }

    return (
    <Container>
    <Header as='h3'>Software Repositories</Header>
    <Table responsive striped hover size="sm">
        <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            <th>Commits</th>
            <th>Size</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </Table>
    </Container>
)}

export default GitTable;
/**
 *             {git.map(repo => {
                return (
                    <tr key={repo.id}>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    </tr>
                    )
                })}
 * 
 */