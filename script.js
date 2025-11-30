// FUNCTION: Update task numbering
function refreshTaskNumbers() {
    $("#todo-table tbody tr").each(function(index) {
        $(this).find("td:first").text(index + 1);
    });
}

// ADD TASK
$("#addTaskButton").click(function() {
    let taskTitle = $("#taskTitle").val().trim();
    let taskDetails = $("#taskDetails").val().trim();

    // VALIDATION
    if (taskTitle === "" || taskDetails === "") {
        alert("Please fill out BOTH Task Name and Task Description.");
        return;
    }

    let newRow = `
        <tr>
            <td></td>
            <td>${taskTitle}</td>
            <td>${taskDetails}</td>
            <td><button class="remove-task-btn">Delete</button></td>
        </tr>
    `;

    $("#todo-table tbody").append(newRow);

    refreshTaskNumbers();

    $("#taskTitle").val("");
    $("#taskDetails").val("");
});

// DELETE TASK
$("#todo-table").on("click", ".remove-task-btn", function() {
    if (confirm("Are you sure you want to delete this task?")) {
        $(this).closest("tr").remove();
        refreshTaskNumbers();
    }
});
