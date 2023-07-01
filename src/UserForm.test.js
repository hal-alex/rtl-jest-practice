import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import UserForm from "./UserForm"

test("it should show two inputs and a button", () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole("textbox")
  const button = screen.getByRole("button")

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test("it should call onUserAdd when the form is filled out", () => {
  //   const argsArray = []

  //   const callback = (...args) => {
  //     argsArray.push(args)
  //   }

  //   render(<UserForm onUserAdd={callback} />)

  //   const [nameInput, emailInput] = screen.getAllByRole("textbox")

  //   user.click(nameInput)
  //   user.keyboard("alex")

  //   user.click(emailInput)
  //   user.keyboard("email@email.com")

  //   const button = screen.getByRole("button")

  //   user.click(button)

  //   expect(argsArray).toHaveLength(1)
  //   expect(argsArray[0][0]).toEqual({ name: "alex", email: "email@email.com" })

  const mock = jest.fn()
  render(<UserForm onUserAdd={mock}></UserForm>)

  //   const [nameInput, emailInput] = screen.getAllByRole("textbox")

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  })

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  })

  user.click(nameInput)
  user.keyboard("alex")

  user.click(emailInput)
  user.keyboard("email@email.com")

  const button = screen.getByRole("button")

  user.click(button)

  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({ name: "alex", email: "email@email.com" })

  //2 - 15
})
