import React from 'react'

function Card({ username = "prem", post = "not decided yet", source = "https://i.pinimg.com/736x/88/88/4d/88884de64ef7f796f3d3a964767bf389.jpg" }) {

  return (
    <>

      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={source} alt="" width="384" height="512" />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perferendis!

            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Card