import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Forms = () => {
  const [songs, setSongs] = useState([]);
  const [songIds, setSongIds] = useState(0);

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

  const handleOpenModal = (songId) => {
    console.log(songId);
    if (songId) {
      setSongIds(songId);
    }
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      {show && <Modal id={songIds} onCloseModal={handleCloseModal} />}
      <div className="w-full py-6 px-9 mx-auto mt-12 flex flex-col gap-5">
        <div className=" flex justify-between">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <button
            onClick={() => handleOpenModal()}
            className="bg-yellow-500 rounded text-white py-2 px-4 font-bold hover:bg-blue-900 hover:text-yellow-500 transition ease-in-out outline-none"
          >
            Add Items
          </button>
        </div>
        <div className="w-full">
          <table className="table-auto w-full rounded">
            <thead className="bg-blue-900 ">
              <tr>
                <th className="text-left py-3 px-6 text-white">No.</th>
                <th className="text-left py-3 px-6 text-white">Song</th>
                <th className="text-left py-3 px-6 text-white">Artist</th>
                <th className="text-left py-3 px-6 text-white">Year</th>
                <th className="text-left py-3 px-6 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song.id} className="border-b-2 bg-white">
                  <td className="text-left py-3 px-6">{song.id}</td>
                  <td className="text-left py-3 px-6">{song.title}</td>
                  <td className="text-left py-3 px-6">{song.artist}</td>
                  <td className="text-left py-3 px-6">{song.year}</td>

                  <td className="text-left py-3 px-6">
                    <button
                      className="bg-gray-300 hover:bg-gray-500 rounded py-1 px-5 font-semibold transition ease-in-out outline-none"
                      onClick={() => handleOpenModal(song.id)}
                    >
                      Edit
                    </button>{" "}
                    &nbsp;{" "}
                    <button
                      className="bg-red-600 hover:bg-red-800 text-white rounded py-1 px-5 font-semibold transition ease-in-out outline-none"
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
