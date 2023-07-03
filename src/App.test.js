// import { render, screen } from "@testing-library/react"
// import user from "@testing-library/user-event"
// import App from "./App"

// test("receive new user and display it to the list", () => {
//   render(<App></App>)

//   const nameInput = screen.getByRole("textbox", { name: /name/i })
//   const emailInput = screen.getByRole("textbox", { name: /email/i })
//   const button = screen.getByRole("button")

//   user.click(nameInput)
//   user.keyboard("bob")
//   user.click(emailInput)
//   user.keyboard("bob@email.com")
//   user.click(button)

//   // used to see the current state of the HTML element
//   //   screen.debug()

//   const enteredName = screen.getByRole("cell", { name: "bob" })
//   const enteredEmail = screen.getByRole("cell", { name: "bob@email.com" })

//   expect(enteredName).toBeInTheDocument()
//   expect(enteredEmail).toBeInTheDocument()
// })

import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import App from "./App"

test("can receive a new user and show it on a list", () => {
  render(<App />)

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  })
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  })
  const button = screen.getByRole("button")

  user.click(nameInput)
  user.keyboard("jane")
  user.click(emailInput)
  user.keyboard("jane@jane.com")

  user.click(button)

  const name = screen.getByRole("cell", { name: "jane" })
  const email = screen.getByRole("cell", { name: "jane@jane.com" })

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
})
