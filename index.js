var ulTasks = $("#ulTasks");
var btnAdd = $("#btnAdd");
var btnReset = $("#btnReset");
var btnCleanUp = $("#btnCleanUp");
var btnSort = $("#btnSort");
var inpNewTask = $("#inpNewTask");

function addItem() {
    var listItem = $("<li>").addClass("list-group-item todo-row").text(inpNewTask.val());
    listItem.click(function () {
        listItem.toggleClass("done");
    });

    ulTasks.append(listItem);

    inpNewTask.val("");
    toggleInputBtn();
}

function clearDone() {
    $("#ulTasks .done").remove();
    toggleInputBtn();
}

function sortTasks() {
    $("#ulTasks .done").appendTo(ulTasks);
    toggleInputBtn();
}

function toggleInputBtn() {
    btnReset.prop("disabled", inpNewTask.val() == "");
    btnAdd.prop("disabled", inpNewTask.val() == "");
    btnSort.prop("disabled", ulTasks.children().length < 1);
    btnCleanUp.prop("disabled", ulTasks.children().length < 1);
}

inpNewTask.keypress(function (event) {
    if (event.keyCode == 13) {
        addItem();
    }
});

btnReset.click(function () {
    inpNewTask.val("");
    toggleInputBtn();
});

btnCleanUp.click(clearDone);

btnSort.click(sortTasks);

inpNewTask.on("input", toggleInputBtn);

btnAdd.click(addItem);

