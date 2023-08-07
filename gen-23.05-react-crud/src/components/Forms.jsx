import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Forms = () => {
  const [songs, setSongs] = useState([]);

  const getAllSongs = () => {
    axios
      .get("http://localhost:3000/songs")
      .then((res) => setSongs(res.data))
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  const deleteSong = (songId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (shouldDelete) {
      axios
        .delete("http://localhost:3000/songs/" + songId)
        .then(() => getAllSongs())
        .catch((err) => alert(err));
    }
  };
  useEffect(() => {
    getAllSongs();
  }, []);

  const handleCloseModal = () => {
    setShow(false);
  };

  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      {show && <Modal onCloseModal={handleCloseModal} />}
      <div className="w-full py-6 px-9 mx-auto mt-12 flex flex-col gap-5">
        <div className=" flex justify-between">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <button
            onClick={() => setShow(true)}
            className="bg-yellow-400 rounded text-white py-2 px-4 font-bold hover:bg-yellow-600 transition ease-in-out"
          >
            Add Items
          </button>
        </div>
        <div className="w-full">
          <table className="table-auto w-full rounded">
            <thead className="bg-gray-300 ">
              <tr>
                <th className="text-left py-3 px-6">Song</th>
                <th className="text-left py-3 px-6">Artist</th>
                <th className="text-left py-3 px-6">Year</th>
                <th className="text-left py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.id}>
                  <td className="text-left py-3 px-6">{song.title}</td>
                  <td className="text-left py-3 px-6">{song.artist}</td>
                  <td className="text-left py-3 px-6">{song.year}</td>

                  <td className="text-left py-3 px-6">
                    <button className="bg-gray-300 hover:bg-gray-500 rounded py-1 px-5 font-semibold transition ease-in-out">
                      Edit
                    </button>{" "}
                    &nbsp;{" "}
                    <button
                      className="bg-red-600 hover:bg-red-800 text-white rounded py-1 px-5 font-semibold transition ease-in-out"
                      onClick={() => deleteSong(song.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forms;
