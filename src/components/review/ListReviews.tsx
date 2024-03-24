import React from 'react'

const ListReviews = () => {
  return (
    <div className="w-75 mb-5">
      <h3 className="text-2xl font-bold">3 Reviews</h3>
      <hr />
      <div className="my-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3 lg:col-span-1">
            <img
              src="/images/avatar.jpg"
              alt="John Doe"
              width="60"
              height="60"
              className="rounded-full"
            />
          </div>
          <div className="col-span-9 lg:col-span-11">
            <div className="star-ratings">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <p className="mt-1 font-bold">by John Doe</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur, mi nec tristique vehicula, elit tellus vulputate ex,
              nec bibendum libero elit at orci.
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default ListReviews