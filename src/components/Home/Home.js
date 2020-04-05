import React, { Fragment } from 'react'
import { Alert } from 'react-bootstrap'

const Home = () => {
  return (
    <Fragment>

      <br />

      <Alert variant="success">
        <Alert.Heading><u>Section 1</u></Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>

        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>


      <Alert variant="info">
        <Alert.Heading><u>Section 2</u></Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>

        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
  </p>
      </Alert>


      <Alert variant="warning">
        <Alert.Heading><u>Section 3</u></Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
       </p>
      </Alert>

    </Fragment>
  )
}

export default Home
