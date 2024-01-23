import { BlogImg, BlogTitle } from "../styled";

function Article() {
  return (
    <main>
      <article>
        <time dateTime="2020-11-12">11/12/20</time>
        <BlogTitle>On The Street in Brooklyn</BlogTitle>
        <BlogImg src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" alt="blog img 1"></BlogImg>
        <p>lorem ipsum</p>
      </article>
      <article>
        <time dateTime="2020-11-11">11/11/20</time>
        <BlogTitle>Vintage in Vogue</BlogTitle>
        <BlogImg src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" alt="blog img 2"></BlogImg>
        <p>lorem ipsum</p>
      </article>
    </main>
  );
}

export default Article;
