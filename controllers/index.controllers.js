const db = require('../models/index.models');
const Taskmodel = db.taskModel;

exports.getIndex = async (req, res) => {

    try {
        const tasks = await Taskmodel.findAll();
        res.render('./pages/index', {
            pageTitle: 'Home',
            data: {
                title: '',
                description: ''
            },
            hasError: false,
            errors: {},
            tasks: tasks ? tasks : []
        });

    }
    catch (err) {
        res.render('./pages/error', {
            pageTitle: 'error',
            message: err.message
        });
    }

};

exports.addTask = async (req, res) => {
    let { title, description } = req.body;
    const errors = {};
    let hasError = false;

    title = title.replace(/\r?\n|\r/g, "").trim();
    description = description.replace(/\r?\n|\r/g, "").trim();

    if (!title) {
        errors.title = 'Title should not be empty.';
        hasError = true;
    }

    if (!description) {
        errors.description = 'Description should not be empty.';
        hasError = true;
    }

    if (hasError && Object.keys(errors).length > 0) {
        const tasks = await Taskmodel.findAll();
        res.render('./pages/index', {
            pageTitle: 'Home',
            data: {
                title: title,
                description: description
            },
            hasError: hasError,
            errors: errors,
            tasks: tasks ? tasks : []
        });
    }
    else {
        try {
            await Taskmodel.create({
                taskTitle: title,
                taskDescription: description
            });

            res.redirect('/');
        }
        catch (err) {
            res.render('./pages/error', {
                pageTitle: 'error',
                message: err.message
            });
        }
    }
};

exports.getTask = async (req, res) => {
    const { id } = req.params;
    const errors = {};
    let hasError = false;
    try {
        const task = await Taskmodel.findByPk(id);
        if (task) {
            res.render(`./pages/view`, {
                pageTitle: 'View',
                hasError: hasError,
                errors: errors,
                task: task ? task : {}
            });
        }
        else {
            hasError = true;
            errors.head = `${id} Invalid ID`;
            res.render('./pages/view', {
                pageTitle: 'View',
                hasError: hasError,
                errors: errors,
                task: task ? task : {}
            });
        }
    }
    catch (err) {
        res.render('./pages/error', {
            pageTitle: 'error',
            message: err.message
        });
    }
};

exports.getUpdate = async (req, res) => {

    const { id } = req.params;
    const task = await Taskmodel.findByPk(id);
    const errors = {};
    let hasError = false;

    try {
        if (task) { 
            res.render('./pages/update', {
                pageTitle: 'update',
                hasError: hasError,
                errors: errors,
                task: task ? task : {}
            });
        }
        else {
            hasError = true;
            errors.head = `${id} Invalid ID`;
            res.render('./pages/update', {
                pageTitle: 'update',
                hasError: hasError,
                errors: errors,
                task: task ? task : {}
            });
        }
    }
    catch (err) {
        res.render('./pages/error', {
            pageTitle: 'error',
            message: err.message
        });
    }
};