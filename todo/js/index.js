// 2-1) 할일 목록 추가("adding new todos")
// 1. 새롭게 할일을 new-todo input 필드에 입력
// 2. Enter를 쳤을 때,
// 3. 밑에 할일 목록이 추가되여 사용자에게 보여진다.


// 1. 새로운 todo 입력란 element를 가져온다.
// 2. 그 element에 keydown event를 걸어준다.
// keydown한 경우,
// new-todo 입력란에 적은 text 가져오기
// 3. 누른 key가 enter가 아닌 경우에 or input에 text가 빈 경우, return
// 4. 누른 key가 enter이면서 input에 text가 존재하는 경우에,
// ul todo-list elem 가져오기
// ul todo-list에 입력한 text를 지닌 li tag 생성하기
// li tag를 ul todo-list element에 append하기

var inputTodo = $('#new-todo')
var todoList = $('#todo-list')


function addTodo(text) {
    var todoItemEl = $('<li>');
    var viewEl = $('<div class="view">').html(
            '<input class="toggle" type="checkbox">'
            + '<label>' + text + '</label>'
            + '<button class="destroy"></button>'
    );
    var editEl = $('<input type="text" class="edit">').val(text)

    todoItemEl
        .append(viewEl)
        .append(editEl)
        .appendTo(todoList)
}


inputTodo.keydown(function(e) {
    var text = $(this).val()
    var itemEl = $('<li>')
    itemEl.append($('<a>'))
    console.log(itemEl)
    // console.log(text.length)
    if(e.keyCode != 13 || !(text.length)) return;
    addTodo(text)


})
