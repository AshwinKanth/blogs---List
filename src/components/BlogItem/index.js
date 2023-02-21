import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = itemDetails

  return (
    <Link to={`blogs/${id}`} className="linkItem">
      <li className="list_item">
        <img src={imageUrl} alt={topic} className="image" />
        <div className="details_container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author_details">
            <img src={avatarUrl} className="avatar_img" alt="title" />
            <p className="authorName">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
