import React from "react";
import "./TaskPage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Card, Nav } from "react-bootstrap";

const TaskPage = () => {
  return (
    <div className="taskpage">
      <Navbar className="d-flex justify-content-between ">
        <h4 className="heading">Sosmad</h4>

        <div className="icons">
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className="icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chat-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
          </div>
        </div>
      </Navbar>
      <div className="stories">
        <Nav>
          <h6>Stories</h6>
        </Nav>

        <div className="stories-box">
          <div className="story-1 mx-1">
            <div className="story-bottom">
              <div className="bottom-img">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  alt=""
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
              <h6>Adison Mango</h6>
            </div>
          </div>
          <div className="story-2 mx-1">
            <div className="story-bottom">
              <div className="bottom-img">
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  alt=""
                  style={{ width: "100%", borderRadius: "50%" }}
                />
              </div>
              <h6>Adison Mango</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="button-box">
        <div className="div-selected">Explore</div>
        <div className="div-unselected">Explore</div>
      </div>
      <div className="social-card mt-5 mx-1 ">
        <Navbar className="d-flex justify-content-between mx-1 ">
          <div className="social-nav m-1">
            <img
              className="social-profile"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
            <div>
              <h6>Ahmed Dorwart</h6>
              <h6>10 Min Ago</h6>
            </div>
          </div>

          <div className="icons">
            <div className="icon-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
          </div>
        </Navbar>
        <img
          className="social-img fluid-img"
          src="https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <div className="soical-body">
          <Navbar className="d-flex justify-content-between mx-1 ">
            <div className="icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chat-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
            </div>
          </Navbar>
          <Nav style={{ margin: "5px 15px 5px 10px" }}>
            <h6 style={{ marginRight: "15px" }}>229 Likes</h6>
            <h6>229 Comments</h6>
          </Nav>

          <p style={{ margin: "5px 15px 5px 10px" }}>
            <b>Amat pauji </b>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Pariatur Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quia, dicta aliquam. Inventore nemo corporis, ipsum officia
            enim facilis molestiae qui, dolor quis commodi iste ullam, maxime
            optio ab temporibus accusamus!{" "}
          </p>
        </div>
      </div>
      {/* 
      <div className="bottom-menu mx-1">
        <div className="bottom-plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </div>
        <div className="bottom-icons">
          <div className="bottom-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
          <div className="bottom-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chat-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TaskPage;
