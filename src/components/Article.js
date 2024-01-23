import { BlogImg } from "../styled";

function Article() {
  return (
    <section>
      <article>
        <time dateTime="2020-11-12">11/12/20</time>
        <h2>On The Street in Brooklyn</h2>
        <BlogImg src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" alt="blog img 1"></BlogImg>
        <p>lorem ipsum</p>
      </article>
      <article>
        <time dateTime="2020-11-11">11/11/20</time>
        <h2>Vintage in Vogue</h2>
        <BlogImg src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" alt="blog img 2"></BlogImg>
        <p>lorem ipsum</p>
      </article>
    </section>
  );
}

export default Article;
