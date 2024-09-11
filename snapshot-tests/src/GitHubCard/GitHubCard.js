import React from "react"
import Card from "react-bootstrap/Card"
import Profile from "./Profile.png"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "20rem"}}>
        <Card.Img variant="top" src={Profile} />
        {/* Source: https://github.com/astonelv */}
        <Card.Body>
            <Card.Title>Astonelv</Card.Title>
            <Card.Text>
                Hello!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard