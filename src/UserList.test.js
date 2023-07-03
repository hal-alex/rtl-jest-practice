import { render, screen, within } from "@testing-library/react"
import UserList from "./UserList"

const renderComponent = () => {
  const users = [
    { name: "alex", email: "example@email.com" },
    { name: "alex2", email: "example2@email.com" },
  ]
  render(<UserList users={users}></UserList>)

  return { users }
}

test("render one row per user", () => {
  //   screen.logTestingPlaygroundURL()

  renderComponent()

  //first fallback
  const rows = within(screen.getByTestId("users")).getAllByRole("row")

  // second fallback
  // const rows = container.querySelectorAll("tbody tr")

  expect(rows).toHaveLength(2)
})

test("render email and name of user", () => {
  const { users } = renderComponent()

  for (let user of users) {
    const username = screen.getByRole("cell", { name: user.name })
    const email = screen.getByRole("cell", { name: user.email })

    expect(username).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})
