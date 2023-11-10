
import React from 'react'


export default function VideoSection({ movie }) {
  return (
    <>
                            <div>
                                <div>
                                    <video className="w-100" controls>
                                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <div className="h2">{movie.title}</div>

                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                    <div className="d-flex flex-wrap align-items-center gap-3">
                                        <div className="display-4">
                                            <i className="ph ph-user-circle"></i>
                                        </div>

                                        <div>
                                            <div><a href="#" className="text-black text-decoration-none fw-bold">Friends</a></div>
                                            <div className="text-muted">1.5k Subscribers</div>
                                        </div>

                                        <div>
                                            <button className="btn btn-dark rounded-5">Subscribe</button>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap align-items-center gap-3">
                                        <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2">
                                            <i className="ph ph-thumbs-up"></i>
                                            <div className="border-end pe-2">1.3K</div>
                                            <i className="ph ph-thumbs-down"></i>
                                        </button>

                                        <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2">
                                            <i className="ph ph-share-fat"></i>
                                            <div>Share</div>
                                        </button>

                                        <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2">
                                            <i className="ph ph-arrow-line-down"></i>
                                            <div>Download</div>
                                        </button>

                                        {/* <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2">
                                            <i className="ph ph-list-plus"></i>
                                            <div>Save</div>
                                        </button>

                                        <button className="btn btn-secondary rounded-5 d-flex align-items-center gap-2">
                                            <i className="ph ph-scissors"></i>
                                            <div>Clip</div>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
    </>
  )
}
