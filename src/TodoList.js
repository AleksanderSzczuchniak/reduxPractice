import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo, filterTodo } from './store/todos'


const mapStateToProps = store => {
    console.log('mapStateToProps in TodoList.js');
    return {
        _todos: store.todos.visibleTodos
    };
};

const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodo: textInput => dispatch(filterTodo(textInput))
})

class TodoList extends React.Component {
    state = { value: '', searchValue: '' };

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        this.props._addTodo(this.state.value)
    }
    handleTodoClick = index => {
        this.props._toggleTodo(index)

    }
    handleDeleteTodo = index => {
        this.props._deleteTodo(index)
    }
    handleFilterClick =()=> {
        this.props._filterTodo(this.state.searchValue)
    }

    handleFilterChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render() {
        console.log('TodoList render,  props are:', this.props);
        return <div>
            {this.renderFilterTodo()}
            {this.renderInput()}
            {this.renderList()}
        </div>
    }

    renderFilterTodo() {
        return <div>
            <input onChange={this.handleFilterChange} />
            <button onClick={this.handleFilterClick}>Filter</button>
        </div>
    }
    renderInput() {
        return <div>
            <input className="new-todo__input" onChange={this.handleInputChange} />
            <button
                onClick={this.handleButtonClick}>
                Add todo
          </button>
        </div>;
    }

    renderList() {
        return this.props._todos.map((todo, index) =>
            <div
                className="todo"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                key={todo.text}>
                <div onClick={() => this.handleTodoClick(index)}>{todo.text}</div>
                <button
                    type="button"
                    onClick={() => this.handleDeleteTodo(index)}>X</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);