const React = require('react');

module.exports = function Posts(props) {
  return (
    <div>
      <h3>Posts</h3>
      <ol>
        {props.posts.map((post, i) =>
          <li key={post.slug}>
            <a href={`#/posts/${post.slug}`}>{post.title}</a>
          </li>
        )}
      </ol>
    </div>
  )
};