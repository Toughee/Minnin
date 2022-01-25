import { render } from '@testing-library/react'
import PostCreateBar from '../components/PostCreateBar'

test('Renders component with no issues or error messages', () => {
    render(<PostCreateBar />)
})
