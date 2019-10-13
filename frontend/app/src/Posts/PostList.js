import React from './node_modules/react';
import { List, Header } from './node_modules/semantic-ui-react';

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