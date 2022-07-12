import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  background: '$white',
  flexBox: 'flex',
  flexDirection: 'column',
  size: '100',
});

export const Content = styled('div', {
  background: '$amber300',
  display: 'flex',
  flexDirection: 'column',
  padding: '90px 40px',
  borderRadius: '$rounded',
  width: '65%',
});

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
});

export const Input = styled('div', {
  display: 'flex',
  background: '$gray100',
  padding: '15px',
  margin: '15px 0',
  borderRadius: '$rounded',

  input: {
    width: '100%',
    background: 'none',
    borderStyle: 'hidden',
    outline: 'none',
  },
});

export const Button = styled('button', {
  background: '$gray400',
  color: '$white',
  padding: '15px',
  borderRadius: '$rounded',
});
