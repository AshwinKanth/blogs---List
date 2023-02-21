import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const fetchedData = {
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogData: fetchedData})
  }

  render() {
    const {blogData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogData
    return (
      <div className="blogItemDetails_container">
        <h1 className="title">{title}</h1>
        <div className="author_details">
          <img src={avatarUrl} className="avatar_img" alt="title" />
          <p className="authorName">{author}</p>
        </div>
        <img src={imageUrl} className="imageUrl" alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
