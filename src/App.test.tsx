import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders title and increments counter', async () => {
    render(<App />)

    // Heading
    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument()

    // Button increments
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent(/count is 0/i)

    await userEvent.click(button)
    expect(button).toHaveTextContent(/count is 1/i)
  })
})


