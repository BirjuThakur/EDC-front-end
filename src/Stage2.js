import React from "react";

const Stage2 = () => {
    return (
        <>
            <div className="pt-5 d-flex flex-column justify-content-center align-items-center" style={{ width: "80%" }}>
                <h1>check your progress</h1>
                <div className="progress w-75 h-75">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%", fontSize: "15px" }} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100">
                        idea submitted checked
                    </div>
                </div>
                <br />
                <div className="progress w-75 h-75">
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "60%", fontSize: "15px" }} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"> document submitted checked </div>
                </div>
                <br />
                <div className="progress w-75 h-75">
                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%", fontSize: "15px" }} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"> approved for incubation? </div>
                </div>
                <br />
                <div className="progress w-75 h-75">
                    <div className="progress-bar " role="progressbar" style={{ width: "60%", fontSize: "15px" }} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"> meeting scheduled? </div>
                </div>
                <br />
                <div className="progress w-75 h-75">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "60%", fontSize: "15px" }} aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100"> fund approved? </div>
                </div>
            </div>
            <div className="container pt-5">
            <form>
                <h1>upload documents </h1>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload company registration documents:</label>
                    <input className="form-control w-50" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload company registration documents:</label>
                    <input className="form-control w-50" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload company registration documents:</label>
                    <input className="form-control w-50" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload company registration documents:</label>
                    <input className="form-control w-50" type="file" id="formFile" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload company registration documents:</label>
                    <input className="form-control w-50" type="file" id="formFile" />
                </div>
                <button className="btn btn-info">submit</button>
            </form>
            </div>
        </>
    )
}

export default Stage2;