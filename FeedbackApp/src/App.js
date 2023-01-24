/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";

function App() {
  //Prop drilling App > feedbacklist > feedbackitem

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

//   const title = "My App";
//   const body = "This is my first app in React.";
//   const comments = [
//     { id: 1, text: "comment 1" },
//     { id: 2, text: "comment 2" },
//     { id: 3, text: "comment 3" },
//     { id: 4, text: "comment 4" },
//   ];

//   const showComments = true

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => {
//           return <li key={index}>{comment.text}</li>;
//         })}
//       </ul>
//     </div>
//   );
//   return (
//here to return multiple tag in one go we need to rap them with
// a <div/> tag or <></> empty tags called the fragments.
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>
//         <b>{body}</b>
//       </p>
//       {showComments && commentBlock}
//     </div>
//   );
// }
