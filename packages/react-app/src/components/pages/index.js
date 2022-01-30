import React, { useState, useEffect } from 'react'
import img1 from "../../images/img2.jpg";
import { Main, Image, VoteButton, BlackModal, BlackGroupButton, BlackButton, BlackButtonGroup, BlackModalBody, JoinButton, pdfObj } from "./components";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.css";
import PDF from "../../documents/GordionTV Whitepaper v0_1.pdf";
import "./style.css";

function VotingModal(props) {
    const [active, setActive] = useState(0);

    function handleGenreSelection(e, val) {
        setActive(val);
    }
    useEffect(() => console.log(active), [active]);

    const css = `
`

    return (
        <>
            <style>{css}</style>
            <BlackModal
                onHide={props.onHide}
                show={props.show}
                size="sm"
                centered
            >
                <BlackModal.Header closeVariant="white" style={{ borderColor: "#fff", backgroundColor: "#1F2020" }} closeButton>
                    <BlackModal.Title id="contained-modal-title-vcenter">
                        Select A Genre
                    </BlackModal.Title>
                </BlackModal.Header >
                <BlackModalBody style={{ borderColor: "#fff !important", textAlign: "center", height: "500px", overflowY: "scroll", backgroundColor: "#1F2020" }}>
                    <BlackButtonGroup name="genre" type="radio" defaultValue={4} vertical>
                        <BlackGroupButton id="genre-0" value={0} onClick={(e) => handleGenreSelection(e, 0)}>Action</BlackGroupButton>
                        <BlackGroupButton id="genre-1" value={1} onClick={(e) => handleGenreSelection(e, 1)}>Adventure</BlackGroupButton>
                        <BlackGroupButton id="genre-2" value={2} onClick={(e) => handleGenreSelection(e, 2)}>Animation</BlackGroupButton>
                        <BlackGroupButton id="genre-3" value={3} onClick={(e) => handleGenreSelection(e, 3)}>Biographical</BlackGroupButton>
                        <BlackGroupButton id="genre-4" value={4} onClick={(e) => handleGenreSelection(e, 4)}>Comedy</BlackGroupButton>
                        <BlackGroupButton id="genre-5" value={5} onClick={(e) => handleGenreSelection(e, 5)}>Crime</BlackGroupButton>
                        <BlackGroupButton id="genre-6" value={6} onClick={(e) => handleGenreSelection(e, 6)}>Disaster</BlackGroupButton>
                        <BlackGroupButton id="genre-7" value={7} onClick={(e) => handleGenreSelection(e, 7)}>Documentary</BlackGroupButton>
                        <BlackGroupButton id="genre-8" value={8} onClick={(e) => handleGenreSelection(e, 8)}>Drama</BlackGroupButton>
                        <BlackGroupButton id="genre-9" value={9} onClick={(e) => handleGenreSelection(e, 9)}>Fantasy</BlackGroupButton>
                        <BlackGroupButton id="genre-10" value={10} onClick={(e) => handleGenreSelection(e, 10)}>Horror</BlackGroupButton>
                        <BlackGroupButton id="genre-11" value={11} onClick={(e) => handleGenreSelection(e, 11)}>Musical</BlackGroupButton>
                        <BlackGroupButton id="genre-12" value={12} onClick={(e) => handleGenreSelection(e, 12)}>Mystery</BlackGroupButton>
                        <BlackGroupButton id="genre-13" value={13} onClick={(e) => handleGenreSelection(e, 13)}>Noir</BlackGroupButton>
                        <BlackGroupButton id="genre-14" value={14} onClick={(e) => handleGenreSelection(e, 14)}>Romance</BlackGroupButton>
                        <BlackGroupButton id="genre-15" value={15} onClick={(e) => handleGenreSelection(e, 15)}>Satire</BlackGroupButton>
                        <BlackGroupButton id="genre-16" value={16} onClick={(e) => handleGenreSelection(e, 16)}>Science-Fiction</BlackGroupButton>
                        <BlackGroupButton id="genre-17" value={17} onClick={(e) => handleGenreSelection(e, 17)}>Spy</BlackGroupButton>
                        <BlackGroupButton id="genre-18" value={18} onClick={(e) => handleGenreSelection(e, 18)}>Teen</BlackGroupButton>
                        <BlackGroupButton id="genre-19" value={19} onClick={(e) => handleGenreSelection(e, 19)}>Thriller</BlackGroupButton>
                        <BlackGroupButton id="genre-20" value={20} onClick={(e) => handleGenreSelection(e, 20)}>War</BlackGroupButton>
                        <BlackGroupButton id="genre-21" value={21} onClick={(e) => handleGenreSelection(e, 21)}>Western</BlackGroupButton>
                    </BlackButtonGroup>
                </BlackModalBody>
                <BlackModal.Footer style={{ borderColor: "#fff", backgroundColor: "#1F2020" }}>
                    <BlackButton variant="outline-success" size="lg" onClick={props.onHide}>Vote</BlackButton>
                </BlackModal.Footer>
            </BlackModal>
        </>
    );
}

export const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Main>
            <Image src={img1} alt="Home Page Image" />
            {/*<VoteButton variant="primary" onClick={() => setModalShow(true)}>Vote Genre Now</VoteButton>
            <VotingModal
                show={modalShow}
                onHide={() => setModalShow(false)}
    />*/}

            <pdfObj data={PDF} type="application/pdf" width="100%" height="100%">
                <JoinButton without rel="noopener noreferrer" target="_blank" type="button" href={PDF}>Whitepaper</JoinButton>
            </pdfObj>
        </Main>
    )
}

export const Community = () => {
    return (
        <div id="container">
            <div class="button" id="button-7">
                <div id="dub-arrow"><img src="https://img.icons8.com/color/50/000000/discord-logo.png" alt="" /></div>
                <a href="#">Let's Go!</a>
            </div>
        </div>
    )
}

