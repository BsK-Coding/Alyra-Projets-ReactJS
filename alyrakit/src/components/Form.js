import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  isOpen,
  onClose,
  Lorem,
} from "@chakra-ui/react"
import { useState } from "react"

const Form = () => {
  const [sampleRequest, setSampleRequest] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // get the data
    // do sth with the data
    setSampleRequest(true)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Apply for a free example</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Lorem count={2} />
        </ModalBody>
        {!sampleRequest ? (
          <form onSubmit={handleFormSubmit}>
            <FormControl>
              <label htmlFor="name">Your name</label>
              <input id="name" placeholder="Joe Doe" required />
            </FormControl>
            <FormControl>
              <label htmlFor="email">Your email</label>
              <input id="email" type="email" placeholder="joe@doe.com" required />
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        ) : (
          <p>Thank you! You will receive your sample soon!</p>
        )}
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Form
