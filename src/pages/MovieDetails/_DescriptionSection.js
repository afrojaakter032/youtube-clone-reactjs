import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function DescriptionSection({movie}) {
    let [showMore, setShowMore] = useState(false);
  return (
    <>

        <div className="bg-light p-3 rounded">
            <div>
                <div className="d-flex flex-wrap gap-3"><b>951,486 views</b>  <b>Jul 28, 2022</b></div>

                <div className="d-flex flex-wrap gap-3">
                    <Link to="/">#MattLeBlanc</Link>
                    <Link to="/">#JenniferAniston</Link>
                    <Link to="/">#LisaKudrow</Link>
                </div>

                <p>
                    Ross becomes fixated with completing the Name All Fifty States game before he allows himself to eat any of Thanksgiving dinner.
                    <br />Chandler wants to make Monica happy and goes over to Ross’ place to bring the dog back, and when it’s not there he thinks the dog escaped.
                    <br />But Phoebe and Monica have already snuck the dog back to the apartment.
                    <br /> Joey accidentally reveals Rachel’s crush on Tag. Later on Tag returns his feelings for Rachel and they share a kiss in the hall. Watch more Friends on TBS.
                </p>

                {showMore && (
                    <>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </>
                )}

                <button className="btn btn-link p-0" onClick={() => setShowMore(showMore ? false : true)}>
                    {showMore ? 'Show Less...' : 'Show More...'}
                </button>
            </div>
        </div>
    </>
  )
}
