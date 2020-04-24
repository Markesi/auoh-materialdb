//JQuery(document)

$(document).ready(()=>{

    let table =$("#materials_table").DataTable({
        ajax: {
            type: "GET",
            datatype: "json",
            url: "/api/materials",
            dataSrc: ""
        },
        rowID: "_id",
        columns: [
            {data: "_id", type: "readonly", visible: false},
            {data: "name", type: "text", required: true},
            {data: "min_density", type: "float", require: true},
            {data: "max_density", type: "float", require: true},
            {data: "min_strength", type: "float", require: true},
            {data: "max_strength", type: "float", require: true},
            {data: "min_strength_density", type: "readonly", require: true},
            {data: "max_strength_density", type: "readonly", require: true}
        ],

        dom: "Bfrtip",
        select: "single",
        responsive: true,
        altEditor: true,
        buttons:[
            "columnsToggle",
            { text: "Create", name: "add"},
            { text: "Edit", name: "edit"},
            { text: "Delete", name: "delete"},
            { text: "Refresh", name: "refresh"}
        ],
        onAddRow: (datatable, rowdata, success, error) =>{
            $.ajax({
                url: "/api/material", type: "POST",
                data: rowdata,
                success: success, error: error
            });
        },
        onDeleletedRow: (datatable, rowdata, success, error) =>{
            $.ajax({
                url: "/api/material" + rowdata._id, type: "DELETE",
                data: rowdata,
                success: success, error: error
            });
        },
        onEditdRow: (datatable, rowdata, success, error) =>{
            $.ajax({
                url: "/api/material" + rowdata._id, type: "PUT",
                data: rowdata,
                success: success, error: error
            });
        }

    });
})