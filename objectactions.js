var task = {
    id: 2,
    status: 'active',
    isCompleted: false,
    spendTimes: [20],
    description: 'A new sample task for Javascript',
    comments: [
    { date: '19-04-2022 05:30PM', comment: 'Task updated with description' }
    ],
    project: { id: 2, code: 'Questions' },
    user: { id: 4, name: 'Ram' },
    categories: ['object', 'functions'],
};

//Change status to in-progress`

task.status = 'in Progess';

console.log(task)


//. Add new comment with description: 'This is a new comment' with current date and time

var dateTime = new Date().toLocaleString();
var newComment = { date: dateTime, comment : 'This is a new comment with current date and time'}

task.comments.push(newComment)

console.log(task)

//. Print the project code of the task

console.log(task.project.code);

// Print the categories with comma separated

for(i=0; i<task.categories.length; i++){

    console.log(task.categories[i]+ ",")
}

// Add new category - "array" and print the categories again
task.categories.push('array')

console.log(task)

//. Change the description
task.description='This is Changed description';

console.log(task)

// Add spend time with 5, 15, 20

task.spendTimes.push(5,15,20)

console.log(task)


// Print the name of user

console.log(task.user.name)

//. Print all comment descriptions

for(i=0; i<task.comments.length; i++){
    console.log(task.comments[i].comment)
}
//. Make task completed

console.log("TASK COMPLETED")