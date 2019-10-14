import React from 'react'

class Post extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>This is a post</h1>
        <p>{params.slug}</p>
      </div>
    )
  }
}
export default Post;