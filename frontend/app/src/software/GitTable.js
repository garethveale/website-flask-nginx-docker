import React, { useEffect, useState} from 'react';
import { Container, Header } from 'semantic-ui-react';
import Table from 'react-bootstrap/Table';

function GitTable() {


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
            <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
            <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
            <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            </tr>
        </tbody>
    </Table>
    </Container>
)}

export default GitTable;