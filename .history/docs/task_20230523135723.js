var count = 0;
jQuery('.addTask').click(function() {
  count += 1;
   $('#taskForms').append($(`
      <li>
        <form>
          <ol class="subtasks"></ol>
          <div>
            <input placeholder='this is a main task'/>
            <button class="addSubtask" type='button'>Add subtask</button>
          </div>
        </form>
      </li>
   `))
});

const subtaskHTML =`
      <li>
        <input placeholder='this is a subtask task'/>
        <button class="prependSubtask" type='button'>Add subtask</button>
      </li>
   `

$('#taskForms').on('click', '.addSubtask', function(){
  $(this).closest('form').find('ol').append($(subtaskHTML))
});


$('#taskForms').on('click', '.prependSubtask', function(){
  $(this).parent().before($(subtaskHTML))
});