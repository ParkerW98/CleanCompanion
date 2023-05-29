var count = 0;
$(".addTask").click(function () {
  count += 1;
  // added using counter to give each <ol> an ID
  // added delete task button
  $("#taskForms").append(
    $(
      `
      <li>
        <form>
          <ol class="subtasks" id="subtasks` +
        count +
        `"></ol>
          <div>
            <input placeholder='this is a main task'/>
            <button class="addSubtask" type='button'>Add subtask</button>
            <button class="deleteMe" type="button">Delete</button>
          </div>
        </form>
      </li>
   `
    )
  );
});

// added delete subtask buttoon
const subtaskHTML = `
      <li>
        <input placeholder='this is a subtask task'/>
        <button class="prependSubtask" type='button'>Add subtask</button>
        <button class="deleteMe" type="button">Delete</button>
      </li>
   `;

$("#taskForms").on("click", ".addSubtask", function () {
  // $(this).closest("form").find("ol").append($(subtaskHTML));
  // the above adds to the wrong place, changed it to the following
  $(this).parent().after($(subtaskHTML));
});

$("#taskForms").on("click", ".prependSubtask", function () {
  $(this).parent().after($(subtaskHTML));
});

// added delete action for tasks and subtasks
$("#taskForms").on("click", ".deleteMe", function () {
  $(this).closest("li").remove();
});

$("form").submit(function(event) {
  event.preventDefault();

  var taskName =$("#taskName").val();
  var taskDescription = $("#taskDescription").val();
  var taskCompleteDate = $("#taskCompleteDate").val();
  var taskCompleteTime = $("#taskCompleteDate").val();

  var container = $("<div>").addClass("container mt-3");

  var taskNameText = $("<h4>").text("Task Name: " + taskName).addClass("task-name");
  var taskDescriptionText = $("<p>").text("Description: " + taskDescription).addClass("task-description");
  var completeDateText = $("<p>").text("Complete By Date: " + taskCompleteDate).addClass("complete-date");
  var completeTimeText = $("<p>").text("Complete By Time: " + taskCompleteTime).addClass("complete-time");

  container.append(taskNameText, taskDescriptionText, completeDateText, completeTimeText);

  $("#mainContent").append(container);

  $(this)[0].reset();
});
