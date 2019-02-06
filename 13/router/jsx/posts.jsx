const React = require('react');
const {Link} = require('react-router');

module.exports = function Posts(props) {
  return (
    <div>
      <h3>Posts</h3>
      <ol>
        {props.route.posts.map((post, i) =>
          <li key={post.slug}><Link to={`/posts/${post.slug}`}>{post.title}</Link></li>
        )}
      </ol>
    </div>
  )
}