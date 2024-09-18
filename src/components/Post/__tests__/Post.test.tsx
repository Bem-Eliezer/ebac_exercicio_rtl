import { render, screen } from '@testing-library/react'
import Post from '..'

describe('Test <Post />', () => {
    test('Deve renderizar o Post', () => {
        render(<Post imageUrl="https://via.placeholder.com/200x200"  >
                Teste
        </Post>)
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })
}) 