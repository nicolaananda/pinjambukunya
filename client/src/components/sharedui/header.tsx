import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Header = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-200">
      <div
        className="font-bold text-xl text-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        pinjamkanbuku.
      </div>
      <div className="flex items-center">
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate(`/?search=${searchKey}`);
            }
          }}
          value={searchKey}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/login">
          <div className="text-gray-600 cursor-pointer hover:text-gray-800">
            Login
          </div>
        </Link>
        <Link to="/register">
          <Button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
};
