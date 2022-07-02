import styled from 'styled-components';

import TodoList from 'Components/todo-list/TodoList';

const TodoListPageStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const TodoListPage = () => (
    <TodoListPageStyled>
        <TodoList />
    </TodoListPageStyled>
);

export default TodoListPage;
