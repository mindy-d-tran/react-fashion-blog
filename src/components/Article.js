import { BlogImg, BlogText, BlogTitle } from "../styled";

function Article() {
  return (
    <main>
      <article>
        <time dateTime="2020-11-12">11/12/20</time>
        <BlogTitle>On The Street in Brooklyn</BlogTitle>
        <BlogImg
          src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
          alt="blog img 1"
        ></BlogImg>
        <BlogText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BlogText>
      </article>
      <article>
        <time dateTime="2020-11-11">11/11/20</time>
        <BlogTitle>Vintage in Vogue</BlogTitle>
        <BlogImg
          src="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
          alt="blog img 2"
        ></BlogImg>
        <BlogText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </BlogText>
      </article>
    </main>
  );
}

export default Article;
