test("should take old men older then 90", () =>{
    const ages = [10, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", () =>{
    const courses = [
        {title: "css", price: 100},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ]

    const chipCourses = courses.filter(course => course.price < 160);
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('css');
    expect(chipCourses[1].title).toBe('REACT');
})

test('get only completed tasks', () =>{
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})