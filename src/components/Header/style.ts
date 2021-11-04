 import styles from 'styled-components';

 export const Container = styles.header`
  background: var(--blue)
 `

 export const Content = styles.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  `