import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserSearch() {
  const { users } = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    //catching the text value of search
    setText(e.target.value);
  };

  return (
    <div className=" grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <from>
          <div className="form-control">
            <div className="relative">
              <inpute
                className="w-full pr-4 bg-gray-200 inpute inpute-lg text-black"
                placeholder="Search"
                //use state args
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 rounded-l-none right-0 w-36 btn btn-lg"
              ></button>
            </div>
          </div>
        </from>
      </div>

      conditon for the clear button 
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
