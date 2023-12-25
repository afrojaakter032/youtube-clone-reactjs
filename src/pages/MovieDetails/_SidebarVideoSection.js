import React from "react";
import { Link } from "react-router-dom";

function SidebarVideoSection (){
    return (
        <>
            <div>
                {[1, 2, 3, 4, 5].map(() => (
                    <div className="d-sm-flex gap-3 mb-3">
                        <div>
                            <img className="rounded" src="/asstes/images/vedios/card1.jpg" width="150" height="100" />
                        </div>

                        <div>
                            <div className="fw-bold">
                                <Link to="/details" className="text-black">
                                    Joey and Chandler sandwich fight
                                </Link>
                            </div>

                            <div><small>Friends</small></div>

                            <div>
                                <small>20 Views . 1 week ago</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SidebarVideoSection;