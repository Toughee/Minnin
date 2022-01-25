import { render } from '@testing-library/react'
import Dashboard from '../components/Dashboard'

test('Renders component with no issues or error messages', () => {
    render(<Dashboard />)
})
