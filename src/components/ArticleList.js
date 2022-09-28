import Article from "./Article"

function ArticleList( {posts} ) {
    const postLists = posts.map((post) => {
        return <Article 
            key={post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
        />
    })
  return (
    <main>
        {postLists}
    </main>
  )
}

export default ArticleList