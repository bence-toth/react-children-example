import { ReactNode } from "react";

// TODO: Read this: https://react.dev/reference/react/Children

const App = () => (
  <div>
    <Addition number1={10} number2={15} />
    <Comment author="Bence A. Toth" numberOfLikes={2355}>
      <p>I actually want to say 3 smart things:</p>
      <ul>
        <li>This is the first</li>
        <li>And the second</li>
        <li>
          <strong>And the last</strong>, which is also bold:
          <Addition number1={10} number2={15} />
        </li>
      </ul>
    </Comment>
    <Comment
      author="John Doe"
      numberOfLikes={200}
      children={
        <>
          <p>I actually want to say 3 smart things:</p>
          <ul>
            <li>This is the first</li>
            <li>And the second</li>
            <li>
              <strong>And the last</strong>, which is also bold
            </li>
          </ul>
        </>
      }
    />
  </div>
);

interface AdditionProps {
  number1: number;
  number2: number;
}

const Addition = ({ number1, number2 }: AdditionProps) => {
  return (
    <p>
      {number1} + {number2} = {number1 + number2}
    </p>
  );
};

interface CommentProps {
  author: string;
  numberOfLikes: number;
  children: ReactNode;
}

const Comment = ({ author, numberOfLikes, children }: CommentProps) => (
  <article>
    <header>{author}</header>
    <div>{children}</div>
    <span>{numberOfLikes} likes</span>
    <button>Like</button>
  </article>
);

export default App;
