import { render, screen } from "@testing-library/react"
import RepositoriesSummary from "./RepositoriesSummary"

test("should display the details the repo", () => {
  const repo = {
    stargazers_count: 11,
    open_issues: 12,
    forks: 13,
    language: "Python",
  }
  render(<RepositoriesSummary repository={repo}></RepositoriesSummary>)

  //   const languageText = screen.getByText("Python")
  //   expect(languageText).toBeVisible()

  for (let key in repo) {
    const value = repo[key]
    const element = screen.getByText(new RegExp(value))
    expect(element).toBeVisible()
  }
})
