import { render, screen, act } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import RepositoriesListItem from "./RepositoriesListItem"

// jest.mock("../tree/FileIcon", () => {
//   return () => {
//     return "File Icon Component"
//   }
// })

const repo = {
  full_name: "react-python",
  language: "python",
  description: "testing desc",
  owner: {
    login: "google",
  },
  name: "RP",
  html_url: "www.github.com/repositories/react-python",
}

const renderRepoListItem = () =>
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repo}></RepositoriesListItem>
    </MemoryRouter>,
  )

test("should show link to GH repo", async () => {
  renderRepoListItem()

  await screen.findByRole("img", { name: "python" })

  const link = screen.getByRole("link", { name: /github-repo/i })

  expect(link).toHaveAttribute("href", repo.html_url)
})

// test("should show link to GH repo", async () => {
//   renderRepoListItem()

//   await act(async () => await pause())

//   //   await screen.findByRole("img", { name: "python" })
// })

// puts a small pause in the code to complete async functions

const pause = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 100)
  })

test("should show file icon with right icon", async () => {
  renderRepoListItem()
  const icon = await screen.findByRole("img", { name: "python" })

  expect(icon).toHaveClass("python-icon")
})

test("should show a link to code editor link", async () => {
  renderRepoListItem()

  await screen.findByRole("img", { name: "python" })

  const link = await screen.findByRole("link", {
    name: new RegExp(repo.owner.login),
  })

  expect(link).toHaveAttribute("href", `/repositories/${repo.full_name}`)
})
