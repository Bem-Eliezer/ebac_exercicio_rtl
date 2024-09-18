import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar comentarios'), () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentario adiiconado '
            }
        })
        fireEvent.click(screen.getByTestId('botao'))
        expect(screen.getByTestId('botao'))
    }
});