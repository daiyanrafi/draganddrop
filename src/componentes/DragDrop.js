import React, { useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
import "../App.css";

const PictureList = [
  {
    id: 1,
    url: "/images/image-1.webp"
  },
  {
    id: 2,
    url: "/images/image-2.webp"
  },
  {
    id: 3,
    url: "/images/image-3.webp"
  },
  {
    id: 4,
    url: "/images/image-4.webp"
  },
  {
    id: 11,
    url: "/images/image-11.jpeg"
  },
  // Add more images here
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const selectedPicture = PictureList.find((picture) => picture.id === id);
    if (selectedPicture) {
      setBoard([selectedPicture]);
    }
  };

  return (
    <>
      <div className='Pictures'>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
      <div className={`Board ${isOver ? 'isOver' : ''}`} ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;
