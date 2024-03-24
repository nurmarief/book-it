"use client";

import React from "react";

const NewReview = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className="btn btn-primary" onClick={() => dialogRef.current!.showModal()}>Submit Your Review</button>
      <dialog id="my_modal_1" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Submit Review!</h3>
          <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tempora.</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NewReview;