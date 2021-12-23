const skills = [
    {id: 1, skill: 'learn how to use express', done: true},
    {id: 2, skill: 'Create an app skeleton', done: false},
    {id: 3, skill: 'Be a boss at back end coding', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function create(skill) {
    //add the id
    skill.id = Date.now() % 1000000000;
    //new todo's aren't done
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    //find the index based on id of todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idx, 1, skill);
  }