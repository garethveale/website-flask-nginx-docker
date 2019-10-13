import React from 'react';
import { List, Header } from 'semantic-ui-react';

export const Posts = ({ posts }) => {
    return (
        <List>
            {posts.map(post => {
                return (
                    <List.Item key={post.title}>
                        <Header>{post.title}</Header>
                    </List.Item>
                )
            })}
        </List>
    )
}